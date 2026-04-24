"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { PlayCircle, ArrowRight } from "lucide-react";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

export default function VirtualTourSection({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "en" || locale === "ku" ? locale : "en";

  const t = homeContent.tours;
  const isRtl = currentLocale === "ar" || currentLocale === "ku";

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const insetTop = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["44%", "26%", "4%", "26%", "44%"]
  );

  const insetBottom = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    ["44%", "26%", "4%", "26%", "44%"]
  );

  const smoothTop = useSpring(insetTop, {
    stiffness: 55,
    damping: 18,
    mass: 0.8,
  });

  const smoothBottom = useSpring(insetBottom, {
    stiffness: 55,
    damping: 18,
    mass: 0.8,
  });

  const clipPath = useTransform(
    [smoothTop, smoothBottom],
    ([top, bottom]) => `inset(${top} 0% ${bottom} 0%)`
  );

  const textYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const textY = useSpring(textYRaw, {
    stiffness: 60,
    damping: 20,
    mass: 0.7,
  });

  return (
    <section dir={isRtl ? "rtl" : "ltr"} className="relative bg-[#f6f2eb]">
      <div ref={sectionRef} className="relative h-[230vh] md:h-[260vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/test1.jpg"
              alt="Virtual Tour Preview"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ clipPath }}
          >
            <img
              src="/test1.jpg"
              alt="Virtual Tour Reveal"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/15" />
          </motion.div>

          {/* النص */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 flex h-full items-center"
          >
            <div className="mx-auto w-[min(1280px,calc(100%-24px))]">
              <div
                className={`max-w-[620px] text-white ${
                  isRtl ? "mr-auto text-right" : "ml-0 text-left"
                }`}
              >
                <span className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d6ad74] backdrop-blur">
                  {t.title[currentLocale]}
                </span>

                <h2 className="text-3xl font-bold leading-[1.1] md:text-5xl">
                  {t.title[currentLocale]}
                </h2>

                <p className="mt-5 max-w-[560px] text-sm leading-8 text-white/85 md:text-lg">
                  {t.text[currentLocale]}
                </p>

                <Link
                  href={`/${currentLocale}/virtual-tours`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c79a5c] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#d8af75]"
                >
                  <PlayCircle className="h-4 w-4" />
                  {t.cta[currentLocale]}
                  {!isRtl && <ArrowRight className="h-4 w-4" />}
                  {isRtl && <ArrowRight className="h-4 w-4 rotate-180" />}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}