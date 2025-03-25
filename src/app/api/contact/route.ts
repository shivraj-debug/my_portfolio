import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Contact from "@/app/model/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // Check if RESEND_API_KEY is defined
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not defined");
    return NextResponse.json({ error: "Email service API key is missing" }, { status: 500 });
  }

  // Connect to the database
  try {
    await dbConnect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }

  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    // Validate the request body
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Save the contact to the database
    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
    } catch (error) {
      return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
    }

    // Send the email
    const emailResponse = await resend.emails.send({
      from: "info@futureconceptdesign.com",
      to: ["shivrajstm2002@gmail.com"],
      subject: "New Contact Form Submission",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    if (emailResponse.error) {
      console.error("Resend Error:", emailResponse.error);
      return NextResponse.json({ error: emailResponse.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 201 });
  } catch (error:any) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: "Server error", details: error.message }, { status: 500 });
  }
}