"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

export default function RoomsPreviewSection({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "en" || locale === "ku" ? locale : "en";

  const t = homeContent.rooms;
  const dir = currentLocale === "ar" || currentLocale === "ku" ? "rtl" : "ltr";
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const cards = t.items;

  // 🔥 هنا الصور الثابتة
  const images = ["/room1.jpg", "/room2.jpg", "/room3.jpg"];

  return (
    <section dir={dir} className="bg-[#f6f2eb] py-20 md:py-24">
      <div className="mx-auto w-[min(1280px,calc(100%-24px))]">
        
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-[920px] text-center md:mb-14"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c] md:text-xs">
            {t.eyebrow[currentLocale]}
          </span>

          <h2 className="mx-auto max-w-[860px] text-3xl font-bold leading-[1.18] text-[#171717] md:text-5xl">
            {t.title[currentLocale]}
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-8 text-black/60 md:text-base">
            {t.text[currentLocale]}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
            >
              
              {/* 🔥 الصورة */}
              <div className="relative h-[248px] overflow-hidden">
                <img
                  src={images[index]}   // 👈 هنا التعديل
                  alt={item.title[currentLocale]}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c]">
                      {t.priceLabel[currentLocale]}
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-[#c79a5c]">
                      {item.price}
                    </p>
                  </div>

                  <div className={dir === "rtl" ? "text-right" : "text-left"}>
                    <h3 className="text-2xl font-bold text-[#171717]">
                      {item.title[currentLocale]}
                    </h3>

                    <p className="mt-3 max-w-[320px] text-sm leading-7 text-black/60">
                      {item.description[currentLocale]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-black/8 pt-4">
                  <div className="flex items-center justify-between">
                    
                    <Link
                      href={`/${currentLocale}/rooms/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#171717] transition hover:border-black/20 hover:bg-[#faf7f2]"
                    >
                      {t.cardCta[currentLocale]}
                      <ArrowIcon className="h-4 w-4" />
                    </Link>

                    <span className="text-sm text-black/40">
                      {t.unit[currentLocale]}
                    </span>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={`/${currentLocale}/rooms`}
            className="inline-flex items-center gap-2 rounded-full bg-[#c79a5c] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#b88a4f]"
          >
            {t.cta[currentLocale]}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}