import { z } from "zod";

export const hasId = z.object({ id: z.number() });

export const saveNoteData = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  note: z.string().min(1, { message: "Note is required" }),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullish(),
});

export type SaveNoteData = z.TypeOf<typeof saveNoteData>;
