// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";


export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    console.log("New contact form submission:", { name, email, message });
    // Optionally: Save to a database or send an email
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error(error); 
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}