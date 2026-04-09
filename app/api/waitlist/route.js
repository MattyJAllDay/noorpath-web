import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function getRateLimitInfo(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { firstRequest: now, count: 1 });
    return { limited: false };
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) {
    return { limited: true };
  }

  return { limited: false };
}

export async function POST(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

  const { limited } = getRateLimitInfo(ip);
  if (limited) {
    return Response.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

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

    await resend.emails.send({
      from: 'NoorPath <hello@noorpath.app>',
      to: email,
      subject: 'You\'re on the list.',
      html: `
        <div style="font-family: 'IBM Plex Sans', sans-serif; max-width: 480px; margin: 0 auto; padding: 48px 32px; background: #FDFCFA; color: #291602;">
          <img src="https://noorpath.app/logo.svg" alt="NoorPath" style="width: 48px; margin-bottom: 32px;" />
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; color: #291602;">You're on the list.</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #7A6E62; margin-bottom: 24px;">You'll be among the first to know when NoorPath launches.</p>
          <p style="font-size: 16px; line-height: 1.6; color: #7A6E62; margin-bottom: 48px;">One app. Five prayers. Every day.</p>
          <p style="font-size: 13px; color: #A89E94;">— The NoorPath Team</p>
        </div>
      `
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
