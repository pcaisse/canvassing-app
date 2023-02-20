/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { publicProcedure, router } from "~/server/trpc";
import { saveNoteData } from "./data";

const prisma = new PrismaClient();

const appRouter = router({
  getNote: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await prisma.note.findUnique({ where: { id: input.id } });
    }),
  allNotes: publicProcedure.query(async () => {
    return await prisma.note.findMany();
  }),
  saveNote: publicProcedure.input(saveNoteData).mutation(async ({ input }) => {
    if (input?.id) {
      return await prisma.note.update({ where: { id: input.id }, data: input });
    }
    return await prisma.note.create({ data: input });
  }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
