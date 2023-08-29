import { z } from "zod";

export const testSchema = z.object({
  name: z.string(),
});

export type TestSchema = z.infer<typeof testSchema>;
