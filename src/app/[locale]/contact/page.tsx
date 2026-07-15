import ContactForm from "@/components/contact-form";

type Locale = "ar" | "en" | "ku";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const text = {
  title: {
    ar: "تواصل معنا",
    en: "Contact Us",
    ku: "پەیوەندی بکە",
  },
  description: {
    ar: "يسعدنا تواصلك معنا لأي استفسار أو طلب حجز.",
    en: "We would love to hear from you for any inquiries or bookings.",
    ku: "خۆشحاڵ دەبین بە پەیوەندیت بۆ هەر پرسیارێک یان داواکارییەکی حجز.",
  },
  location: {
    ar: "موقعنا",
    en: "Our Location",
    ku: "شوێنمان",
  },
  pending: {
    ar: "معلومات الهاتف والبريد والحجز الرسمية قيد التحديث حالياً.",
    en: "Official phone, email, and booking details are being updated.",
    ku: "زانیاری فەرمی تەلەفۆن، ئیمەیل و حجز لە ئێستادا نوێ دەکرێتەوە.",
  },
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const dir = currentLocale === "en" ? "ltr" : "rtl";

  return (
    <main
      dir={dir}
      className="min-h-screen bg-[#f6f1e8] px-6 py-16 text-[#18130c] md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-light md:text-6xl">
          {text.title[currentLocale]}
        </h1>

        <p className="mt-4 max-w-2xl text-sm text-black/60 md:text-base">
          {text.description[currentLocale]}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-2">
        <ContactForm locale={currentLocale} />

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-light">Crixus Sarsing Hotel</h2>

          <p className="mt-4 text-sm leading-7 text-black/60">
            Sarsing, Duhok, Kurdistan Region, Iraq <br />
            {text.pending[currentLocale]}
          </p>
        </div>
      </div>

      <section className="mt-20 w-full">
        <h2 className="mb-6 px-6 text-3xl font-light md:px-12 md:text-4xl">
          {text.location[currentLocale]}
        </h2>

        <div className="h-[420px] w-full overflow-hidden md:h-[560px]">
          <iframe
            src="https://www.google.com/maps?q=Sarsing+Duhok+Kurdistan+Region+Iraq&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
