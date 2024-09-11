// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST request handler for form submission
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Configure the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Securely fetched from environment variables
        pass: process.env.GMAIL_PASS,
      },
    });

    // Send the email using the transporter
    await transporter.sendMail({
      from: email,
      to: "info@gracefoodculture.com", // The recipient email address
      subject: `Contact from ${name}`,
      text: message,
      html: `
        <h1>New Message from ${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Return a success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
