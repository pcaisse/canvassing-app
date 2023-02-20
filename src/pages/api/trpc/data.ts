import { z } from "zod";

export const saveNoteData = z.object({
  id: z.number().optional(),
  name: z.string(),
  note: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().nullish(),
});

export type SaveNoteData = z.TypeOf<typeof saveNoteData>;
