'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessageAction(prevState: any, formData: FormData) {
  if (!formData || !formData.get) {
    return { message: 'Invalid form submission', success: false };
  }

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const userMessage = formData.get('message') as string;

  if (!name || !email || !userMessage) {
    return { message: 'Please fill in all fields', success: false };
  }

  // If no Resend API key is configured, return an error
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    return { message: 'Contact service is not configured.', success: false };
  }

  try {
    const ownerEmail = process.env.OWNER_EMAIL || 'arshshaikh1520@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    // 1. Send message to the owner
    const ownerEmailResult = await resend.emails.send({
      from: `ByArsh Contact Form <${fromEmail}>`,
      to: [ownerEmail],
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${userMessage}`,
      replyTo: email,
    });

    if (ownerEmailResult.error) {
      console.error('Failed to send owner email:', ownerEmailResult.error);
      return {
        message: 'Failed to send message. Please try again later.',
        success: false,
      };
    }

    // 2. Send "Thank You" Auto-Reply to Sender
    const subscriberEmailResult = await resend.emails.send({
      from: `Arsh <${fromEmail}>`,
      to: [email],
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},\n\nThank you so much for your message. I've received it and will get back to you as soon as possible.\n\nBest,\nArsh`,
    });

    if (subscriberEmailResult.error) {
      console.error(
        'Failed to send auto-reply to sender:',
        subscriberEmailResult.error,
      );
    }

    return { message: 'Message sent successfully!', success: true };
  } catch (error) {
    console.error('Failed to send contact emails:', error);
    return {
      message: 'Failed to send message. Please try again later.',
      success: false,
    };
  }
}

export async function sendGratitudeAction(prevState: any, formData: FormData) {
  if (!formData || !formData.get) {
    return { message: 'Invalid form submission', success: false };
  }

  const gratitude = formData.get('gratitude') as string;
  const email = formData.get('email') as string;

  if (!gratitude) {
    return { message: 'Please share your gratitude', success: false };
  }

  // If no Resend API key is configured, return an error
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    return { message: 'Contact service is not configured.', success: false };
  }

  try {
    const ownerEmail = process.env.OWNER_EMAIL || 'arshshaikh1520@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

    // Send gratitude to the owner
    const ownerEmailResult = await resend.emails.send({
      from: `ByArsh Gratitude <${fromEmail}>`,
      to: [ownerEmail],
      subject: `New Moment of Gratitude Shared`,
      text: `Someone shared a moment of gratitude on the website:\n\n"${gratitude}"${email ? `\n\nFrom: ${email}` : ''}`,
      replyTo: email || undefined,
    });

    if (ownerEmailResult.error) {
      console.error('Failed to send owner email:', ownerEmailResult.error);
      return {
        message: 'Failed to send gratitude. Please try again later.',
        success: false,
      };
    }

    // Send auto-reply to sender if they provided an email
    if (email) {
      const subscriberEmailResult = await resend.emails.send({
        from: `Arsh <${fromEmail}>`,
        to: [email],
        subject: 'Thank you for sharing your gratitude',
        text: `Hi there,\n\nThank you so much for sharing your moment of gratitude on the website. I truly appreciate you taking the time to pause and reflect. Sharing gratitude makes this little corner of the internet a warmer place.\n\nYour gratitude:\n"${gratitude}"\n\nBest,\nArsh`,
      });

      if (subscriberEmailResult.error) {
        console.error(
          'Failed to send gratitude auto-reply to sender:',
          subscriberEmailResult.error,
        );
      }
    }

    return { message: 'Thank you for sharing your gratitude!', success: true };
  } catch (error) {
    console.error('Failed to send gratitude email:', error);
    return {
      message: 'Failed to send gratitude. Please try again later.',
      success: false,
    };
  }
}
