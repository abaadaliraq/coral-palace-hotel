export type Locale = "ar" | "en" | "ku";

export const homeContent = {
  hero: {
    dir: {
      ar: "rtl",
      en: "ltr",
      ku: "rtl",
    },
    title: {
      ar: "حيث تبدأ تجربة الضيافة الراقية بهدوء وأناقة",
      en: "Where refined hospitality begins with calm elegance",
      ku: "شوێنێک کە میوانداریی جوان بە ئارامی و ناسکی دەستپێدەکات",
    },
    description: {
      ar: "مساحات مصممة بعناية، راحة معاصرة، وتفاصيل مدروسة تمنحك إحساسًا متكاملًا منذ لحظة الوصول.",
      en: "Thoughtfully designed spaces, modern comfort, and refined details that shape a seamless sense of arrival.",
      ku: "شوێنەکان بە وردی دیزاینکراون، ئاسوودەیی مۆدێرن و وردەکارییەکی ناسک کە هەستێکی تەواو دروست دەکات لە یەکەم سات.",
    },
    cta: {
      ar: "استكشف الغرف",
      en: "Explore Rooms",
      ku: "ژوورەکان ببینە",
    },
  },

  signature: {
    dir: {
      ar: "rtl",
      en: "ltr",
      ku: "rtl",
    },
    eyebrow: {
      ar: "هوية التجربة",
      en: "Signature Experience",
      ku: "ناسنامەی ئەزموون",
    },
    title: {
      ar: "ضيافة هادئة بتفاصيل مدروسة",
      en: "Quiet hospitality shaped by refined details",
      ku: "میواندارییەکی ئارام بە وردەکاریی جوان",
    },
    text: {
      ar: "في قصر كورال ، كل مساحة صُممت لتمنحك إحساسًا بالهدوء، وتوازنًا بصريًا ينعكس في كل تفصيلة من تجربتك.",
      en: "At Coral Palace, every space is designed to create a sense of calm, where thoughtful design meets a refined atmosphere.",
      ku: "لە Coral Palace، هەر شوێنێک بۆ دروستکردنی هەستی ئارامی و ناسکی دیزاین کراوە، بە وردەکارییەکی بیرلێکراو.",
    },
  },

  rooms: {
    dir: {
      ar: "rtl",
      en: "ltr",
      ku: "rtl",
    },

    eyebrow: {
      ar: "الغرف والأجنحة",
      en: "Rooms & Suites",
      ku: "ژوورەکان و سووتەکان",
    },

    title: {
      ar: "إقامة راقية بتفاصيل هادئة وأناقة مدروسة",
      en: "Refined stays shaped by quiet elegance and thoughtful detail",
      ku: "مانەوەیەکی ناسک بە وردەکاریی ئارام و دیزاینی جوان",
    },

    text: {
      ar: "كل غرفة صُممت بعناية لتمنحك توازنًا مثاليًا بين الراحة والخصوصية، مع تفاصيل تعكس هدوء التجربة وأناقتها في كل لحظة.",
      en: "Each room is thoughtfully designed to offer a perfect balance of comfort and privacy, with details that reflect calm sophistication in every moment.",
      ku: "هەر ژوورێک بە وردی دیزاینکراوە بۆ هاوسەنگی نێوان ئاسوودەیی و تایبەتمەندی، لەگەڵ وردەکارییەکانی ناسک و ئارام.",
    },

    cta: {
      ar: "استكشف الغرف",
      en: "Explore Rooms",
      ku: "ژوورەکان ببینە",
    },

    cardCta: {
      ar: "عرض التفاصيل",
      en: "View Details",
      ku: "وردەکاری ببینە",
    },

    priceLabel: {
      ar: "ابتداءً من",
      en: "From",
      ku: "لە",
    },

    unit: {
      ar: "لليلة",
      en: "per night",
      ku: "بۆ شەوێک",
    },

    items: [
      {
        slug: "premium-room",
        image: "/room-1.jpg",
        price: "$179",
        title: {
          ar: "غرفة بريميوم",
          en: "Premium Room",
          ku: "ژووری پریمیۆم",
        },
        description: {
          ar: "مساحة أنيقة بإضاءة هادئة تمنحك تجربة إقامة مريحة ومتوازنة.",
          en: "An elegant space with calm lighting for a refined and balanced stay.",
          ku: "شوێنێکی ناسک بە ڕووناکیی ئارام بۆ مانەوەیەکی ئاسوودە.",
        },
      },
      {
        slug: "executive-suite",
        image: "/room-2.jpg",
        price: "$249",
        title: {
          ar: "جناح تنفيذي",
          en: "Executive Suite",
          ku: "سووتی جێبەجێکار",
        },
        description: {
          ar: "جناح واسع مع جلسة خاصة يمنحك إحساسًا أكثر خصوصية وتميزًا.",
          en: "A spacious suite with a private lounge for a more exclusive stay.",
          ku: "سووتێکی فراوان بە شوێنی دانیشتنی تایبەت بۆ ئەزموونێکی تایبەت.",
        },
      },
      {
        slug: "deluxe-room",
        image: "/room-3.jpg",
        price: "$199",
        title: {
          ar: "غرفة ديلوكس",
          en: "Deluxe Room",
          ku: "ژووری دیلۆکس",
        },
        description: {
          ar: "تصميم عصري يجمع بين البساطة والأناقة لراحة يومية متكاملة.",
          en: "A modern design combining simplicity and elegance for everyday comfort.",
          ku: "دیزاینێکی مۆدێرن کە سادەیی و جوانی تێکدەکات بۆ ئاسوودەیی ڕۆژانە.",
        },
      },
    ],
  },

  tours: {
    title: {
      ar: "الجولات الافتراضية",
      en: "Virtual Tours",
      ku: "گەڕانەوە ئەستێرەییەکان",
    },

    text: {
      ar: "استكشف تفاصيل الفندق والغرف والمرافق قبل زيارتك، من خلال تجربة بصرية تمنحك إحساسًا واقعيًا بالمكان.",
      en: "Explore the hotel, rooms, and facilities before your visit through an immersive visual experience.",
      ku: "پێش سەردانەکەت، هوتێل و ژوور و خزمەتگوزارییەکان ببینە لە ڕێگەی ئەزموونێکی بینایی کە هەستی ڕاستەقینە دەدات.",
    },

    cta: {
      ar: "ابدأ الجولة",
      en: "Start Tour",
      ku: "دەستپێبکە بە گەڕانەوە",
    },
  },
facilities: {
  dir: {
    ar: "rtl",
    en: "ltr",
    ku: "rtl",
  },

  eyebrow: {
    ar: "مرافق الفندق",
    en: "Hotel Facilities",
    ku: "خزمەتگوزارییەکانی هوتێل",
  },

  title: {
    ar: "تجربة متكاملة تتجاوز الإقامة",
    en: "A complete experience beyond the stay",
    ku: "ئەزموونێکی تەواو کە لە مانەوە فراتر دەچێت",
  },

  text: {
    ar: "مجموعة من المساحات والخدمات المصممة بعناية لتمنحك توازنًا بين الراحة، العمل، والاسترخاء ضمن بيئة واحدة متكاملة.",
    en: "A curated collection of spaces and services designed to balance comfort, work, and relaxation in one refined environment.",
    ku: "کۆمەڵەیەکی هەڵبژێردراو لە شوێن و خزمەتگوزاری کە بۆ هاوسەنگی نێوان ئاسوودەیی، کار و پشوو لە یەک ژینگەی ناسکدا دیزاین کراون.",
  },

  items: {
    rooms: {
      ar: "الغرف",
      en: "Rooms",
      ku: "ژوور",
    },
    offices: {
      ar: "المكاتب",
      en: "Offices",
      ku: "ئۆفیس",
    },
    gym: {
      ar: "نادي رياضي",
      en: "Gym",
      ku: "جیم",
    },
    spa: {
      ar: "سبا",
      en: "Spa",
      ku: "سپا",
    },
    pool: {
      ar: "مسبح",
      en: "Pool",
      ku: "مەڵبەندی ئاو",
    },
    wellness: {
      ar: "قسم صحي",
      en: "Wellness",
      ku: "بەشی تەندروستی",
    },
    village: {
      ar: "قرية",
      en: "Village",
      ku: "گوند",
    },
    meetings: {
      ar: "قاعات اجتماعات",
      en: "Meetings",
      ku: "کۆبوونەوە",
    },
    restaurant: {
      ar: "مطعم",
      en: "Restaurant",
      ku: "چێشتخانە",
    },
    kids: {
      ar: "منطقة أطفال",
      en: "Kids Area",
      ku: "شوێنی منداڵان",
    },
  },
},
why: {
  dir: {
    ar: "rtl",
    en: "ltr",
    ku: "rtl",
  },

  eyebrow: {
    ar: "لماذا كورال بالاس",
    en: "Why Coral Palace",
    ku: "بۆچی Coral Palace",
  },

  title: {
    ar: "تجربة تتشكل من التفاصيل",
    en: "An experience shaped by details",
    ku: "ئەزموونێک کە بە وردەکارییەکان دروست دەبێت",
  },

  text: {
    ar: "في كورال بالاس، لا تقتصر التجربة على الإقامة، بل تمتد إلى كل تفصيلة مدروسة بعناية، من تصميم المساحات إلى جودة الخدمة، لنمنحك إحساسًا متوازنًا بين الراحة والأناقة.",
    en: "At Coral Palace, the experience goes beyond the stay. Every detail is thoughtfully designed — from spatial design to service quality — creating a balanced sense of comfort and elegance.",
    ku: "لە Coral Palace، ئەزموونەکە تەنها لە مانەوەدا کۆتایی نایەت. هەر وردەکارییەک بە وردی بیرلێکراوە، لە دیزاینی شوێنەکانەوە بۆ کوالێتی خزمەتگوزاری، بۆ دروستکردنی هاوسەنگی لە نێوان ئاسوودەیی و ناسکی.",
  },
},
finalCta: {
  title: {
    ar: "إقامة تعكس الراحة والأناقة",
    en: "A stay defined by comfort and elegance",
    ku: "مانەوەیەک کە ئارامی و ناسکی نیشان دەدات",
  },

  text: {
    ar: "اكتشف تجربة ضيافة متكاملة صُممت بعناية لتمنحك إحساسًا مختلفًا منذ لحظة الوصول.",
    en: "Discover a hospitality experience designed to offer a more refined and seamless sense of arrival.",
    ku: "ئەزموونێکی میوانداری بدۆزەرەوە کە بە وردی دیزاینکراوە بۆ دروستکردنی هەستێکی ناسک لە یەکەم ساتی گەیشتنەوە.",
  },

  button: {
    ar: "استكشف الغرف",
    en: "Explore Rooms",
    ku: "ژوورەکان ببینە",
  },
},
preFooter: {
  text: {
    ar: "تجربة تبدأ من اللحظة الأولى",
    en: "An experience that begins from the first moment",
    ku: "ئەزموونێک کە لە یەکەم سات دەستپێدەکات",
  },
},
footer: {
  brand: {
    ar: "كورال بالاس",
    en: "Coral Palace",
    ku: "Coral Palace",
  },

  description: {
    ar: "تجربة ضيافة راقية تجمع بين الراحة، الأناقة، والتفاصيل المدروسة.",
    en: "A refined hospitality experience shaped by comfort, elegance, and thoughtful details.",
    ku: "ئەزموونێکی میوانداریی جوان کە لە ئاسوودەیی، ناسکی و وردەکارییەکی بیرلێکراو پێکهاتووە.",
  },

  explore: {
    ar: "استكشف",
    en: "Explore",
    ku: "گەڕان",
  },

  links: {
    home: {
      ar: "الرئيسية",
      en: "Home",
      ku: "سەرەکی",
    },
    rooms: {
      ar: "الغرف",
      en: "Rooms",
      ku: "ژوورەکان",
    },
tours: {
      ar: "الجولات",
      en: "Tours",
      ku: "گەڕانەوەکان",
    },
    contact: {
      ar: "تواصل معنا",
      en: "Contact",
      ku: "پەیوەندی",
    },
  },
},
  contact: {
    ar: "معلومات التواصل",
    en: "Contact Information",
    ku: "زانیاری پەیوەندی",
  },

  location: {
    ar: "بغداد، العراق",
    en: "Baghdad, Iraq",
    ku: "بەغدا، عێراق",
  },

  rights: {
    ar: "جميع الحقوق محفوظة",
    en: "All rights reserved",
    ku: "هەموو مافەکان پارێزراون",
  },
} as const;