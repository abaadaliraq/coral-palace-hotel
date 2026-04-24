import { bookingRoomContent } from "@/lib/booking-room-content";
import RoomBookingForm from "@/components/room-booking-form";
import type { Locale } from "@/lib/home-content";
import React from "react";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const currentLocale =
    locale === "ar" || locale === "ku" || locale === "en"
      ? locale
      : "en";

const t = bookingRoomContent.page;
  const dir = t.dir[currentLocale];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      
      {/* HERO */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-light">
            {t.heroTitle[currentLocale]}
          </h1>

          <p className="mt-5 max-w-2xl text-sm text-black/60 md:text-base">
            {t.heroText[currentLocale]}
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-light md:text-3xl">
            {t.formTitle[currentLocale]}
          </h2>

          {/* ✅ هنا التصحيح */}
          <RoomBookingForm locale={currentLocale} />
        </div>
      </section>

    </main>
  );
}