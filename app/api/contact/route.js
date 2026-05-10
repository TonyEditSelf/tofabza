// app/api/contact/route.js
// Contact form handler — saves to MongoDB + sends email via Resend
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getDb } from "@/lib/mongodb";
import { v4 as uuidv4 } from "uuid";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Save to DB
    try {
      const db = await getDb();
      await db.collection("contacts").insertOne({
        id: uuidv4(),
        name, email, service, message,
        created_at: new Date().toISOString(),
      });
    } catch (dbErr) {
      console.warn("Contact DB save failed (non-fatal):", dbErr.message);
    }

    // Send email via Resend
    const html = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B1C2C; color: #ffffff; padding: 32px; border-radius: 12px;">
        <h1 style="color: #D4AF37; font-size: 24px; margin: 0 0 24px;">New Contact Inquiry</h1>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #D4AF37; width: 140px;"><strong>Name:</strong></td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #D4AF37;"><strong>Email:</strong></td><td style="padding: 8px 0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #D4AF37;"><strong>Service:</strong></td><td style="padding: 8px 0;">${service}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #0E2238; border-left: 3px solid #D4AF37; border-radius: 6px;">
          <div style="color: #D4AF37; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Message</div>
          <div style="line-height: 1.6; white-space: pre-wrap;">${message.replace(/[<>]/g, "")}</div>
        </div>
        <div style="margin-top: 32px; font-size: 12px; color: #888;">Sent from Tofabza contact form</div>
      </div>
    `;

    try {
      const { data, error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
        to: [process.env.CONTACT_TO_EMAIL || "onboarding@resend.dev"],
        subject: `New Inquiry: ${name} — ${service}`,
        html,
        replyTo: email,
      });
      if (error) {
        console.error("Resend error:", error);
        // Still return success since saved to DB
      }
    } catch (emailErr) {
      console.error("Resend send failed:", emailErr.message);
    }

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch within 24 hours." });
  } catch (e) {
    console.error("contact error:", e);
    return NextResponse.json({ error: e.message || "Something went wrong" }, { status: 500 });
  }
}
