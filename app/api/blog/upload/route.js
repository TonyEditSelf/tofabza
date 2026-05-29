import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";
import { v2 as cloudinary } from "cloudinary";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { getDb } from "@/lib/mongodb";
import { BlogApiError, jsonError, requireAdmin } from "@/lib/blog-backend";

const hasCloudinary =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET;

if (hasCloudinary) {
  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export async function POST(request) {
  try {
    const db = await getDb();
    const session = await getServerSession(authOptions);
    await requireAdmin(db, session);

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file.arrayBuffer !== "function") {
      throw new BlogApiError("No file uploaded", 400);
    }

    if (file.type && !file.type.startsWith("image/")) {
      throw new BlogApiError("Only image uploads are allowed", 400);
    }

    const maxBytes = 8 * 1024 * 1024;
    if (file.size > maxBytes) {
      throw new BlogApiError("Image must be smaller than 8 MB", 400);
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (hasCloudinary) {
      const uploadResult = await uploadToCloudinary(buffer);
      return NextResponse.json({ url: uploadResult.secure_url }, { status: 201 });
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const ext = getSafeExtension(file.name);
    const fileName = `${Date.now()}-${randomUUID()}${ext}`;
    const filePath = path.join(uploadDir, fileName);

    await writeFile(filePath, buffer);

    return NextResponse.json({ url: `/uploads/${fileName}` }, { status: 201 });
  } catch (error) {
    console.error("[Blog Upload]", error);
    return jsonError(error);
  }
}

function uploadToCloudinary(buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "blog_uploads" },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    uploadStream.end(buffer);
  });
}

function getSafeExtension(fileName = "") {
  const ext = path.extname(fileName).toLowerCase();
  if (/^\.[a-z0-9]{1,8}$/.test(ext)) {
    return ext;
  }

  return ".jpg";
}
