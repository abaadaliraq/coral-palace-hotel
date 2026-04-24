"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Locale = "ar" | "en" | "ku";

const content = {
  ar: {
    dir: "rtl",
    eyebrow: "Coral Palace Hotel",
    title: "لحظة هادئة قبل الوصول",
    text: "مساحات راقية، تفاصيل متوازنة، وتجربة إقامة مصممة لتُشعر الضيف بالهدوء منذ اللحظة الأولى.",
    button: "استكشف الغرف",
  },
  en: {
    dir: "ltr",
    eyebrow: "Coral Palace Hotel",
    title: "A quiet moment before arrival",
    text: "Refined spaces, balanced details, and a hospitality experience designed to feel calm from the very first moment.",
    button: "Explore Rooms",
  },
  ku: {
    dir: "rtl",
    eyebrow: "Coral Palace Hotel",
    title: "ساتێکی ئارام پێش گەیشتن",
    text: "بۆشاییەکی جوان، وردەکاریی هاوسەنگ، و ئەزموونێکی میوانداری دروستکراو بۆ ئارامی لە یەکەم ساتەوە.",
    button: "دەست بە حجز بکە",
  },
} as const;

export default function PreFooterBanner({ locale }: { locale: string }) {
  const currentLocale = (locale in content ? locale : "en") as Locale;
  const t = content[currentLocale];
  const isRtl = t.dir === "rtl";

  return (
    <section dir={t.dir} className="relative mt-16 md:mt-24">
      <div className="relative h-[240px] overflow-hidden md:h-[312px]">
        <img
          src="footer-banner.jpg"
          alt="Coral Palace Hotel Banner"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-[min(1280px,calc(100%-24px))]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className={`max-w-[720px] ${isRtl ? "text-right" : "text-left"}`}
            >
              <span className="mb-3 inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e1bc88] backdrop-blur md:text-xs">
                {t.eyebrow}
              </span>

              <h2 className="text-2xl font-bold leading-[1.2] text-white md:text-4xl">
                {t.title}
              </h2>

              <p className="mt-4 max-w-[620px] text-sm leading-7 text-white/82 md:text-base">
                {t.text}
              </p>

              <Link
                href={`/${currentLocale}/booking`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c79a5c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d7ab6f]"
              >
                {t.button}
                <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}