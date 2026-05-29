import { z } from "zod";
import { ObjectId } from "mongodb";

const objectIdSchema = z
  .string()
  .refine((value) => ObjectId.isValid(value), { message: "Invalid ObjectId" });

const imageSchema = z.string().refine((value) => {
  if (!value) return true;
  if (value.startsWith("/")) return true;

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}, { message: "Invalid image URL" });

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  featuredImage: imageSchema.default(""),
  categories: z.array(objectIdSchema).default([]),
  tags: z.array(z.string()).default([]),
  status: z.enum(["draft", "published", "scheduled"]).default("draft"),
  author: objectIdSchema,
  publishedAt: z.date().nullable().default(null),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  seoTitle: z.string().default(""),
  seoDescription: z.string().default(""),
});
