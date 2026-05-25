import { z } from "zod";
import { ObjectId } from "mongodb";

// Zod validation schema for Category
export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
});

// Helper for type inference if needed
// export type Category = z.infer<typeof categorySchema>;
