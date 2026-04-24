"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Locale = "ar" | "en" | "ku";

const locales: Locale[] = ["ar", "en", "ku"];

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const pathname = usePathname();

  const getLocalizedPath = (locale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);

    // إذا ماكو مسار
    if (segments.length === 0) return `/${locale}`;

    // استبدال اللغة فقط
    segments[0] = locale;

    return `/${segments.join("/")}`;
  };

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      {locales.map((locale) => {
        const active = currentLocale === locale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(locale)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${
              active
                ? "bg-white text-black"
                : "text-white/75 hover:bg-white/10 hover:text-white"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}