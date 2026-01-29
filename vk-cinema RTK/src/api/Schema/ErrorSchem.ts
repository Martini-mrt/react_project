import { z } from "zod";


export const ErrorSchema = z.object({
  result: z.boolean(),
  // result: z.string(),
});

export type TErrorSchema = z.infer<typeof ErrorSchema>;