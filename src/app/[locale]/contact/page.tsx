import type { Locale } from "@/lib/home-content";
import ContactForm from "@/components/contact-form";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const currentLocale =
    locale === "ar" || locale === "ku" || locale === "en"
      ? locale
      : "en";

  const dir = currentLocale === "ar" ? "rtl" : "ltr";

  const text = {
    title: {
      ar: "تواصل معنا",
      en: "Contact Us",
      ku: "پەیوەندی بکە",
    },
    description: {
      ar: "يسعدنا تواصلك معنا لأي استفسار أو طلب حجز.",
      en: "We’d love to hear from you for any inquiries or bookings.",
      ku: "خۆشحاڵ دەبین بە پەیوەندی لەگەڵمان بۆ هەر پرسیارێک.",
    },
    location: {
      ar: "موقعنا",
      en: "Our Location",
      ku: "شوێنمان",
    },
  };

  return (
    <main
      dir={dir}
      className="min-h-screen bg-[#f6f1e8] text-[#18130c] px-6 py-16 md:px-12"
    >
      {/* HEADER */}
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-light">
          {text.title[currentLocale]}
        </h1>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-black/60">
          {text.description[currentLocale]}
        </p>
      </div>

      {/* FORM + INFO */}
      <div className="mx-auto mt-12 max-w-6xl grid gap-10 lg:grid-cols-2">
        <ContactForm locale={currentLocale} />

        {/* INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-light">Coral Palace Hotel</h2>

          <p className="mt-4 text-sm text-black/60 leading-7">
            Baghdad, Iraq <br />
            +964 770 000 0000 <br />
            info@coralpalace.com
          </p>
        </div>
      </div>

      {/* MAP */}
      <section className="mt-20 w-full">
  <h2 className="px-6 md:px-12 text-3xl md:text-4xl font-light mb-6">
    {text.location[currentLocale]}
  </h2>

  <div className="w-full h-[420px] md:h-[560px] overflow-hidden">
    <iframe
      src="https://www.google.com/maps?q=Coral+Palace+Hotel+Baghdad&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
    />
  </div>
</section>
    </main>
  );
}