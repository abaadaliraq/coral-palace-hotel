type Locale = "ar" | "en" | "ku";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  dir: {
    ar: "rtl",
    en: "ltr",
    ku: "rtl",
  },

  title: {
    ar: "سياسة الخصوصية",
    en: "Privacy Policy",
    ku: "سیاسەتی تایبەتمەندی",
  },

  text: {
    ar: "نحن في فندق كورال بالاس نحترم خصوصية زوارنا ونلتزم بحماية المعلومات التي يتم تقديمها من خلال نماذج التواصل أو الحجز. تُستخدم البيانات فقط لغرض الرد على الاستفسارات أو تأكيد طلبات الحجز ولا يتم بيعها أو مشاركتها مع أي جهة خارجية.",
    en: "At Coral Palace Hotel, we respect the privacy of our visitors and are committed to protecting information submitted through contact or booking forms. The information is used only to respond to inquiries or confirm booking requests and is not sold or shared with any third party.",
    ku: "لە هۆتێلی Coral Palace دا ڕێز لە تایبەتمەندی سەردانکەران دەگرین و پابەندین بە پاراستنی ئەو زانیاریانەی لە ڕێگەی فۆرمی پەیوەندی یان حجز نێردراون.",
  },
};

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  return (
    <main
      dir={content.dir[currentLocale]}
      className="min-h-screen bg-[#f6f1e8] px-6 py-24 text-[#18130c] md:px-12"
    >
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-light md:text-6xl">
          {content.title[currentLocale]}
        </h1>

        <p className="mt-8 text-sm leading-8 text-black/65 md:text-base">
          {content.text[currentLocale]}
        </p>
      </section>
    </main>
  );
}