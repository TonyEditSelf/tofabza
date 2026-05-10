import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { getDb } from "@/lib/mongodb";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const db = await getDb();
    const user = await db.collection("users").findOne({ email: session.user.email });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { name, phone } = await request.json();
    const db = await getDb();

    const result = await db.collection("users").updateOne(
      { email: session.user.email },
      { 
        $set: { 
          name, 
          phone, 
          profileCompleted: true,
          updatedAt: new Date() 
        } 
      }
    );

    if (result.modifiedCount > 0) {
      // Send notification email
      try {
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
          to: "togmotiv@gmail.com",
          subject: "New User Registration Complete - Tofabza",
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #0B1C2C;">
              <h2 style="color: #D4AF37;">New User Signed Up!</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${session.user.email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <hr style="border: 1px solid #eee;" />
              <p style="font-size: 12px; color: #666;">Tofabza Notification System</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Failed to send notification email:", emailErr);
      }

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "No changes made" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
