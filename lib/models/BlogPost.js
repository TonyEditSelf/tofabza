import { z } from "zod";
import { ObjectId } from "mongodb";

// Helper to validate MongoDB ObjectId if passed as string or object
const objectIdSchema = z.custom((val) => {
  return ObjectId.isValid(val);
}, { message: "Invalid ObjectId" });

// Zod validation schema for BlogPost
export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  featuredImage: z.string().url().optional().or(z.literal("")),
  categories: z.array(objectIdSchema).default([]),
  tags: z.array(z.string()).default([]),
  status: z.enum(["draft", "published", "scheduled"]).default("draft"),
  author: objectIdSchema,
  publishedAt: z.preprocess((val) => (val ? new Date(val) : val), z.date().optional().nullable()),
  createdAt: z.preprocess((val) => (val ? new Date(val) : val), z.date().default(() => new Date())),
  updatedAt: z.preprocess((val) => (val ? new Date(val) : val), z.date().default(() => new Date())),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
