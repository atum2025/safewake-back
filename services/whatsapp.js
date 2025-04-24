// services/whatsapp.js
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID, 
  process.env.TWILIO_AUTH_TOKEN
);

export async function sendWhatsApp(to, message) {
  try {
    const res = await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: `whatsapp:${to}`

    });
    return res.sid;
  } catch (err) {
    // Log ou lance o erro para debug
    throw err;
  }
}
