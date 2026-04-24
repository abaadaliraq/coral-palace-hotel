import { Locale, getDictionary } from "@/lib/i18n";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <span className="text-sm tracking-[0.2em] text-[#c8a46b]">
          {t.pages.privacy}
        </span>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          {t.pages.privacy}
        </h1>
        <div className="mt-10 space-y-6 text-white/72 leading-8">
          <p>
            هذا نص أولي لسياسة الخصوصية، وسنستبدله لاحقًا بالنص القانوني النهائي
            الخاص بالفندق.
          </p>
          <p>
            تتضمن هذه الصفحة طريقة جمع البيانات، استخدام معلومات التواصل، وآلية
            التعامل مع طلبات الحجز والاستفسارات.
          </p>
        </div>
      </div>
    </main>
  );
}