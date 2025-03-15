import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Contact from "@/app/model/contact";
// import nodemailer from "nodemailer";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

console.log(process.env.EMAIL_TO)

const emailResponse = await resend.emails.send({
  from: "onboarding@resend.dev",  // ✅ Default Resend sender for development
  to: process.env.EMAIL_TO ||"",       // ✅ Your email
  subject: "New Contact Form Submission",
  text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  replyTo: email,  // ✅ User's email so you can reply
});

if (emailResponse.error) {
  console.error("Resend Error:", emailResponse.error);
  return NextResponse.json({ error: emailResponse.error.message }, { status: 400 });
}

    console.log("✅ Email sent:", emailResponse);
    
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
