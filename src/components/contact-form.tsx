"use client";

type Props = {
  locale: string;
};

const content = {
  en: {
    name: "Full Name",
    email: "Email (optional)",
    phone: "Phone Number",
    message: "Write your request...",
    send: "Send Request",
    error: "Please fill name and phone",
    pending:
      "Official Crixus Sarsing Hotel contact details are being updated.",
  },
  ar: {
    name: "الاسم الكامل",
    email: "البريد الإلكتروني (اختياري)",
    phone: "رقم الهاتف",
    message: "اكتب طلبك هنا...",
    send: "إرسال الطلب",
    error: "يرجى ملء الاسم ورقم الهاتف",
    pending:
      "معلومات التواصل الرسمية لفندق كريكسوس سرسنك قيد التحديث حالياً.",
  },
  ku: {
    name: "ناوی تەواو",
    email: "ئیمەیل (ئارەزوومەندانە)",
    phone: "ژمارەی تەلەفۆن",
    message: "داواکارییەکەت بنووسە...",
    send: "ناردنی داواکاری",
    error: "تکایە ناو و ژمارەی تەلەفۆن پڕبکەوە",
    pending:
      "زانیاری پەیوەندی فەرمی بۆ هۆتێلی کریکسۆس سەرسنگ لە ئێستادا نوێ دەکرێتەوە.",
  },
} as const;

export default function ContactForm({ locale }: Props) {
  const currentLocale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";
  const t = content[currentLocale];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const name = data.get("name")?.toString().trim();
        const phone = data.get("phone")?.toString().trim();

        if (!name || !phone) {
          alert(t.error);
          return;
        }

        alert(t.pending);
      }}
      className="space-y-4 rounded-[32px] bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)] md:p-8"
    >
      <input
        name="name"
        placeholder={t.name}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#123B6D]"
      />

      <input
        name="email"
        placeholder={t.email}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#123B6D]"
      />

      <input
        name="phone"
        placeholder={t.phone}
        className="w-full rounded-full border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#123B6D]"
      />

      <textarea
        name="message"
        placeholder={t.message}
        rows={4}
        className="w-full rounded-[20px] border border-black/10 px-5 py-3 text-sm outline-none focus:border-[#123B6D]"
      />

      <button
        type="submit"
        className="w-full rounded-full bg-[#123B6D] py-3 text-sm font-semibold text-white transition hover:bg-[#0B2747]"
      >
        {t.send}
      </button>
    </form>
  );
}
