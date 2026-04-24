import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import RoomGallery from "@/components/room-gallery";
import { roomsContent } from "@/lib/rooms-content";
import type { Locale } from "@/lib/home-content";

type Props = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export default async function RoomDetailsPage({ params }: Props) {
  const { locale, slug } = await params;

  const currentLocale: Locale = ["ar", "en", "ku"].includes(locale)
    ? locale
    : "en";

  const room = roomsContent.rooms.find((item) => item.slug === slug);

  if (!room) {
    notFound();
  }

  const page = roomsContent.page;
  const dir = page.dir[currentLocale];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] px-5 py-16 text-[#18130c]">
      <div className="mx-auto max-w-7xl">
        <Link
          href={`/${currentLocale}/rooms`}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold shadow-sm transition hover:bg-black hover:text-white"
        >
          <ArrowLeft size={17} />
          {page.back[currentLocale]}
        </Link>

        <section className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <RoomGallery
            images={room.gallery}
            alt={room.title[currentLocale]}
          />

          <aside className="rounded-[36px] bg-white p-7 shadow-[0_20px_70px_rgba(90,64,28,0.10)] md:p-9">
            <h1 className="text-4xl font-light tracking-tight md:text-6xl">
              {room.title[currentLocale]}
            </h1>

            <p className="mt-5 text-sm leading-8 text-black/60 md:text-base">
              {room.longDescription[currentLocale]}
            </p>

            <div className="mt-8 rounded-[28px] bg-[#f6f1e8] p-6">
              <span className="text-sm text-black/45">
                {page.priceLabel[currentLocale]}
              </span>

              <div className="mt-2 flex items-end gap-2">
                <strong className="text-4xl">{room.price}</strong>
                <span className="pb-1 text-sm text-black/45">
                  / {page.unit[currentLocale]}
                </span>
              </div>
            </div>

           <div className="mt-8 space-y-3">

  {/* 🔥 Virtual Tour */}
  {room.tour && (
    <a
      href={room.tour}
      target="_blank"
      className="flex w-full items-center justify-center gap-2 rounded-full border border-[#caa46a] px-6 py-4 text-sm font-semibold text-[#18130c] transition hover:bg-black hover:text-white"
    >
      🎥 {page.tourBtn[currentLocale]}
    </a>
  )}

  {/* 🔥 Booking */}
  <Link
    href={`/${currentLocale}/booking`}
    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#caa46a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b88e52]"
  >
    <CalendarDays size={18} />
    {page.booking[currentLocale]}
  </Link>

</div>
          </aside>
        </section>
      </div>
    </main>
  );
}