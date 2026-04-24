"use client";

import { motion } from "framer-motion";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

const imageMap = {
  ar: "/signature.jpg",
  en: "/signature.jpg",
  ku: "/signature.jpg",
} as const;

export default function SignatureSection({ locale }: Props) {
  const currentLocale = (["ar", "en", "ku"].includes(locale) ? locale : "en") as Locale;

  const dir = homeContent.signature.dir[currentLocale];
  const eyebrow = homeContent.signature.eyebrow[currentLocale];
  const title = homeContent.signature.title[currentLocale];
  const text = homeContent.signature.text[currentLocale];

  return (
    <section dir={dir} className="bg-[#f6f2eb] py-20 md:py-24">
      <div className="mx-auto w-[min(980px,calc(100%-24px))] text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c] md:text-xs"
        >
          {eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.04 }}
          className="mx-auto max-w-[760px] text-3xl font-bold leading-[1.22] text-[#171717] md:text-5xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-6 max-w-[760px] text-sm leading-8 text-black/60 md:text-lg"
        >
          {text}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="mx-auto mt-12 w-[min(1280px,calc(100%-24px))]"
      >
        <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:rounded-[34px]">
          <div className="relative h-[280px] md:h-[420px] lg:h-[520px]">
            <img
              src={imageMap[currentLocale]}
              alt="Coral Palace Signature"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-black/8 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}