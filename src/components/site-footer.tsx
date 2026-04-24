"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

type Props = {
  locale: string;
};

type Locale = "ar" | "en" | "ku";

const content = {
  en: {
    dir: "ltr",
    title: "Coral Palace Hotel",
    desc: "A refined hospitality experience designed for comfort and elegance.",
    rights: "All rights reserved.",
    explore: "Explore Rooms",
    location: "Baghdad, Iraq",
  },
  ar: {
    dir: "rtl",
    title: "فندق كورال بالاس",
    desc: "تجربة ضيافة راقية مصممة للراحة والأناقة.",
    rights: "جميع الحقوق محفوظة.",
    explore: "استكشف الغرف",
    location: "بغداد، العراق",
  },
  ku: {
    dir: "rtl",
    title: "Coral Palace Hotel",
    desc: "ئەزموونێکی میوانداریی تایبەتی بۆ ئاسوودەیی و جوانی.",
    rights: "هەموو مافەکان پارێزراون.",
    explore: "ژوورەکان ببینە",
    location: "بەغدا، عێراق",
  },
} as const;

function FacebookSvg({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.07C22 6.505 17.523 2 12 2S2 6.505 2 12.07c0 5.02 3.657 9.182 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.52 1.492-3.913 3.777-3.913 1.095 0 2.24.198 2.24.198v2.475h-1.262c-1.243 0-1.63.774-1.63 1.568v1.897h2.773l-.443 2.9h-2.33V22c4.78-.748 8.437-4.91 8.437-9.93Z" />
    </svg>
  );
}

function InstagramSvg({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

export default function SiteFooter({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = content[currentLocale];

  return (
    <footer
      dir={t.dir}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="select-none font-serif text-[74px] font-semibold tracking-[0.03em] text-white/[0.05] md:text-[140px] lg:text-[180px]">
          Coral Palace
        </h2>
      </div>

      <div className="relative z-10 mx-auto w-[min(1200px,calc(100%-24px))] px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.7fr_0.9fr] md:items-start">
          {/* Left */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c79a5c]">
              Coral Palace Hotel
            </p>

            <h3 className="text-2xl font-semibold text-white">
              {t.title}
            </h3>

            <p className="mt-5 max-w-[420px] text-sm leading-8 text-white/60">
              {t.desc}
            </p>
          </div>

          {/* Center */}
          <div className="md:pt-1">
            <Link
              href={`/${currentLocale}/rooms`}
              className="inline-flex items-center justify-center rounded-full bg-[#c79a5c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8af75]"
            >
              {t.explore}
            </Link>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="Facebook"
            >
              <FacebookSvg size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="Instagram"
            >
              <InstagramSvg size={18} />
            </a>

            <a
              href="tel:+9647700000000"
              className="icon-btn"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>

            <a
              href="https://wa.me/9647700000000"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="mailto:info@coralpalace.com"
              className="icon-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://maps.google.com/?q=Baghdad"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="Location"
            >
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

      <style jsx>{`
        .icon-btn {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: white;
          transition: all 0.3s ease;
        }

        .icon-btn:hover {
          background: #c79a5c;
          color: black;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}