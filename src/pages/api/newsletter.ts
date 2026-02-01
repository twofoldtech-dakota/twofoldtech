import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString() || '';

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Add to Resend audience (if you have one set up)
    // await resend.contacts.create({
    //   email,
    //   audienceId: import.meta.env.RESEND_AUDIENCE_ID,
    // });

    // Send welcome email
    await resend.emails.send({
      from: 'Twofold Tech <hello@twofold.tech>',
      to: [email],
      subject: 'Welcome to Twofold Tech Updates',
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You'll receive updates when we publish new technical insights on:</p>
        <ul>
          <li>Agentic Engineering</li>
          <li>Enterprise Modernization</li>
          <li>Sitecore Migrations</li>
          <li>Product Updates</li>
        </ul>
        <p>In the meantime, check out our latest posts at <a href="https://twofold.tech/blog">twofold.tech/blog</a></p>
        <p>Best,<br>The Twofold Team</p>
      `,
    });

    // Notify team of new subscriber
    await resend.emails.send({
      from: 'Newsletter <newsletter@twofold.tech>',
      to: ['hello@twofold.tech'],
      subject: 'New Newsletter Subscriber',
      html: `<p>New subscriber: ${email}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
