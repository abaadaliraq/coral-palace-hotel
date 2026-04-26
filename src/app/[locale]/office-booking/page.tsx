import Image from "next/image";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";
import { officesContent } from "@/lib/offices-content";
import type { Locale } from "@/lib/home-content";
import OfficeBookingForm from "@/components/office-booking-form";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function OfficeBookingPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = officesContent.page;
  const dir = t.dir[currentLocale];

  const icons = [
    <BriefcaseBusiness key="privacy" size={18} />,
    <Building2 key="hotel" size={18} />,
    <Users key="business" size={18} />,
  ];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      <section className="relative h-[62vh] min-h-[460px] w-full overflow-hidden rounded-b-[60px]">
       <Image
  src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1600/v1/offices-hero_suxjfc"
  alt="Offices"
  fill
  priority
  className="object-cover"
/>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light text-white md:text-7xl">
              {t.heroTitle[currentLocale]}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              {t.heroText[currentLocale]}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-light md:text-5xl">
              {t.sectionTitle[currentLocale]}
            </h2>

            <p className="mt-5 text-sm leading-8 text-black/65 md:text-base">
              {t.sectionText[currentLocale]}
            </p>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[28px] shadow-[0_14px_45px_rgba(90,64,28,0.12)] md:h-[420px] md:rounded-[36px]">
           <Image
  src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/office-1_akmvpy"
  alt="Office space"
  width={800}
  height={600}
  className="object-cover rounded-2xl"
/>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="text-3xl font-light md:text-4xl">
            {t.featuresTitle[currentLocale]}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-8 md:grid-cols-3 md:gap-6">
            {t.features.map((feature, index) => (
              <article
                key={index}
                className="rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_10px_30px_rgba(90,64,28,0.07)] md:rounded-[28px] md:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#efe4d2] text-[#b98a4d] md:mb-5 md:h-12 md:w-12">
                  {icons[index]}
                </div>

                <h3 className="text-base font-medium md:text-xl">
                  {feature.title[currentLocale]}
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/60 md:mt-3 md:text-sm md:leading-7">
                  {feature.text[currentLocale]}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] md:mt-24">
          <div>
            <h2 className="text-3xl font-light md:text-4xl">
              {t.formTitle[currentLocale]}
            </h2>

            <p className="mt-4 text-sm leading-7 text-black/60">
              {t.heroText[currentLocale]}
            </p>
          </div>

          <OfficeBookingForm locale={currentLocale} />
        </div>
      </section>
    </main>
  );
}