import { z } from "zod";


export const ErrorSchema = z.object({
  error: z.string() || z.boolean,
});

export type TErrorSchema = z.infer<typeof ErrorSchema>;