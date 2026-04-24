"use client";

type Props = {
  locale: string;
};

export default function ContactForm({ locale }: Props) {
  const isAr = locale === "ar";

  const t = {
    name: isAr ? "الاسم الكامل" : "Full Name",
    email: isAr ? "البريد الإلكتروني (اختياري)" : "Email (optional)",
    phone: isAr ? "رقم الهاتف" : "Phone Number",
    message: isAr ? "اكتب طلبك هنا..." : "Write your request...",
    send: isAr ? "إرسال عبر واتساب" : "Send via WhatsApp",
    error: isAr ? "يرجى ملء الاسم ورقم الهاتف" : "Please fill name and phone",
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const name = data.get("name")?.toString().trim();
        const phone = data.get("phone")?.toString().trim();

        // ✅ validation بسيط
        if (!name || !phone) {
          alert(t.error);
          return;
        }

        const message = `
New Contact Request

Name: ${name}
Email: ${data.get("email") || "-"}
Phone: ${phone}
Message: ${data.get("message") || "-"}
`;

        const url = `https://wa.me/9647700000000?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }}
      className="bg-white rounded-[32px] p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)] space-y-4"
    >
      {/* Name */}
      <input
        name="name"
        placeholder={t.name}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#c79a5c]"
      />

      {/* Email */}
      <input
        name="email"
        placeholder={t.email}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#c79a5c]"
      />

      {/* Phone */}
      <input
        name="phone"
        placeholder={t.phone}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#c79a5c]"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder={t.message}
        rows={4}
        className="w-full rounded-[20px] border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#c79a5c]"
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full rounded-full bg-[#c79a5c] py-3 text-sm font-semibold text-white hover:bg-[#b88a4f] transition"
      >
        {t.send}
      </button>
    </form>
  );
}