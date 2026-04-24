import type { Locale } from "./home-content";

export const aboutContent = {
  page: {
    dir: {
      ar: "rtl",
      en: "ltr",
      ku: "rtl",
    },

    /* HERO */
    heroTitle: {
      ar: "نبذة عن الفندق",
      en: "About the Hotel",
      ku: "دەربارەی هۆتێل",
    },

    heroText: {
      ar: "حيث تلتقي الفخامة بالهدوء لنقدم تجربة إقامة استثنائية تتجاوز التوقعات.",
      en: "Where luxury meets tranquility, offering an exceptional stay beyond expectations.",
      ku: "شوێنێک کە فاخەری و ئارامی تێکدەگەن بۆ ئەزموونێکی تایبەت.",
    },

    /* SECTION */
    sectionTitle: {
      ar: "تجربة إقامة متكاملة",
      en: "A Complete Stay Experience",
      ku: "ئەزموونی مانەوەیەکی تەواو",
    },

    sectionText: {
      ar: "في هذا الفندق، لا تقتصر الإقامة على غرفة فاخرة فقط، بل هي تجربة متكاملة تبدأ منذ لحظة الوصول. تم تصميم كل مساحة بعناية لتحقيق التوازن بين الأناقة والراحة، مع الاهتمام بأدق التفاصيل التي تصنع الفرق الحقيقي. من جودة الأثاث إلى الإضاءة الهادئة ومستوى الخدمة، كل عنصر مدروس ليمنح الضيف خصوصية وهدوءاً حقيقياً. نحن نؤمن أن الضيافة الحقيقية تكمن في التفاصيل، لذلك نحرص على خلق بيئة تجمع بين الراحة والتناغم والخدمة الراقية.",
      
      en: "At this hotel, your stay goes beyond just a luxurious room — it is a complete experience from the moment you arrive. Every space is carefully designed to balance elegance and comfort, with attention to the finest details that truly define the experience. From high-quality furnishings and ambient lighting to refined service, every element is crafted to provide privacy and tranquility. We believe true hospitality lies in the details, which is why we create an environment that combines comfort, harmony, and premium service.",
      
      ku: "لە ئەم هۆتێلەدا، مانەوە تەنها بە ژوورێکی جوان ناوەستێت، بەڵکو ئەزموونێکی تەواوە لە کاتی گەیشتنەوەوە دەست پێدەکات. هەر شوێنێک بە وردی دیزاین کراوە بۆ هاوکێشەی نێوان جوانی و ئاسوودەیی. لە کۆالیتی مۆبڵەوە تا ڕووناکی و خزمەتگوزاری، هەموو شتێک بۆ ئارامی و تایبەتمەندی دروست کراوە.",
    },

    /* STATS */
    stats: {
      rooms: {
        ar: "غرفة",
        en: "Rooms",
        ku: "ژوور",
      },
      service: {
        ar: "خدمة 24 ساعة",
        en: "24/7 Service",
        ku: "خزمەتگوزاری 24 کاتژمێر",
      },
      experience: {
        ar: "تجربة 5 نجوم",
        en: "5★ Experience",
        ku: "ئەزموونی 5 ئەستێرە",
      },
      facilities: {
        ar: "مرافق",
        en: "Facilities",
        ku: "خزمەتگوزاریەکان",
      },
    },
  },
} as const;

export type AboutLocale = Locale;