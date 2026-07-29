'use server';

import { Resend } from 'resend';

// Only initialize if key exists and isn't the placeholder, otherwise we'll gracefully fallback
const apiKey = process.env.RESEND_API_KEY;
const isValidKey = apiKey && apiKey.startsWith('re_');
const resend = isValidKey ? new Resend(apiKey) : null;
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'you@example.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function subscribeAction(prevState: any, formData: FormData) {
  if (!formData || !formData.get) {
    console.error('Invalid formData received:', formData);
    return { message: 'Invalid form submission', success: false };
  }
  const email = formData.get('email') as string;

  if (!email || typeof email !== 'string') {
    return { message: 'Invalid email address', success: false };
  }

  // If no Resend API key is configured, return an error
  if (!resend) {
    console.error('RESEND_API_KEY is not set.');
    return { message: 'Newsletter service is not configured.', success: false };
  }

  try {
    // 1. Send Notification to Owner
    const ownerEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [OWNER_EMAIL],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <h2>New Subscriber!</h2>
        <p>A new user has subscribed to the ByArsh newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (ownerEmailResult.error) {
      console.error('Failed to send owner email:', ownerEmailResult.error);
      return {
        message: 'Failed to subscribe. Please try again later.',
        success: false,
      };
    }

    // 2. Send "Thank You" Auto-Reply to Subscriber
    const subscriberEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Welcome to the ByArsh Newsletter ✨',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #171717;">
          <h2 style="font-weight: 600; color: #171717;">Thank you for subscribing!</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Hi there,
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Welcome to the ByArsh newsletter. I am thrilled to have you here. 
            This is a space to pause, wonder, and grow, and I can't wait to share 
            thoughts, stories, and updates with you.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Expect occasional emails—nothing spammy, I promise.
          </p>
          <br/>
          <p style="font-size: 16px; color: #555;">
            Warmly,<br/>
            <strong>Arsh</strong>
          </p>
        </div>
      `,
    });

    if (subscriberEmailResult.error) {
      console.error(
        'Failed to send subscriber email:',
        subscriberEmailResult.error,
      );
      // We still return success if they subscribed, but maybe log it
    }

    return { message: 'Successfully subscribed!', success: true };
  } catch (error) {
    console.error('Failed to send subscription emails:', error);
    return {
      message: 'Failed to subscribe. Please try again later.',
      success: false,
    };
  }
}
