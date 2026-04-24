import type { ReactNode } from "react";
import { Cairo, Noto_Naskh_Arabic } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-naskh",
  weight: ["400", "500", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === "ar" || locale === "ku" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      className={`${cairo.variable} ${notoNaskhArabic.variable} min-h-screen bg-[#f6f2eb] text-[#171717]`}
    >
      <SiteHeader locale={locale} />

      <div className="pt-[70px]">
        {children}
      </div>

      <SiteFooter locale={locale} />
    </div>
  );
}