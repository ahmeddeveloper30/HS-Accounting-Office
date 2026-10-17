
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const { name, contact, message } = req.body || {};

    const cleanName = String(name || "").trim();
    const cleanContact = String(contact || "").trim();
    const cleanMessage = String(message || "").trim();

    if (!cleanName || !cleanContact) {
      return res.status(400).json({
        success: false,
        error: "الاسم ووسيلة التواصل مطلوبان",
      });
    }

    if (
      cleanName.length > 100 ||
      cleanContact.length > 100 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({
        success: false,
        error: "البيانات طويلة جدًا",
      });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing email environment variables");
      return res.status(500).json({
        success: false,
        error: "إعدادات البريد الإلكتروني غير مكتملة",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"موقع مكتب الشايب" <${emailUser}>`,
      to: emailUser,
      ...(cleanContact.includes("@")
        ? { replyTo: cleanContact }
        : {}),
      subject: `طلب استشارة جديد من ${cleanName}`,
      text:
        `الاسم: ${cleanName}\n` +
        `وسيلة التواصل: ${cleanContact}\n\n` +
        `الرسالة:\n${cleanMessage || "(لم يكتب رسالة)"}`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({
      success: false,
      error: "تعذر إرسال الرسالة",
    });
  }
}
