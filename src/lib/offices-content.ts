import type { Locale } from "./home-content";

export const officesContent = {
  page: {
    dir: { ar: "rtl", en: "ltr", ku: "rtl" },

    heroImage: "/offices-hero.jpg",

    heroTitle: {
      ar: "حجز المكاتب",
      en: "Office Booking",
      ku: "حجزکردنی ئۆفیس",
    },

    heroText: {
      ar: "مساحات عمل هادئة داخل الفندق، مناسبة للاجتماعات، المقابلات، الأعمال اليومية، واستقبال الضيوف ضمن بيئة راقية ومريحة.",
      en: "Quiet office spaces inside the hotel, suitable for meetings, interviews, daily business, and welcoming guests in a refined environment.",
      ku: "شوێنی کاری ئارام لە ناو هۆتێلدا، گونجاو بۆ کۆبوونەوە، چاوپێکەوتن، کاری ڕۆژانە و پێشوازی میوانان.",
    },

    sectionTitle: {
      ar: "مكاتب عملية بإحساس فندقي",
      en: "Practical Offices with a Hotel Experience",
      ku: "ئۆفیسی کرداری بە ئەزموونی هۆتێلی",
    },

    sectionText: {
      ar: "توفر مكاتب الفندق خياراً مثالياً لمن يحتاج إلى مساحة عمل مؤقتة أو يومية ضمن بيئة منظمة، مريحة، وسهلة الوصول. يمكن استخدام هذه المساحات للاجتماعات الخاصة، المقابلات، الأعمال المكتبية، أو استقبال العملاء، مع إمكانية الاستفادة من خدمات الفندق والمرافق المحيطة.",
      en: "The hotel offices provide an ideal option for guests who need a temporary or daily workspace in an organized, comfortable, and accessible environment. These spaces can be used for private meetings, interviews, office work, or receiving clients, with access to hotel services and nearby facilities.",
      ku: "ئۆفیسەکانی هۆتێل هەڵبژاردەیەکی باشن بۆ ئەوانەی پێویستیان بە شوێنی کاری کاتی یان ڕۆژانە هەیە لە ژینگەیەکی ڕێکخراو و ئاسوودەدا.",
    },

    featuresTitle: {
      ar: "مميزات المكاتب",
      en: "Office Features",
      ku: "تایبەتمەندییەکانی ئۆفیس",
    },

    features: [
      {
        title: {
          ar: "خصوصية وهدوء",
          en: "Privacy & Quiet",
          ku: "تایبەتمەندی و ئارامی",
        },
        text: {
          ar: "مساحات مناسبة للعمل والتركيز بعيداً عن الضوضاء.",
          en: "Spaces designed for focused work away from noise.",
          ku: "شوێنێک بۆ کار و سەرنجدان بەبێ ئاژاوە.",
        },
      },
      {
        title: {
          ar: "موقع داخل الفندق",
          en: "Inside the Hotel",
          ku: "لە ناو هۆتێلدا",
        },
        text: {
          ar: "سهولة الوصول إلى المطاعم، القاعات، والخدمات الفندقية.",
          en: "Easy access to restaurants, halls, and hotel services.",
          ku: "گەیشتنی ئاسان بە چێشتخانە، هۆڵ و خزمەتگوزارییەکان.",
        },
      },
      {
        title: {
          ar: "مناسب للأعمال",
          en: "Business Ready",
          ku: "گونجاو بۆ کار",
        },
        text: {
          ar: "خيار مناسب للاجتماعات، المقابلات، واستقبال العملاء.",
          en: "Suitable for meetings, interviews, and receiving clients.",
          ku: "گونجاو بۆ کۆبوونەوە، چاوپێکەوتن و پێشوازی کڕیار.",
        },
      },
    ],

    formTitle: {
      ar: "طلب حجز مكتب",
      en: "Request Office Booking",
      ku: "داواکاری حجزکردنی ئۆفیس",
    },

    fields: {
  name: { ar: "الاسم الكامل", en: "Full Name", ku: "ناوی تەواو" },

  company: { ar: "اسم الشركة", en: "Company Name", ku: "ناوی کۆمپانیا" },

  email: { ar: "البريد الإلكتروني", en: "Email Address", ku: "ئیمەیڵ" },

  phone: { ar: "رقم الهاتف", en: "Phone Number", ku: "ژمارەی مۆبایل" },

  startDate: {
    ar: "تاريخ بدء التأجير المناسب",
    en: "Preferred Rental Start Date",
    ku: "ڕێکەوتی گونجاوی دەستپێکردنی کرێ",
  },

  duration: {
    ar: "مدة الحجز أو التأجير",
    en: "Booking / Rental Duration",
    ku: "ماوەی حجز یان کرێ",
  },

  businessType: {
    ar: "نوع نشاط الشركة أو المكتب",
    en: "Business / Office Activity",
    ku: "جۆری کاری کۆمپانیا یان ئۆفیس",
  },

  employees: {
    ar: "عدد الموظفين المتوقع",
    en: "Expected Number of Employees",
    ku: "ژمارەی چاوەڕوانکراوی کارمەندان",
  },

  space: {
    ar: "المساحة المطلوبة أو وصف الاحتياج",
    en: "Required Space or Usage Needs",
    ku: "ڕووبەری پێویست یان وەسفی پێویستی",
  },

  guests: {
    ar: "هل سيتم استقبال ضيوف أو عملاء؟",
    en: "Will You Receive Guests or Clients?",
    ku: "ئایا میوان یان کڕیار پێشوازی دەکرێن؟",
  },

  guestsEmployeesOnly: {
    ar: "للموظفين فقط",
    en: "Employees Only",
    ku: "تەنها بۆ کارمەندان",
  },

  guestsVisitors: {
    ar: "استقبال عملاء وضيوف",
    en: "Clients and Guests",
    ku: "پێشوازی کڕیار و میوان",
  },

  notes: { ar: "ملاحظات إضافية", en: "Additional Notes", ku: "تێبینی زیاتر" },

  submit: { ar: "إرسال الطلب عبر واتساب", en: "Send Request via WhatsApp", ku: "ناردنی داواکاری بە واتساپ" },
}
  },
} as const;

export type OfficesLocale = Locale;