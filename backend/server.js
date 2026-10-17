import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "node:url";

dotenv.config({ path: fileURLToPath(new URL("./.env", import.meta.url)) });

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: "10kb" }));

// أقصى 5 رسائل لكل IP في 15 دقيقة (حماية من السبام)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: "محاولات كثيرة، حاول لاحقًا" },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  const name = String(req.body.name || "").trim();
  const contact = String(req.body.contact || "").trim();
  const message = String(req.body.message || "").trim();

  if (!name || !contact) {
    return res
      .status(400)
      .json({ success: false, error: "الاسم ووسيلة التواصل مطلوبان" });
  }

  if (name.length > 100 || contact.length > 100 || message.length > 2000) {
    return res.status(400).json({ success: false, error: "البيانات طويلة جدًا" });
  }

  const isEmail = contact.includes("@");

  try {
    await transporter.sendMail({
      from: `"موقع مكتب الشايب" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      ...(isEmail && { replyTo: contact }),
      subject: `طلب استشارة جديد من ${name}`,
      text:
        `الاسم: ${name}\n` +
        `وسيلة التواصل: ${contact}\n\n` +
        `الرسالة:\n${message || "(لم يكتب رسالة)"}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    res.status(500).json({ success: false, error: "تعذر إرسال الرسالة" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));