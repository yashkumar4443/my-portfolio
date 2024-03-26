const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const { from_email, from_name, subject, message } = req.body;

    const mailOptions = {
      from: `${from_name} <${from_email}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
