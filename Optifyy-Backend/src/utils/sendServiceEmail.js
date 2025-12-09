const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: process.env.NODEMAILER_PORT,
  secure: true,
  pool: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD, // Ensure this is an App Password
  },
});

async function sendServiceConfirmationEmail(emailId, name, phone, service) {
  try {
    const info = await transporter.sendMail({
      from: `"Optifyy-We Look Good Together" <${process.env.NODEMAILER_USER}>`,
      to: emailId,
      subject: "Your Free Service Request Confirmation 🌟",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Arial', sans-serif;
              background: linear-gradient(to bottom right, #1A1A1A, #2D2D2D);
              color: #FFFFFF;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #2D3748;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header img {
              max-width: 200px;
              height: auto;
              margin-bottom: 15px;
            }
            .header h1 {
              font-size: 28px;
              color: #FF4D6D;
              margin: 0;
            }
            .content {
              font-size: 16px;
              line-height: 1.6;
              color: #D1D5DB;
            }
            .service-box {
              background: #3D3D3D;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #A1A1AA;
              margin-top: 20px;
            }
            .button {
              display: inline-block;
              padding: 12px 24px;
              background: #FF4D6D;
              color: #FFFFFF;
              text-decoration: none;
              border-radius: 25px;
              font-weight: bold;
              margin-top: 20px;
            }
            .button-container {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>We’ve received your request for a <strong>${service}</strong>. Thank you for choosing Optifyy!</p>
              <div class="service-box">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${emailId}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service}</p>
              </div>
              <p>We’ll contact you soon to confirm your appointment. If you have any questions, feel free to reach out to us at +91 8140088100.</p>
              <div class="button-container">
                <a href="https://maps.app.goo.gl/YdRQtEvHgNdD7NWB6" class="button">Find Us on Map</a>
              </div>
            </div>
            <div class="footer">
              <p>© 2025 Optifyy. All rights reserved.</p>
              <p>This is an automated email, please do not reply.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

module.exports = { sendServiceConfirmationEmail };
