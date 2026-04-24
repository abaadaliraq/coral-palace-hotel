"use client";

import { motion } from "framer-motion";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

const imageMap = {
  ar: "/why-coral.jpg",
  en: "/why-coral.jpg",
  ku: "/why-coral.jpg",
} as const;

export default function WhySection({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = homeContent.why;
  const dir = t.dir[currentLocale];

  return (
    <section dir={dir} className="relative w-full overflow-hidden">
      {/* Full width image */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src={imageMap[currentLocale]}
          alt="Why Coral Palace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Oval card */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-auto w-[92%] max-w-[560px] rounded-[999px] bg-[#fbf7f1]/95 px-6 py-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.15)] backdrop-blur md:px-10 md:py-10"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c] md:text-xs">
            {t.eyebrow[currentLocale]}
          </span>

          <h2 className="text-2xl font-bold leading-[1.2] text-[#171717] md:text-4xl">
            {t.title[currentLocale]}
          </h2>

          <p className="mx-auto mt-4 max-w-[420px] text-sm leading-7 text-black/60 md:text-base md:leading-8">
            {t.text[currentLocale]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}