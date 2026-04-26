
import Image from "next/image";
import { aboutContent } from "@/lib/about-content";
import type { Locale } from "@/lib/home-content";
import StatsSection from "@/components/stats-section";
import { BedDouble, Star, Clock, Building2 } from "lucide-react";

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

  const t = aboutContent.page;
  const dir = t.dir[currentLocale];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-b-[60px]">
      
         <Image
  src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1600/v1/about-hero_ik0dbm"
  alt="About hero"
  fill
  className="object-cover"
/>
      

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 px-6 pb-14 md:px-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl text-white font-light">
              {t.heroTitle[currentLocale]}
            </h1>

            <p className="mt-4 text-white/90 text-sm md:text-base leading-7">
              {t.heroText[currentLocale]}
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 CONTENT + STATS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* 🟡 CONTENT GRID */}
        <div className="grid gap-10 md:grid-cols-2 items-center">

          {/* 🖼 IMAGE */}
          <div className="relative h-[400px] overflow-hidden rounded-[36px]">
           <Image
  src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/about-1_prytvk"
  alt="About image"
  width={800}
  height={600}
  className="object-cover rounded-2xl"
/>
          </div>

          {/* 📝 TEXT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-light">
              {t.sectionTitle[currentLocale]}
            </h2>

            <p className="mt-6 text-sm md:text-base leading-8 text-black/70">
              {t.sectionText[currentLocale]}
            </p>
          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="flex justify-center mt-20 mb-12">
          <div className="h-[1px] w-32 bg-[#d6c3a3]" />
        </div>

        {/* 🔥 STATS */}
        <StatsSection
          stats={[
            {
              value: 65,
              label: t.stats.rooms[currentLocale],
              icon: <BedDouble size={22} />,
            },
            {
              value: 24,
              label: t.stats.service[currentLocale],
              icon: <Clock size={22} />,
            },
            {
              value: 5,
              label: t.stats.experience[currentLocale],
              icon: <Star size={22} />,
            },
            {
              value: 10,
              label: t.stats.facilities[currentLocale],
              icon: <Building2 size={22} />,
            },
          ]}
        />

      </section>

    </main>
  );
}