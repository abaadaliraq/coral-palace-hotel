import type { Locale } from "./home-content";

export const diningFacilitiesContent = {
  page: {
    dir: { ar: "rtl", en: "ltr", ku: "rtl" },

    heroImage: "/facilitie.jpg",

    heroTitle: {
      ar: "المطاعم والمرافق",
      en: "Dining & Facilities",
      ku: "خواردنگە و خزمەتگوزارییەکان",
    },

    heroText: {
      ar: "مساحات مصممة لتمنح الضيف تجربة متكاملة بين الراحة، الضيافة، الصحة، الترفيه، والاجتماعات.",
      en: "Spaces designed to offer a complete guest experience across comfort, hospitality, wellness, leisure, and business.",
      ku: "شوێنەکان دیزاین کراون بۆ ئەزموونێکی تەواو لە ئاسوودەیی، میوانداری، تەندروستی، کات بەسەربردن و کار.",
    },

    introTitle: {
      ar: "أكثر من إقامة… تجربة كاملة داخل الفندق",
      en: "More Than a Stay… A Complete Hotel Experience",
      ku: "زیاتر لە مانەوە… ئەزموونێکی تەواوی هۆتێلی",
    },

    introText: {
      ar: "يوفّر الفندق مجموعة واسعة من المرافق التي تخدم الضيف خلال الإقامة، سواء كان الهدف الراحة والاستجمام، عقد الاجتماعات، قضاء وقت عائلي، أو الاستفادة من الخدمات اليومية. هذه الصفحة تعرض المرافق بشكل مبدئي إلى حين استلام التفاصيل النهائية من الإدارة.",
      en: "The hotel offers a wide range of facilities that support guests throughout their stay, whether for relaxation, meetings, family time, or daily services. This page currently uses temporary content until final details are provided by management.",
      ku: "هۆتێلەکە کۆمەڵێک خزمەتگوزاری فراوان پێشکەش دەکات بۆ میوانان، بۆ ئارامگرتن، کۆبوونەوە، کاتی خێزانی یان خزمەتگوزاری ڕۆژانە.",
    },

    tabs: {
      story: { ar: "نظرة عامة", en: "Overview", ku: "پوختە" },
      dining: { ar: "المطاعم", en: "Dining", ku: "خواردنگە" },
      wellness: { ar: "العناية والراحة", en: "Wellness", ku: "ئاسوودەیی" },
    },

    featured: [
      {
        title: { ar: "المطعم الرئيسي", en: "Main Restaurant", ku: "خواردنگەی سەرەکی" },
        text: {
          ar: "مساحة راقية لتجربة طعام مريحة تناسب الضيوف، العائلات، واجتماعات العمل غير الرسمية.",
          en: "A refined dining space suitable for guests, families, and casual business gatherings.",
          ku: "شوێنێکی جوان بۆ خواردن، گونجاو بۆ میوانان، خێزان و کۆبوونەوەی کاری سادە.",
        },
        image: "/restaurant.jpg",
      },
      {
        title: { ar: "المساج والاسترخاء", en: "Massage & Relaxation", ku: "ماساج و ئارامگرتن" },
        text: {
          ar: "جلسات عناية واسترخاء تساعد الضيف على استعادة الهدوء بعد يوم طويل.",
          en: "Relaxation and care sessions designed to help guests recharge after a long day.",
          ku: "دانیشتنەکانی ئارامگرتن بۆ گەڕاندنەوەی هێمنی دوای ڕۆژێکی درێژ.",
        },
        image: "/massag.jpg",
      },
      {
        title: { ar: "النادي الرياضي", en: "Fitness Center", ku: "هۆڵی وەرزش" },
        text: {
          ar: "مساحة رياضية مجهزة بشكل مبدئي لتلبية احتياجات الضيوف اليومية.",
          en: "A fitness space prepared to support guests’ daily wellness routines.",
          ku: "شوێنی وەرزش بۆ پشتیوانی ڕۆتینی تەندروستی ڕۆژانەی میوانان.",
        },
        image: "/gym.jpg",
      },
    ],

    facilitiesTitle: {
      ar: "مرافق تناسب كل ضيف",
      en: "Facilities for Every Guest",
      ku: "خزمەتگوزاری بۆ هەموو میوانێک",
    },

    facilities: [
      {
        title: { ar: "المسبح", en: "Swimming Pool", ku: "مەسبەح" },
        text: {
          ar: "مساحة للراحة والاستمتاع بأجواء منعشة داخل الفندق.",
          en: "A refreshing space for relaxation and leisure inside the hotel.",
          ku: "شوێنێکی فێنک و ئارام بۆ کات بەسەربردن.",
        },
      },
      {
        title: { ar: "المركز الطبي", en: "Medical Center", ku: "ناوەندی پزیشکی" },
        text: {
          ar: "خدمة مساندة لضمان راحة واطمئنان الضيوف عند الحاجة.",
          en: "A supportive service to provide comfort and reassurance when needed.",
          ku: "خزمەتگوزارییەکی پشتگیر بۆ دڵنیایی میوانان لە کاتی پێویست.",
        },
      },
      {
        title: { ar: "منطقة لعب الأطفال", en: "Kids Play Area", ku: "شوێنی یاری منداڵان" },
        text: {
          ar: "مساحة مناسبة للعائلات ليقضي الأطفال وقتاً ممتعاً وآمناً.",
          en: "A family-friendly area where children can enjoy a safe and fun time.",
          ku: "شوێنێکی گونجاو بۆ خێزان کە منداڵان بە ئارامی یاری بکەن.",
        },
      },
      {
        title: { ar: "قاعات الاجتماعات والمؤتمرات", en: "Meetings & Conference Halls", ku: "هۆڵی کۆبوونەوە و کۆنفرانس" },
        text: {
          ar: "قاعات مناسبة للاجتماعات، الورش، المؤتمرات، والفعاليات الرسمية.",
          en: "Spaces suitable for meetings, workshops, conferences, and formal events.",
          ku: "هۆڵەکان گونجاون بۆ کۆبوونەوە، وۆرکشۆپ، کۆنفرانس و بۆنەی فەرمی.",
        },
      },
      {
        title: { ar: "الحديقة", en: "Garden", ku: "باخچە" },
        text: {
          ar: "مساحة خارجية هادئة تمنح الضيف فرصة للاسترخاء والتنفس.",
          en: "A calm outdoor area for guests to relax and enjoy open air.",
          ku: "شوێنی دەرەکی ئارام بۆ ئارامگرتن و هەناسەدان.",
        },
      },
      {
        title: { ar: "بوفيه الفطور", en: "Breakfast Buffet", ku: "بۆفێی بەیانیان" },
        text: {
          ar: "تجربة فطور يومية متنوعة ومناسبة لبداية يوم مريحة.",
          en: "A varied breakfast experience designed for a comfortable start to the day.",
          ku: "بەیانییەکی جیاواز بۆ دەستپێکی ڕۆژێکی ئاسوودە.",
        },
      },
    ],
  },
} as const;

export type DiningFacilitiesLocale = Locale;