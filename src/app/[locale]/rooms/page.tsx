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

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const page = roomsContent.page;
  const rooms = roomsContent.rooms;
  const dir = page.dir[currentLocale];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden rounded-b-[60px]">
        <Image
          src={page.heroImage}
          alt={page.heroTitle[currentLocale]}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-10 pb-16 md:px-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light text-white md:text-7xl">
              {page.heroTitle[currentLocale]}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 md:text-base">
              {page.heroText[currentLocale]}
            </p>
          </div>
        </div>
      </section>

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
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold">
                    {room.title[currentLocale]}
                  </h2>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3eadc] text-[#a67c3b]">
                    <BedDouble size={18} />
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-black/60">
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