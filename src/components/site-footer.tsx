"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

type Props = {
  locale: string;
};

type Locale = "ar" | "en" | "ku";

const content = {
  en: {
    dir: "ltr",
    title: "Coral Palace Hotel",
    desc: "A refined hospitality experience designed for comfort and elegance.",
    roomsTitle: "Rooms & Services",
    legalTitle: "Legal",
    rooms: "Rooms & Suites",
    booking: "Booking",
    virtualTours: "Virtual Tours",
    offices: "Office Booking",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    explore: "Explore Rooms",
    location: "Baghdad, Iraq",
    rights: "All rights reserved.",
  },
  ar: {
    dir: "rtl",
    title: "فندق كورال بالاس",
    desc: "تجربة ضيافة راقية مصممة للراحة والأناقة.",
    roomsTitle: "الغرف والخدمات",
    legalTitle: "روابط قانونية",
    rooms: "الغرف والأجنحة",
    booking: "الحجز",
    virtualTours: "الجولات الافتراضية",
    offices: "حجز المكاتب",
    terms: "الشروط والأحكام",
    privacy: "سياسة الخصوصية",
    explore: "استكشف الغرف",
    location: "بغداد، العراق",
    rights: "جميع الحقوق محفوظة.",
  },
  ku: {
    dir: "rtl",
    title: "Coral Palace Hotel",
    desc: "ئەزموونێکی میوانداریی تایبەتی بۆ ئاسوودەیی و جوانی.",
    roomsTitle: "ژوور و خزمەتگوزارییەکان",
    legalTitle: "بەستەرە یاساییەکان",
    rooms: "ژوور و سوویتەکان",
    booking: "حجزکردن",
    virtualTours: "گەشتی مەجازی",
    offices: "حجزکردنی ئۆفیس",
    terms: "مەرج و ڕێنماییەکان",
    privacy: "سیاسەتی تایبەتمەندی",
    explore: "ژوورەکان ببینە",
    location: "بەغدا، عێراق",
    rights: "هەموو مافەکان پارێزراون.",
  },
} as const;

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M22 12.07C22 6.505 17.523 2 12 2S2 6.505 2 12.07c0 5.02 3.657 9.182 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.52 1.492-3.913 3.777-3.913 1.095 0 2.24.198 2.24.198v2.475h-1.262c-1.243 0-1.63.774-1.63 1.568v1.897h2.773l-.443 2.9h-2.33V22c4.78-.748 8.437-4.91 8.437-9.93Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm4.7-3.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

export default function SiteFooter({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = content[currentLocale];

  const roomsLinks = [
    { label: t.rooms, href: `/${currentLocale}/rooms` },
    { label: t.booking, href: `/${currentLocale}/booking` },
    { label: t.virtualTours, href: `/${currentLocale}/virtual-tours` },
    { label: t.offices, href: `/${currentLocale}/offices` },
  ];

  const legalLinks = [
    { label: t.terms, href: `/${currentLocale}/terms` },
    { label: t.privacy, href: `/${currentLocale}/privacy` },
  ];

  const iconClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.07] text-white transition hover:-translate-y-1 hover:bg-[#c79a5c] hover:text-black";

  return (
    <footer dir={t.dir} className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="select-none font-serif text-[76px] font-semibold tracking-[0.03em] text-white/[0.04] md:text-[150px] lg:text-[190px]">
          Coral Palace
        </h2>
      </div>

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-24px))] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c79a5c]">
              Coral Palace Hotel
            </p>

            <h3 className="text-2xl font-semibold">{t.title}</h3>

            <p className="mt-5 max-w-[420px] text-sm leading-8 text-white/60">
              {t.desc}
            </p>

            <Link
              href={`/${currentLocale}/rooms`}
              className="mt-6 inline-flex rounded-full bg-[#c79a5c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8af75]"
            >
              {t.explore}
            </Link>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">
              {t.roomsTitle}
            </h4>

            <ul className="space-y-3">
              {roomsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-[#c79a5c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">
              {t.legalTitle}
            </h4>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-[#c79a5c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={iconClass} aria-label="Facebook">
              <FacebookIcon />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={iconClass} aria-label="Instagram">
              <InstagramIcon />
            </a>

            <a href="tel:+9647700000000" className={iconClass} aria-label="Phone">
              <Phone size={18} />
            </a>

            <a href="https://wa.me/9647700000000" target="_blank" rel="noreferrer" className={iconClass} aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>

            <a href="mailto:info@coralpalace.com" className={iconClass} aria-label="Email">
              <Mail size={18} />
            </a>

            <a href="https://maps.google.com/?q=Baghdad" target="_blank" rel="noreferrer" className={iconClass} aria-label="Location">
              <MapPin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Coral Palace Hotel. {t.rights}
            </span>

            <span>{t.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}