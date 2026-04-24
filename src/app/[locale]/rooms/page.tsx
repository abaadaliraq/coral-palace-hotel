import Image from "next/image";
import Link from "next/link";
import { BedDouble } from "lucide-react";
import { roomsContent } from "@/lib/rooms-content";
import type { Locale } from "@/lib/home-content";

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

  const page = roomsContent.page;
  const rooms = roomsContent.rooms;
  const dir = page.dir[currentLocale];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      
      {/* 🔥 HERO EDGE TO EDGE */}
      <section className="relative w-full h-[65vh] min-h-[480px] overflow-hidden rounded-b-[60px]">
        <Image
          src="/rooms.jpg"
          alt="Rooms"
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light text-white">
              {page.heroTitle[currentLocale]}
            </h1>

            <p className="mt-4 text-white/90 text-sm md:text-base leading-7 max-w-xl">
              {page.heroText[currentLocale]}
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 ROOMS GRID */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="group overflow-hidden rounded-[30px] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
            >
              
             
              <Link href={`/${currentLocale}/rooms/${room.slug}`}>
                <div className="relative h-[260px] overflow-hidden rounded-t-[30px]">
                  <Image
                    src={room.image} 
                    alt={room.title[currentLocale]}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

            
              <div className="p-6">
                
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">
                    {room.title[currentLocale]}
                  </h2>

                  <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#f3eadc] text-[#a67c3b]">
                    <BedDouble size={18} />
                  </div>
                </div>

                <p className="mt-3 text-sm text-black/60 leading-6">
                  {room.description[currentLocale]}
                </p>

                <div className="mt-5 text-sm text-black/50">
                  {page.priceLabel[currentLocale]}{" "}
                  <span className="text-xl font-semibold text-black">
                    {room.price}
                  </span>{" "}
                  / {page.unit[currentLocale]}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  
                  <Link
                    href={`/${currentLocale}/rooms/${room.slug}`}
                    className="rounded-full bg-[#caa46a] py-2 text-center text-sm font-semibold text-white hover:bg-[#b88e52]"
                  >
                    {page.details[currentLocale]}
                  </Link>

                  <Link
                    href={`/${currentLocale}/booking`}
                    className="rounded-full border border-[#caa46a] py-2 text-center text-sm font-semibold hover:bg-black hover:text-white"
                  >
                    {page.booking[currentLocale]}
                  </Link>

                </div>
              </div>

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}