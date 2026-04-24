"use client";

import { motion } from "framer-motion";

type Props = {
  locale: "ar" | "en" | "ku";
};

const content = {
  en: {
    dir: "ltr",
    label: "Coral Palace Experience",
    title: "A stay designed with clarity, comfort, and quiet elegance",
    desc: "Discover a refined hospitality journey where every detail is thoughtfully considered to create a seamless and memorable stay.",
    btn: "Explore Rooms",
  },
  ar: {
    dir: "rtl",
    label: "تجربة كورال بالاس",
    title: "إقامة مصممة بعناية، تجمع بين الراحة والأناقة",
    desc: "اكتشف تجربة ضيافة متكاملة حيث يتم الاهتمام بكل تفصيل لتوفير إقامة سلسة ومميزة.",
    btn: "استكشف الغرف",
  },
  ku: {
    dir: "rtl",
    label: "ئەزموونی کورال پالاس",
    title: "مانەوەیەک بە وردی دیزاینکراو بۆ ئارامی و جوانی",
    desc: "ئەزموونێکی تایبەتی میوانداری بدۆزەرەوە کە هەموو وردەکارییەکان بە باشی هەڵبژێردراون.",
    btn: "ژوورەکان ببینە",
  },
} as const;

export default function FinalCTASection({ locale }: Props) {
  const t = content[locale] || content.en;

  return (
    <section
      dir={t.dir}
      className="relative overflow-hidden bg-gradient-to-b from-[#f6f2eb] to-[#efe8dd] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[900px] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c79a5c]">
            {t.label}
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#1a1a1a] md:text-5xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-sm leading-7 text-black/60 md:text-base">
            {t.desc}
          </p>

          <div className="mt-10">
            <a
              href="/rooms"
              className="inline-flex items-center justify-center rounded-full bg-[#c79a5c] px-8 py-4 text-sm font-medium text-black transition hover:bg-[#b88a4f] md:text-base"
            >
              {t.btn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}