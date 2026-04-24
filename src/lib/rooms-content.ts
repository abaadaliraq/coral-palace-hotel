import type { Locale } from "./home-content";

export const roomsContent = {
  page: {
    dir: { ar: "rtl", en: "ltr", ku: "rtl" },
    heroImage: "/hero.jpg",

    heroTitle: {
      ar: "الغرف والأجنحة",
      en: "Rooms & Suites",
      ku: "ژوور و سوێتەکان",
    },

    heroText: {
      ar: "إقامات مريحة وخاصة مع صور وجولات افتراضية تساعد الضيف على اختيار الغرفة المناسبة قبل الحجز.",
      en: "Comfortable and private stays with photos and virtual tours that help guests choose the right room before booking.",
      ku: "شوێنی مانەوەی ئاسوودە و تایبەت، لەگەڵ وێنە و گەشتی مەجازی.",
    },

    details: { ar: "عرض التفاصيل", en: "View Details", ku: "وردەکاری" },
    booking: { ar: "احجز الآن", en: "Book Now", ku: "حجز بکە" },
    priceLabel: { ar: "ابتداءً من", en: "From", ku: "لە" },
    unit: { ar: "لليلة", en: "per night", ku: "بۆ شەوێک" },
    back: { ar: "العودة للغرف", en: "Back to Rooms", ku: "گەڕانەوە بۆ ژوورەکان" },
    tourBtn: { ar: "الجولة الافتراضية", en: "Virtual Tour", ku: "گەشتی مەجازی" },
  },

  rooms: [
    {
      slug: "deluxe-room",
      image: "/room1.jpg",
      gallery: ["/room1.jpg", "/room2.jpg", "/room3.jpg", "/test1.jpg"],
      price: "$179",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "غرفة ديلوكس",
        en: "Deluxe Room",
        ku: "ژووری دیلۆکس",
      },

      description: {
        ar: "غرفة أنيقة بتفاصيل هادئة ومساحة مريحة لإقامة راقية.",
        en: "An elegant room with calm details and a comfortable refined stay.",
        ku: "ژوورێکی جوان و ئاسوودە.",
      },

      longDescription: {
        ar: "غرفة ديلوكس مصممة لإقامة مريحة وهادئة، تجمع بين الأناقة والخصوصية مع تفاصيل عملية تناسب الضيف خلال الإقامة.",
        en: "The Deluxe Room is designed for a calm and comfortable stay, combining privacy, elegance, and practical details.",
        ku: "ژووری دیلۆکس بۆ مانەوەیەکی ئارام و ئاسوودە دیزاین کراوە.",
      },
    },

    {
      slug: "executive-suite",
      image: "/room2.jpg",
      gallery: ["/room2.jpg", "/room1.jpg", "/room3.jpg", "/signature.jpg"],
      price: "$249",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "جناح تنفيذي",
        en: "Executive Suite",
        ku: "سوێتی جێبەجێکار",
      },

      description: {
        ar: "جناح واسع بجلسة خاصة وتفاصيل مصممة لراحة أعلى.",
        en: "A spacious suite with a private lounge and elevated comfort.",
        ku: "سوێتێکی فراوان و ئاسوودە.",
      },

      longDescription: {
        ar: "الجناح التنفيذي يمنح الضيف مساحة أوسع وتجربة أكثر خصوصية، مناسب للإقامة الطويلة أو رجال الأعمال.",
        en: "The Executive Suite offers more space, privacy, and comfort, ideal for longer stays or business guests.",
        ku: "سوێتی جێبەجێکار شوێن و تایبەتمەندی زیاتر دەدات.",
      },
    },

    {
      slug: "family-suite",
      image: "/room3.jpg",
      gallery: ["/room3.jpg", "/room1.jpg", "/room2.jpg", "/test1.jpg"],
      price: "$299",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "جناح عائلي",
        en: "Family Suite",
        ku: "سوێتی خێزانی",
      },

      description: {
        ar: "مساحة مناسبة للعائلات تجمع بين الراحة والخصوصية.",
        en: "A family-friendly space combining comfort and privacy.",
        ku: "شوێنێکی گونجاو بۆ خێزان.",
      },

      longDescription: {
        ar: "الجناح العائلي مناسب للعائلات التي تحتاج مساحة أكبر، ترتيب عملي، وراحة أثناء الإقامة.",
        en: "The Family Suite is ideal for families needing more space, practical layout, and a comfortable stay.",
        ku: "سوێتی خێزانی گونجاوە بۆ خێزان بە شوێنی زیاتر.",
      },
    },

    {
      slug: "premium-room",
      image: "/test1.jpg",
      gallery: ["/test1.jpg", "/room1.jpg", "/room2.jpg", "/room3.jpg"],
      price: "$199",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "غرفة بريميوم",
        en: "Premium Room",
        ku: "ژووری پریمیۆم",
      },

      description: {
        ar: "إقامة هادئة بديكور دافئ وإضاءة مريحة.",
        en: "A calm stay with warm interiors and comfortable lighting.",
        ku: "مانەوەیەکی ئارام.",
      },

      longDescription: {
        ar: "غرفة بريميوم تقدم تجربة أكثر هدوءاً بتصميم دافئ وإضاءة مناسبة للراحة.",
        en: "The Premium Room offers a calmer experience with warm design and comfortable lighting.",
        ku: "ژووری پریمیۆم بۆ مانەوەیەکی ئارام و جوانە.",
      },
    },

    {
      slug: "junior-suite",
      image: "/signature.jpg",
      gallery: ["/signature.jpg", "/room1.jpg", "/room2.jpg", "/room3.jpg"],
      price: "$229",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "جناح جونيور",
        en: "Junior Suite",
        ku: "سوێتی بچووک",
      },

      description: {
        ar: "جناح عملي وأنيق لمن يريد مساحة أكثر وراحة أكبر.",
        en: "A practical elegant suite for more space and comfort.",
        ku: "سوێتێکی بچووک و جوان.",
      },

      longDescription: {
        ar: "جناح جونيور خيار مناسب للضيف الذي يريد مساحة أكبر من الغرفة العادية مع إحساس أكثر خصوصية.",
        en: "The Junior Suite is ideal for guests who want more space than a standard room with added privacy.",
        ku: "سوێتی بچووک باشە بۆ شوێنی زیاتر و تایبەتمەندی.",
      },
    },

    {
      slug: "royal-suite",
      image: "/hero.jpg",
      gallery: ["/hero.jpg", "/room1.jpg", "/room2.jpg", "/room3.jpg"],
      price: "$399",
      tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

      title: {
        ar: "الجناح الملكي",
        en: "Royal Suite",
        ku: "سوێتی شاهانە",
      },

      description: {
        ar: "تجربة فاخرة بمساحة واسعة وتفاصيل راقية.",
        en: "A luxurious experience with generous space and refined details.",
        ku: "ئەزموونێکی شاهانە.",
      },

      longDescription: {
        ar: "الجناح الملكي هو الخيار الأعلى للإقامة الفاخرة، بمساحة واسعة وتفاصيل تعطي شعوراً بالخصوصية والتميّز.",
        en: "The Royal Suite is the highest luxury option, offering generous space and refined private details.",
        ku: "سوێتی شاهانە هەڵبژاردەیەکی فاخەرە بۆ مانەوە.",
      },
    },
  ],
} as const;

export type RoomsLocale = Locale;