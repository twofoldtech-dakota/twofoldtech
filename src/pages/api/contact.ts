import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const company = formData.get('company')?.toString() || '';
    const inquiry = formData.get('inquiry')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send notification email to team
    await resend.emails.send({
      from: 'Twofold Contact <contact@twofold.tech>',
      to: ['hello@twofold.tech'],
      replyTo: email,
      subject: `New ${inquiry || 'Contact'} Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry || 'General'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'Twofold Tech <hello@twofold.tech>',
      to: [email],
      subject: 'Thanks for reaching out to Twofold Tech',
      html: `
        <h2>Thanks for your message, ${name}!</h2>
        <p>We've received your inquiry and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our products:</p>
        <ul>
          <li><a href="https://twofold.tech/studio">STUDIO</a> - Agentic Orchestration OS</li>
          <li><a href="https://twofold.tech/alloy">ALLOY</a> - Sitecore Migration Engine</li>
        </ul>
        <p>Best,<br>The Twofold Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
