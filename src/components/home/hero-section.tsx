"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

export default function HeroSection({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const dir = homeContent.hero.dir[currentLocale];
  const title = homeContent.hero.title[currentLocale];
  const description = homeContent.hero.description[currentLocale];
  const cta = homeContent.hero.cta[currentLocale];

  return (
    <section
      dir={dir}
      className="relative -mt-[88px] w-full overflow-hidden md:-mt-[96px]"
    >
      <div className="relative h-[100vh] min-h-[720px]">

        {/* 🎥 VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* 🔥 OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/55" />

        {/* 📝 CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="px-4 pt-24 text-center md:pt-28">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-[900px] text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mx-auto mt-5 max-w-[720px] text-sm leading-7 text-white/85 md:text-base md:leading-8 lg:text-lg"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8"
            >
              <Link
                href={`/${currentLocale}/rooms`}
                className="inline-flex items-center justify-center rounded-full bg-[#c79a5c] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#b88a4f] md:px-8 md:py-4 md:text-base"
              >
                {cta}
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}