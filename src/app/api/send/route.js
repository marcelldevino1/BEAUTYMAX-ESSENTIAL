import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Memanggil kunci rahasia dari .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Beautymax Contact <onboarding@resend.dev>', 
      
      to: ['help@jk.beautymaxid.com'], 
      
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Message from Beautymax Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}