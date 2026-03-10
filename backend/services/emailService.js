const transporter = require('../config/email');

const sendContactEmail = async ({ name, email, subject, message }) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject || 'New Message'}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px; border-radius: 10px;">
        <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px; margin-bottom: 20px;">
          📬 New Contact Form Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 12px; font-weight: bold; width: 100px; background: #fff; border: 1px solid #e2e8f0;">Name:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; background: #fff; border: 1px solid #e2e8f0;">Email:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; background: #fff; border: 1px solid #e2e8f0;">Subject:</td>
            <td style="padding: 12px; background: #fff; border: 1px solid #e2e8f0;">${subject || 'Not specified'}</td>
          </tr>
        </table>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h3 style="margin-top: 0; color: #333; font-size: 16px;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.8; color: #444; margin: 0;">${message}</p>
        </div>
        
        <p style="color: #888; font-size: 12px; margin-top: 20px; text-align: center;">
          Sent from Portfolio Contact Form at ${new Date().toLocaleString()}
        </p>
      </div>
    `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };
