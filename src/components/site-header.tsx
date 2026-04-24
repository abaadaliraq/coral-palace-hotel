"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  locale: string;
};

type Locale = "ar" | "en" | "ku";

const content = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms & Suites",
      tours: "Virtual Tours",
      offices: "Office Booking",
      dining: "Dining & Facilities",
      contact: "Contact",
    },
  },
  ar: {
    dir: "rtl",
   
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      rooms: "الغرف والأجنحة",
      tours: "الجولات الافتراضية",
      offices: "حجز المكاتب",
      dining: "المطاعم والمرافق",
      contact: "تواصل معنا",
    },
  },
  ku: {
    dir: "rtl",
    nav: {
      home: "سەرەکی",
      about: "دەربارەی ئێمە",
      rooms: "ژوورەکان و سووتەکان",
      tours: "گەڕانەوە ئەستێرەییەکان",
      offices: "حجزی ئۆفیس",
      dining: "خواردن و خزمەتگوزارییەکان",
      contact: "پەیوەندی",
    },
  },
} as const;

function replaceLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 0) return `/${nextLocale}`;

  if (parts[0] === "ar" || parts[0] === "en" || parts[0] === "ku") {
    parts[0] = nextLocale;
    return `/${parts.join("/")}`;
  }

  return `/${nextLocale}/${parts.join("/")}`;
}

export default function SiteHeader({ locale }: Props) {
  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = content[currentLocale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: `/${currentLocale}`, label: t.nav.home },
      { href: `/${currentLocale}/about`, label: t.nav.about },
      { href: `/${currentLocale}/rooms`, label: t.nav.rooms },
      { href: `/${currentLocale}/virtual-tours`, label: t.nav.tours },
      { href: `/${currentLocale}/office-booking`, label: t.nav.offices },
      { href: `/${currentLocale}/dining-facilities`, label: t.nav.dining },
      { href: `/${currentLocale}/contact`, label: t.nav.contact },
    ],
    [currentLocale, t]
  );

  return (
    <header dir={t.dir} className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto w-[min(1120px,calc(100%-24px))] pt-5 md:pt-6">
        <div className="rounded-full border border-white/12 bg-[#a8a39d]/78 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl md:px-5">
          <div className="flex items-center justify-between gap-4">
            {/* Brand */}
            <Link
              href={`/${currentLocale}`}
              className="flex min-w-0 items-center gap-3"
            >
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/90">
                <img
                  src="/logo.png"
                  alt="Coral Palace"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d5a760]">
                
                </p>
                <p className="truncate text-sm font-semibold text-white">
                 
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-5 lg:flex">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-[#2f2f2f] transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Locale switcher */}
              <div className="hidden items-center rounded-full bg-black/10 p-1 md:flex">
                {(["en", "ar", "ku"] as Locale[]).map((lng) => {
                  const active = currentLocale === lng;
                  return (
                    <Link
                      key={lng}
                      href={replaceLocale(pathname, lng)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${
                        active
                          ? "bg-white text-black"
                          : "text-[#2f2f2f] hover:text-black"
                      }`}
                    >
                      {lng}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/10 text-[#2f2f2f] transition hover:bg-black/15 lg:hidden"
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 rounded-[28px] border border-white/12 bg-white/12 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
            <div className="flex flex-col gap-2">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/95 transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
              {(["en", "ar", "ku"] as Locale[]).map((lng) => {
                const active = currentLocale === lng;
                return (
                  <Link
                    key={lng}
                    href={replaceLocale(pathname, lng)}
                    onClick={() => setOpen(false)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${
                      active
                        ? "bg-white text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {lng}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}