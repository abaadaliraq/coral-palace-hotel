import type { Locale } from "./home-content";

export const roomsContent = {
  page: {
    dir: { ar: "rtl", en: "ltr", ku: "rtl" },

    heroImage:
      "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_2400/v1/hero-room_qxttcl",

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
    galleryLabel: { ar: "المعرض", en: "Gallery", ku: "گەلەری" },
    reservationLabel: { ar: "الحجز", en: "Reservation", ku: "حجز" },
    discoverLabel: { ar: "اكتشف فندقنا", en: "Discover Our Hotel", ku: "هۆتێلەکەمان ببینە" },
  },

  rooms: [
    {
      slug: "royal-suite",
      image:
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_2_mnuwkp",
      gallery: [
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_2_mnuwkp",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_2_ie4h86",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_5_cpnbak",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_mqjtlp",
        
      ],
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

    {
      slug: "deluxe-room",
      image:
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_6_ti3rs3",
        gallery: [
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_6_ti3rs3",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room2-1.jpj_c1zwmh",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room_8_z84bd0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room10_l8d87q",
      ],
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
      image:
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_7_buhm5i",
      gallery: [
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_7_buhm5i",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-3_haow39",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_4_z6bck0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-2_nhmpqp",
      ],
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
      image:
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-1.jpj_c1zwmh",
      gallery: [
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_6_ti3rs3",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room2-1.jpj_c1zwmh",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room_8_z84bd0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room10_l8d87q",
      ],
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
  image:
    "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_8_z84bd0",
  gallery: [
     "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_8_z84bd0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room2-1.jpj_c1zwmh",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room_8_z84bd0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/room10_l8d87q",
  ],
  price: "$199",
  tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

  title: {
    ar: "غرفة بريميوم",
    en: "Premium Room",
    ku: "ژووری پرێمیۆم",
  },

  description: {
    ar: "غرفة هادئة بتصميم دافئ وإضاءة مريحة.",
    en: "A calm room with warm interiors and comfortable lighting.",
    ku: "ژوورێکی ئارام بە دیزاینێکی گەرم.",
  },

  longDescription: {
    ar: "غرفة بريميوم تمنح الضيف إقامة هادئة بتفاصيل دافئة ومساحة عملية مناسبة للراحة والعمل.",
    en: "The Premium Room offers a calm stay with warm details and a practical space for rest and work.",
    ku: "ژووری پرێمیۆم مانەوەیەکی ئارام و ئاسوودە دابین دەکات.",
  },
},

{
  slug: "junior-suite",
  image:
    "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-3_haow39",
  gallery: [
   "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto:best,w_1600/v1/room_7_buhm5i",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-3_haow39",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room_4_z6bck0",
        "https://res.cloudinary.com/dyqdfbaln/image/upload/f_auto,q_auto,w_1200/v1/room2-2_nhmpqp",
  ],
  price: "$229",
  tour: "https://my.matterport.com/show/?m=tC4RfesELZw",

  title: {
    ar: "جناح جونيور",
    en: "Junior Suite",
    ku: "سوێتی بچووک",
  },

  description: {
    ar: "جناح عملي وأنيق بمساحة إضافية وراحة أعلى.",
    en: "A practical elegant suite with extra space and more comfort.",
    ku: "سوێتێکی جوان و کرداری بە شوێنی زیاتر.",
  },

  longDescription: {
    ar: "جناح جونيور مناسب للضيوف الذين يرغبون بمساحة أكبر من الغرفة العادية مع تجربة أكثر راحة وأناقة.",
    en: "The Junior Suite is ideal for guests who want more space than a standard room with added comfort and elegance.",
    ku: "سوێتی بچووک گونجاوە بۆ ئەوانەی شوێنی زیاتر دەوێت.",
  },
},
  ],
  
} as const;

export type RoomsLocale = Locale;