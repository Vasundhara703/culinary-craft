import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers for cross-origin security compatibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Disable caching for feedback processing
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let bodyData = req.body;
    if (typeof bodyData === 'string') {
      bodyData = JSON.parse(bodyData);
    }

    const { name, email, message } = bodyData || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const adminEmail = 'mishravasundhara6@gmail.com';
    const emailUser = process.env.EMAIL_USER || adminEmail;
    const emailPass = process.env.EMAIL_PASS; // Gmail App Password configured in Vercel env

    // If SMTP passcode is missing, log the feedback locally and succeed gracefully
    if (!emailPass) {
      console.warn("EMAIL_PASS environment variable is not configured. Logging feedback locally.");
      console.log(`[Feedback Log] From: ${name} (${email})\nMessage: ${message}`);
      return res.status(200).json({ 
        status: 'logged',
        message: 'Feedback received successfully. SMTP mail sending is pending configuration.' 
      });
    }

    // Set up standard Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // 1. Send feedback details to the admin email
    await transporter.sendMail({
      from: `"${name}" <${emailUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `Culinary Craft: New Suggestion from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1f2937; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e65c00; font-size: 20px; font-weight: 700; margin-top: 0; border-bottom: 2px solid #e65c00; padding-bottom: 12px;">
            📬 New Suggestion Received
          </h2>
          <div style="margin-top: 18px;">
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #e65c00; text-decoration: none;">${email}</a></p>
          </div>
          <div style="margin-top: 20px; background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #f3f4f6; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Message:</p>
            <blockquote style="margin: 0; font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap; font-style: italic;">"${message}"</blockquote>
          </div>
          <p style="font-size: 11px; color: #9ca3af; margin-top: 24px; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 12px;">
            Sent automatically from Culinary Craft.
          </p>
        </div>
      `
    });

    // 2. Send the automatic thank-you confirmation back to the user
    await transporter.sendMail({
      from: `"Culinary Craft" <${emailUser}>`,
      to: email,
      subject: `Thank you for your feedback!`,
      text: `Hi ${name},\n\nThank you for reaching out and sharing your feedback/suggestions for Culinary Craft!\n\nI have received your message and will review it shortly.\n\nBest regards,\nVasundhara Mishra`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1f2937; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e65c00; font-size: 20px; font-weight: 700; margin-top: 0; font-style: italic; border-bottom: 2px solid #e65c00; padding-bottom: 12px;">
            Culinary Craft
          </h2>
          <div style="margin-top: 18px; line-height: 1.6; font-size: 15px; color: #374151;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out and sharing your feedback or suggestions for Culinary Craft! I have received your message and will read through it shortly.</p>
            <p>Your suggestions help make the cooking companion experience more interactive and helpful for everyone.</p>
          </div>
          <div style="margin-top: 28px; border-top: 1px solid #e5e7eb; padding-top: 16px;">
            <p style="margin: 0; font-size: 14px; color: #4b5563;">Warm regards,</p>
            <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #1f2937;">Vasundhara Mishra</p>
            <p style="margin: 2px 0 0 0; font-size: 13px; color: #e65c00; font-weight: 600;">Culinary Craft Creator</p>
          </div>
        </div>
      `
    });

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: 'Failed to send emails: ' + error.message });
  }
}
