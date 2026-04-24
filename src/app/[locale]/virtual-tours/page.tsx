import { toursContent } from "@/lib/tours-content";
import type { Locale } from "@/lib/home-content";
import Image from "next/image";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ToursPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = toursContent.page;
  const dir = t.dir[currentLocale];

  const bookNow =
    currentLocale === "ar" ? "احجز الآن" : currentLocale === "ku" ? "حجز بکە" : "Book Now";

  const openTour =
    currentLocale === "ar"
      ? "فتح الجولة"
      : currentLocale === "ku"
      ? "کردنەوەی گەشت"
      : "Open Tour";

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden rounded-b-[60px]">

  <Image
    src="/tours.jpg"
    alt="Virtual Tours"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#c79a5c33,transparent_45%)]" />

  <div className="relative z-10 px-6 py-28 text-white md:px-12 md:py-36">
    <div className="mx-auto max-w-7xl">
      <span className="text-sm uppercase tracking-[0.35em] text-[#d7b77f]">
        360° Tours
      </span>

      <h1 className="mt-5 text-4xl md:text-7xl font-light">
        {t.heroTitle[currentLocale]}
      </h1>

      <p className="mt-6 max-w-2xl text-sm md:text-base text-white/75">
        {t.heroText[currentLocale]}
      </p>
    </div>
  </div>

</section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-20">
          {t.sections.map((section) => (
            <section key={section.key} id={section.key} className="scroll-mt-28">
              <div className="mb-10 max-w-2xl">
                <h2 className="text-3xl font-light md:text-4xl">
                  {section.title[currentLocale]}
                </h2>

                <p className="mt-4 text-sm leading-7 text-black/60 md:text-base">
                  {section.text[currentLocale]}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.tours.map((tour) => (
                  <article
                    key={tour.id}
                    id={tour.id}
                    className="scroll-mt-28 overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                  >
                    <div className="border-b border-black/10 px-5 py-4">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#b98a4d]">
                        Virtual Tour
                      </span>

                      <h3 className="mt-1 text-base font-medium">
                        {tour.title[currentLocale]}
                      </h3>
                    </div>

                    <div className="bg-black p-2">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px]">
                        <iframe
                          src={tour.src}
                          title={tour.title[currentLocale]}
                          className="h-full w-full"
                          allow="fullscreen; xr-spatial-tracking"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 px-5 py-4">
                      <a
                        href={`/${currentLocale}/booking`}
                        className="rounded-full bg-[#c79a5c] px-4 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-[#b88a4f]"
                      >
                        {bookNow}
                      </a>

                      <a
                        href={tour.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#c79a5c]/50 px-4 py-2.5 text-center text-xs font-semibold text-[#18130c] transition hover:bg-black/40 hover:text-white"
                      >
                        {openTour}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}