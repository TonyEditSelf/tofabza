import { ObjectId } from "mongodb";

export class BlogApiError extends Error {
  constructor(message, status = 400, details = null) {
    super(message);
    this.name = "BlogApiError";
    this.status = status;
    this.details = details;
  }
}

export function jsonError(error, fallbackStatus = 500) {
  const status = error instanceof BlogApiError ? error.status : fallbackStatus;
  const body = {
    error: error?.message || "Unexpected blog API error",
  };

  if (error instanceof BlogApiError && error.details) {
    body.details = error.details;
  }

  return Response.json(body, { status });
}

export function toObjectIdString(value) {
  if (!value) return null;

  if (value instanceof ObjectId) {
    return value.toHexString();
  }

  if (typeof value === "string") {
    return ObjectId.isValid(value) ? value : null;
  }

  if (typeof value === "object") {
    const nestedId = value._id || value.id || value.$oid;
    if (nestedId && nestedId !== value) {
      return toObjectIdString(nestedId);
    }
  }

  const stringValue = value?.toString?.();
  return ObjectId.isValid(stringValue) ? stringValue : null;
}

export function toObjectId(value, fieldName = "id") {
  const id = toObjectIdString(value);
  if (!id) {
    throw new BlogApiError(`Invalid ${fieldName}`, 400);
  }

  return new ObjectId(id);
}

export function toObjectIdArray(values, fieldName = "ids") {
  if (values == null) return [];

  if (!Array.isArray(values)) {
    throw new BlogApiError(`${fieldName} must be an array`, 400);
  }

  return values.map((value, index) =>
    toObjectId(value, `${fieldName}[${index}]`),
  );
}

export function serializeCategory(category) {
  if (!category) return null;

  return {
    ...category,
    _id: toObjectIdString(category._id),
    createdAt: serializeDate(category.createdAt),
    updatedAt: serializeDate(category.updatedAt),
  };
}

export function serializePost(post) {
  if (!post) return null;

  return {
    ...post,
    _id: toObjectIdString(post._id),
    author: toObjectIdString(post.author),
    categories: Array.isArray(post.categories)
      ? post.categories.map(toObjectIdString).filter(Boolean)
      : [],
    createdAt: serializeDate(post.createdAt),
    updatedAt: serializeDate(post.updatedAt),
    publishedAt: serializeDate(post.publishedAt),
  };
}

export function serializeDate(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

export function parsePageParams(searchParams) {
  const page = Math.max(
    1,
    Number.parseInt(searchParams.get("page") || "1", 10),
  );
  const limit = Math.min(
    50,
    Math.max(1, Number.parseInt(searchParams.get("limit") || "10", 10)),
  );

  return { page, limit, skip: (page - 1) * limit };
}

export function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function requireAdmin(db, session) {
  if (!session?.user) {
    throw new BlogApiError("Unauthorized", 401);
  }

  const sessionUserId = toObjectIdString(session.user.id);
  let user = null;

  if (sessionUserId) {
    user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(sessionUserId) });
  }

  if (!user && session.user.email) {
    user = await db.collection("users").findOne({
      email: { $regex: `^${escapeRegex(session.user.email)}$`, $options: "i" },
    });
  }

  const role = user?.role || session.user.role;
  if (role !== "admin") {
    throw new BlogApiError("Unauthorized", 401);
  }

  if (user?._id) {
    return user;
  }

  if (sessionUserId) {
    return {
      _id: new ObjectId(sessionUserId),
      email: session.user.email,
      role: "admin",
    };
  }

  throw new BlogApiError("Admin user id is missing", 401);
}

export function normalizeCategoryPayload(body) {
  const name = cleanRequiredString(body?.name, "Category name");
  const slug = slugify(body?.slug || name);

  if (!slug) {
    throw new BlogApiError("Category slug is required", 400);
  }

  return {
    name,
    slug,
    description: cleanOptionalString(body?.description),
  };
}

export function normalizePostPayload(
  body,
  { authorId, existingPost = null } = {},
) {
  const title = cleanRequiredString(body?.title, "Title");
  const slug = slugify(body?.slug || title);

  if (!slug) {
    throw new BlogApiError("Slug is required", 400);
  }

  const status = cleanOptionalString(body?.status) || "draft";
  if (!["draft", "published", "scheduled"].includes(status)) {
    throw new BlogApiError("Invalid post status", 400);
  }

  let publishedAt = parseOptionalDate(body?.publishedAt);
  if (status === "published" && !publishedAt) {
    publishedAt = new Date();
  }

  if (status === "draft") {
    publishedAt = null;
  }

  return {
    title,
    slug,
    excerpt: cleanRequiredString(body?.excerpt, "Excerpt"),
    content: cleanRequiredString(body?.content, "Content"),
    featuredImage: normalizeImage(body?.featuredImage),
    featuredImageAlt: cleanOptionalString(body?.featuredImageAlt),
    categories:
      body?.categories === undefined && existingPost
        ? toObjectIdArray(existingPost.categories, "categories")
        : toObjectIdArray(body?.categories, "categories"),
    tags: normalizeTags(body?.tags),
    status,
    author: authorId
      ? toObjectId(authorId, "author")
      : toObjectId(existingPost?.author || body?.author, "author"),
    publishedAt,
    seoTitle: cleanOptionalString(body?.seoTitle),
    seoDescription: cleanOptionalString(body?.seoDescription),
  };
}

export function buildPublicPostPipeline(match, { skip = 0, limit = 9 } = {}) {
  return [
    { $match: match },
    { $sort: { publishedAt: -1, createdAt: -1 } },
    { $skip: skip },
    { $limit: limit },
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "authorDetails",
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "categories",
        foreignField: "_id",
        as: "categoryDetails",
      },
    },
    {
      $unwind: {
        path: "$authorDetails",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];
}

function cleanRequiredString(value, label) {
  const cleaned = cleanOptionalString(value);
  if (!cleaned) {
    throw new BlogApiError(`${label} is required`, 400);
  }

  return cleaned;
}

function cleanOptionalString(value) {
  if (value == null) return "";
  return String(value).trim();
}

function normalizeImage(value) {
  const image = cleanOptionalString(value);
  if (!image) return "";
  if (image.startsWith("/")) return image;

  try {
    new URL(image);
    return image;
  } catch {
    throw new BlogApiError("Invalid image URL", 400);
  }
}

function normalizeTags(value) {
  if (!value) return [];

  const values = Array.isArray(value) ? value : String(value).split(",");
  return values.map((tag) => cleanOptionalString(tag)).filter(Boolean);
}

function parseOptionalDate(value) {
  if (!value) return null;

  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}
