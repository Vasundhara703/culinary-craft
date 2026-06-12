import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Disable caching
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

    const { email, otp, action, username } = bodyData || {};

    if (!email) {
      return res.status(400).json({ error: 'Email address is required.' });
    }

    const emailLower = email.trim().toLowerCase();
    const kvdbUrl = `https://kvdb.io/TvGYRp8bXXZoRaeWemPWCu/otp_${encodeURIComponent(emailLower)}`;

    // 1. Action: SEND OTP
    if (action === 'send') {
      const code = Math.floor(100000 + Math.random() * 900000).toString();

      // Store in KVdb with 5 minutes expiry
      const kvdbRes = await fetch(kvdbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp: code, expiry: Date.now() + 5 * 60 * 1000 })
      });

      if (!kvdbRes.ok) {
        const text = await kvdbRes.text();
        return res.status(500).json({ error: 'Failed to initialize session database: ' + text });
      }

      const adminEmail = 'mishravasundhara6@gmail.com';
      const emailUser = process.env.EMAIL_USER || adminEmail;
      const emailPass = process.env.EMAIL_PASS;

      // If SMTP passcode is missing, log the OTP locally and succeed gracefully for local development
      if (!emailPass) {
        console.warn(`[OTP Mock Log] To: ${emailLower} -> OTP: ${code}`);
        return res.status(200).json({ 
          status: 'logged',
          message: 'Verification code generated. SMTP mail sending is pending configuration. (Check server logs)' 
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

      // Send OTP to user
      const name = username || 'Guest Chef';
      await transporter.sendMail({
        from: `"Culinary Craft" <${emailUser}>`,
        to: emailLower,
        subject: `${code} is your Culinary Craft verification code`,
        text: `Hi ${name},\n\nYour one-time verification code is: ${code}\n\nThis code is valid for 5 minutes. Please enter it on the login page to access Culinary Craft.\n\nWarm regards,\nVasundhara Mishra`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #1f2937; background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; max-width: 500px; margin: 0 auto;">
            <h2 style="color: #e65c00; font-size: 20px; font-weight: 700; margin-top: 0; font-style: italic; border-bottom: 2px solid #e65c00; padding-bottom: 12px;">
              Culinary Craft
            </h2>
            <div style="margin-top: 18px; line-height: 1.6; font-size: 15px; color: #374151;">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Your one-time verification passcode is:</p>
              <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; text-align: center; margin: 20px 0; box-shadow: var(--shadow-sm);">
                <span style="font-size: 32px; font-weight: 800; letter-spacing: 4px; color: #e65c00;">${code}</span>
              </div>
              <p style="font-size: 13px; color: #6b7280;">This code is valid for <strong>5 minutes</strong>. If you did not request this code, you can safely ignore this email.</p>
            </div>
            <div style="margin-top: 28px; border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 13px; color: #4b5563;">
              <p style="margin: 0;">Warm regards,</p>
              <p style="margin: 4px 0 0 0; font-weight: 700; color: #1f2937;">Vasundhara Mishra</p>
              <p style="margin: 2px 0 0 0; color: #e65c00; font-weight: 600;">Culinary Craft Creator</p>
            </div>
          </div>
        `
      });

      return res.status(200).json({ status: 'ok', message: 'Verification code sent.' });
    }

    // 2. Action: VERIFY OTP
    if (action === 'verify') {
      if (!otp) {
        return res.status(400).json({ error: 'Verification code is required.' });
      }

      const response = await fetch(kvdbUrl);
      if (!response.ok) {
        return res.status(400).json({ error: 'No verification code found or session expired.' });
      }

      const data = await response.json();
      if (Date.now() > data.expiry) {
        // Delete expired key
        await fetch(kvdbUrl, { method: 'DELETE' });
        return res.status(400).json({ error: 'Verification code has expired. Please request a new one.' });
      }

      if (data.otp !== otp.trim()) {
        return res.status(400).json({ error: 'Incorrect verification code. Please try again.' });
      }

      // Success - delete verification code from database
      await fetch(kvdbUrl, { method: 'DELETE' });
      return res.status(200).json({ status: 'ok' });
    }

    return res.status(400).json({ error: 'Invalid action parameter.' });
  } catch (error) {
    console.error("OTP API Failed:", error);
    return res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
}
