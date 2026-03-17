import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return Response.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
