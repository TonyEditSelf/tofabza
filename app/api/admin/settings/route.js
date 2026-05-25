import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function PUT(request) {
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { email, password, newPassword } = await request.json();
    const db = await getDb();
    
    // First, verify the current password
    const user = await db.collection("users").findOne({ email: session.user.email });
    
    if (!user || !user.password) {
      return NextResponse.json({ error: "No credentials found for this account" }, { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
    }

    const updates = {};
    
    // Update email if provided and different
    if (email && email !== user.email) {
      // Check if email already exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return NextResponse.json({ error: "Email already in use" }, { status: 400 });
      }
      updates.email = email;
    }

    // Update password if provided
    if (newPassword && newPassword.length >= 6) {
      updates.password = await bcrypt.hash(newPassword, 10);
    }

    if (Object.keys(updates).length > 0) {
      updates.updatedAt = new Date();
      await db.collection("users").updateOne(
        { email: session.user.email },
        { $set: updates }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
