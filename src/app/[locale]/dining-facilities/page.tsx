import Image from "next/image";
import {
  Dumbbell,
  HeartPulse,
  Waves,
  Baby,
  Building2,
  Trees,
  Coffee,
} from "lucide-react";
import { diningFacilitiesContent } from "@/lib/dining-facilities-content";
import type { Locale } from "@/lib/home-content";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DiningFacilitiesPage({ params }: Props) {
  const { locale } = await params;

  const currentLocale: Locale =
    locale === "ar" || locale === "ku" || locale === "en" ? locale : "en";

  const t = diningFacilitiesContent.page;
  const dir = t.dir[currentLocale];

  const icons = [
    <Waves key="pool" size={16} />,
    <HeartPulse key="medical" size={16} />,
    <Baby key="kids" size={16} />,
    <Building2 key="meetings" size={16} />,
    <Trees key="garden" size={16} />,
    <Coffee key="breakfast" size={16} />,
  ];
const gallery = [
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities1_eyyhtc",
   
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities2_w530ip",
   
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities7_hi46jm",
    
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities3_ybvq9f",
   
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities9_d6rywf",
   
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities8_u1ru5x",
      
  
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities4_fnvdm7",
    
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilitie6_x8fmwb",
   
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities10_xl0xgs",
    
  },
  {
    image:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1400/v1/facilities5_rjhvdr",
    
  },
];

  const infiniteGallery = [...gallery, ...gallery];

  return (
    <main dir={dir} className="min-h-screen bg-[#f6f1e8] text-[#18130c]">
      <section className="relative h-[66vh] min-h-[500px] w-full overflow-hidden rounded-b-[64px]">
        <Image
         src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1800/v1/facilities4_fnvdm7"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-14 md:px-16">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d7b77f]">
              Coral Palace Hotel
            </span>

            <h1 className="mt-5 text-4xl font-light leading-tight text-white md:text-7xl">
              {t.heroTitle[currentLocale]}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              {t.heroText[currentLocale]}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            {t.introTitle[currentLocale]}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-black/65 md:text-base">
            {t.introText[currentLocale]}
          </p>
        </div>

        <div className="mt-16 rounded-[34px] bg-[#8b7355] p-4 text-white md:p-6">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-5 md:p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                Featured Facilities
              </span>

              <h3 className="mt-5 text-3xl font-light md:text-5xl">
                {t.featured[0].title[currentLocale]}
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/75">
                {t.featured[0].text[currentLocale]}
              </p>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[26px] md:min-h-[340px]">
              <Image
               src="https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/facilities-rest_ojvsfe"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

       <div className="mt-14 grid gap-6 md:grid-cols-2">
  {t.featured.slice(1).map((item, index) => (
    <article
      key={index}
      className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_45px_rgba(90,64,28,0.08)]"
    >
      <div className="relative h-[240px]">
        <Image
          src={
            index === 0
              ? "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/facilities-spa_wqjgqx"
              : "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/facilities-gym_hryzkp"
          }
          alt="Facility"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 md:p-7">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#efe4d2] text-[#b98a4d]">
          {index === 0 ? (
            <HeartPulse size={16} />
          ) : (
            <Dumbbell size={16} />
          )}
        </div>
<h3 className="text-lg font-semibold">
  {item.title[currentLocale]}
</h3>

<p className="mt-2 text-sm leading-7 text-neutral-500">
  {item.text[currentLocale]}
</p>
      </div>
    </article>
  ))}
</div>

        <div className="mt-20 md:mt-24">
          <h2 className="text-3xl font-light md:text-5xl">
            {t.facilitiesTitle[currentLocale]}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.facilities.map((facility, index) => (
              <article
                key={index}
                className="rounded-[22px] border border-black/5 bg-white/80 p-4 shadow-[0_8px_28px_rgba(90,64,28,0.055)] transition hover:-translate-y-0.5 hover:bg-white md:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e6d4] text-[#b98a4d]">
                  {icons[index]}
                </div>

                <h3 className="text-lg font-medium">
                  {facility.title[currentLocale]}
                </h3>

                <p className="mt-2 text-sm leading-7 text-black/55">
                  {facility.text[currentLocale]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

   <section className="overflow-hidden pb-24">
  <div className="mx-auto max-w-7xl px-5 md:px-10">
    <h2 className="text-3xl font-light md:text-5xl">
      {currentLocale === "ar"
        ? "لقطات من مرافق الفندق"
        : currentLocale === "ku"
        ? "وێنەیەک لە خزمەتگوزارییەکان"
        : "A Glimpse of Our Facilities"}
    </h2>
  </div>

  <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden">
    <div className="facility-carousel flex w-max gap-5">
      {infiniteGallery.map((item, index) => (
        <div
          key={index}
          className="relative h-[250px] w-[72vw] shrink-0 overflow-hidden rounded-[28px] bg-black shadow-[0_18px_55px_rgba(90,64,28,0.16)] sm:w-[42vw] md:h-[300px] lg:w-[18vw] xl:h-[340px]"
        >
          <Image
            src={item.image}
            alt="Hotel facility"
            fill
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 42vw, 18vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  <style>{`
    @keyframes facilityScroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .facility-carousel {
      animation: facilityScroll 42s linear infinite;
      will-change: transform;
    }

    .facility-carousel:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
    </main>
  );
}