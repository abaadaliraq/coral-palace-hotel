import HeroSection from "@/components/home/hero-section";
import SignatureSection from "@/components/home/signature-section";
import RoomsPreviewSection from "@/components/home/rooms-preview-section";
import VirtualTourSection from "@/components/home/virtual-tour-section";
import FacilitiesIconsSection from "@/components/home/facilities-icons-section";
import WhySection from "@/components/home/why-section";
import FinalCTASection from "@/components/home/final-cta-section";
import PreFooterBanner from "@/components/home/pre-footer-banner";

type Locale = "ar" | "en" | "ku";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (["ar", "en", "ku"].includes(rawLocale)
    ? rawLocale
    : "en") as Locale;

  return (
    <main className="bg-[#f6f2eb] text-[#171717]">
      <HeroSection locale={locale} />
      <SignatureSection locale={locale} />
      <RoomsPreviewSection locale={locale} />
      <VirtualTourSection locale={locale} />
      <FacilitiesIconsSection locale={locale} />
      <WhySection locale={locale} />
      <FinalCTASection locale={locale} />
      <PreFooterBanner locale={locale} />
    </main>
  );
}