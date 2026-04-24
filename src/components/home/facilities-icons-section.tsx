"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  BriefcaseBusiness,
  Dumbbell,
  Flower2,
  Waves,
  HeartPulse,
  Trees,
  Presentation,
  UtensilsCrossed,
  Baby,
} from "lucide-react";
import { homeContent, type Locale } from "@/lib/home-content";

type Props = {
  locale: string;
};

const iconsMap = {
  rooms: BedDouble,
  offices: BriefcaseBusiness,
  gym: Dumbbell,
  spa: Flower2,
  pool: Waves,
  wellness: HeartPulse,
  village: Trees,
  meetings: Presentation,
  restaurant: UtensilsCrossed,
  kids: Baby,
} as const;

const itemOrder = [
  "rooms",
  "offices",
  "gym",
  "spa",
  "pool",
  "wellness",
  "village",
  "kids",
  "meetings",
  "restaurant",
] as const;

export default function FacilitiesIconsSection({ locale }: Props) {
  const currentLocale =
    (["ar", "en", "ku"].includes(locale) ? locale : "en") as Locale;

  const dir = homeContent.facilities.dir[currentLocale];
  const eyebrow = homeContent.facilities.eyebrow[currentLocale];
  const title = homeContent.facilities.title[currentLocale];
  const text = homeContent.facilities.text[currentLocale];
  const items = homeContent.facilities.items;

  return (
    <section dir={dir} className="bg-[#f6f2eb] py-20 md:py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-24px))]">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-[860px] text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c79a5c] md:text-xs">
            {eyebrow}
          </span>

          <h2 className="text-3xl font-bold leading-[1.2] text-[#171717] md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-sm leading-8 text-black/60 md:text-base">
            {text}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:grid-cols-5">
          {itemOrder.map((key, index) => {
            const Icon = iconsMap[key];
            const label = items[key][currentLocale];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#c79a5c]/18 bg-white/90 text-[#c79a5c] shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#c79a5c]/35 group-hover:shadow-[0_20px_42px_rgba(0,0,0,0.08)] md:h-[84px] md:w-[84px]">
                  <Icon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.8} />
                </div>

                <p className="mt-3 max-w-[170px] text-sm font-medium leading-6 text-[#171717] md:text-[15px]">
                  {label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}