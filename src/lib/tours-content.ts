import type { Locale } from "./home-content";

export const toursContent = {
  page: {
    dir: {
      ar: "rtl",
      en: "ltr",
      ku: "rtl",
    },

    heroTitle: {
      ar: "الجولات الافتراضية",
      en: "Virtual Tours",
      ku: "گەشتە مەجازییەکان",
    },

    heroText: {
      ar: "استكشف الفندق قبل زيارتك من خلال جولات افتراضية تفاعلية للغرف، القرية، قاعات الاجتماعات، المكاتب، والمرافق الأخرى.",
      en: "Explore the hotel before your visit through interactive virtual tours for rooms, the village, meeting halls, offices, and other facilities.",
      ku: "پێش سەردانت هۆتێلەکە ببینە لە ڕێگەی گەشتە مەجازییەکان بۆ ژوورەکان، گوند، هۆڵەکان، ئۆفیسەکان و خزمەتگوزارییەکان.",
    },

    openTour: {
      ar: "عرض الجولة",
      en: "View Tour",
      ku: "بینینی گەشت",
    },

    sections: [
      {
        key: "rooms",
        title: {
          ar: "جولات الغرف والأجنحة",
          en: "Rooms & Suites Tours",
          ku: "گەشتەکانی ژوور و سوێتەکان",
        },
        text: {
          ar: "شاهد الغرف والأجنحة من الداخل وتعرّف على المساحات والتفاصيل قبل الحجز.",
          en: "View rooms and suites from the inside and explore their spaces and details before booking.",
          ku: "ژوور و سوێتەکان لە ناوەوە ببینە و وردەکارییەکان پێش حجزکردن بناسە.",
        },
        tours: [
          {
            id: "deluxe-room",
            title: {
              ar: "غرفة ديلوكس",
              en: "Deluxe Room",
              ku: "ژووری دیلۆکس",
            },
            src: "https://my.matterport.com/show/?m=qskAxRaTYw5",
          },
          {
            id: "executive-suite",
            title: {
              ar: "جناح تنفيذي",
              en: "Executive Suite",
              ku: "سوێتی جێبەجێکار",
            },
            src: "https://my.matterport.com/show/?m=sbRGf39bSLh",
          },
          {
            id: "family-suite",
            title: {
              ar: "جناح عائلي",
              en: "Family Suite",
              ku: "سوێتی خێزانی",
            },
            src: "https://my.matterport.com/show/?m=1GypfACJ5tc",
          },
        ],
      },

      {
        key: "village",
        title: {
          ar: "جولات القرية",
          en: "Village Tours",
          ku: "گەشتەکانی گوند",
        },
        text: {
          ar: "تجربة افتراضية لأجواء القرية والمساحات الخارجية داخل الفندق.",
          en: "A virtual experience of the village atmosphere and outdoor spaces within the hotel.",
          ku: "ئەزموونێکی مەجازی بۆ کەشی گوند و شوێنە دەرەکییەکانی ناو هۆتێل.",
        },
        tours: [
          {
            id: "village-main",
            title: {
              ar: "جولة القرية",
              en: "Village Tour",
              ku: "گەشتی گوند",
            },
            src: "https://my.matterport.com/show/?m=tC4RfesELZw",
          },
        ],
      },

      {
        key: "conference",
        title: {
          ar: "جولات قاعات المؤتمرات والاجتماعات",
          en: "Conference & Meeting Halls Tours",
          ku: "گەشتەکانی هۆڵی کۆنفرانس و کۆبوونەوە",
        },
        text: {
          ar: "استعرض قاعات الاجتماعات والمؤتمرات بتفاصيلها وتجهيزاتها قبل الحجز أو التنسيق.",
          en: "Explore meeting and conference halls with their details and setup before booking or planning.",
          ku: "هۆڵەکانی کۆبوونەوە و کۆنفرانس ببینە بە وردەکاری و ئامادەکارییەکانیان.",
        },
        tours: [
          {
            id: "meeting-hall-1",
            title: {
              ar: "قاعة اجتماعات 1",
              en: "Meeting Hall 1",
              ku: "هۆڵی کۆبوونەوە ١",
            },
            src: "https://my.matterport.com/show/?m=jtTv2FFz9xZ",
          },
          {
            id: "meeting-hall-2",
            title: {
              ar: "قاعة اجتماعات 2",
              en: "Meeting Hall 2",
              ku: "هۆڵی کۆبوونەوە ٢",
            },
            src: "https://my.matterport.com/show/?m=o5aEPAfYtfK",
          },
          {
            id: "conference-hall",
            title: {
              ar: "قاعة المؤتمرات",
              en: "Conference Hall",
              ku: "هۆڵی کۆنفرانس",
            },
            src: "https://my.matterport.com/show/?m=YC54uY9CvVj",
          },
        ],
      },

      {
        key: "offices",
        title: {
          ar: "جولات قاعات المكاتب",
          en: "Office Halls Tours",
          ku: "گەشتەکانی هۆڵی ئۆفیسەکان",
        },
        text: {
          ar: "مساحات عمل مرنة ومناسبة للاجتماعات، الفرق، والأعمال اليومية.",
          en: "Flexible workspaces designed for meetings, teams, and daily business needs.",
          ku: "شوێنی کاری گونجاو بۆ کۆبوونەوە، تیم و کاری ڕۆژانە.",
        },
        tours: [
          {
            id: "office-hall",
            title: {
              ar: "قاعة المكاتب",
              en: "Office Hall",
              ku: "هۆڵی ئۆفیسەکان",
            },
            src: "https://my.matterport.com/show/?m=jtTv2FFz9xZ",
          },
        ],
      },

      {
        key: "facilities",
        title: {
          ar: "جولات المرافق الأخرى",
          en: "Other Facilities Tours",
          ku: "گەشتەکانی خزمەتگوزارییەکانی تر",
        },
        text: {
          ar: "استكشف مرافق الفندق الأخرى، من المدخل الرئيسي إلى المساحات الخدمية والترفيهية.",
          en: "Explore other hotel facilities, from the main entrance to service and leisure spaces.",
          ku: "خزمەتگوزارییەکانی تری هۆتێل ببینە، لە دەروازەی سەرەکییەوە تا شوێنەکانی خزمەت و ئارامگرتن.",
        },
        tours: [
          {
            id: "hotel-entrance",
            title: {
              ar: "مدخل الفندق",
              en: "Hotel Entrance",
              ku: "دەروازەی هۆتێل",
            },
            src: "https://my.matterport.com/show/?m=2EJ9faB8BSD",
          },
        ],
      },
    ],
  },
} as const;

export type ToursLocale = Locale;