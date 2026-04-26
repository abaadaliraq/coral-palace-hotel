"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  locale: string;
};

type Locale = "ar" | "en" | "ku";

const content = {
  en: {
    dir: "ltr",
    eyebrow: "Coral Palace Hotel",
    title: "Plan your next stay with comfort and elegance.",
    cta: "Book Now",
  },
  ar: {
    dir: "rtl",
    eyebrow: "فندق كورال بالاس",
    title: "خطط لإقامتك القادمة براحة وأناقة.",
    cta: "احجز الآن",
  },
  ku: {
    dir: "rtl",
    eyebrow: "Coral Palace Hotel",
    title: "مانەوەی داهاتووت بە ئاسوودەیی و جوانی پلان بکە.",
    cta: "حجز بکە",
  },
} as const;

const bannerImage =
  "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1600/v1/footer-banner_q4ktjk";

export default function PreFooterBanner({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = content[currentLocale];

  return (
    <section dir={t.dir} className="relative w-full overflow-hidden">
      
      {/* IMAGE */}
      <div className="relative h-[240px] md:h-[300px] w-full">
        <img
          src={bannerImage}
          alt="Coral Palace Banner"
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-[min(1200px,calc(100%-24px))] pb-10 md:pb-14">
            
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c] md:text-xs">
              {t.eyebrow}
            </p>

            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-2xl text-3xl font-semibold leading-[1.2] text-white md:text-5xl">
                {t.title}
              </h2>

              <Link
                href={`/${currentLocale}/booking`}
                className="inline-flex items-center gap-2 rounded-full bg-[#c79a5c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8af75]"
              >
                {t.cta}
                <ArrowUpRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}