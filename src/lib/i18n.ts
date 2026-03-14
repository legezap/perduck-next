export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const localeNames: Record<Locale, string> = { en: "EN", ar: "عربي" };
export const rtlLocales: Locale[] = ["ar"];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export type TranslationKey = keyof typeof translations.en;

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.quote": "Get a Quote",

    // Mega menu
    "mega.exhibition": "Exhibition Design",
    "mega.exhibition.desc": "Custom stands from 18 to 700+ sqm",
    "mega.project": "Project Management",
    "mega.project.desc": "End-to-end logistics and delivery",
    "mega.concept": "Conceptual Event Design",
    "mega.concept.desc": "Immersive brand environments",
    "mega.media": "Content & Media",
    "mega.media.desc": "Video, graphics, interactive tech",

    // Hero
    "hero.badge": "UAE-Based, Globally Deployed",
    "hero.title": "We Build Experiences That",
    "hero.title.accent": "Command Attention",
    "hero.sub": "Exhibition stands, event production, and immersive brand environments from <strong>18 sqm to 700 sqm</strong>. Trusted by Microsoft, Vanderlande, and brands across 10 countries.",
    "hero.cta.start": "Start Your Project",
    "hero.cta.work": "View Our Work",
    "hero.stat.projects": "Projects Delivered",
    "hero.stat.countries": "Countries",
    "hero.stat.sqm": "sqm Largest Build",
    "hero.stat.ontime": "On-Time Delivery",

    // Trust
    "trust.label": "Trusted by industry leaders",

    // Services
    "services.label": "What We Do",
    "services.title": "Full-Spectrum Exhibition",
    "services.title.accent": "& Event Solutions",
    "services.desc": "From the first sketch to the final walkthrough, we handle every detail so you can focus on what matters: your audience.",
    "services.learn": "Learn more",

    // Services page
    "servicespage.label": "Our Capabilities",
    "servicespage.title": "End-to-End Exhibition",
    "servicespage.title.accent": "& Event Services",
    "servicespage.desc": "We design, engineer, build, and manage exhibition stands and events across the Middle East and beyond. One team. One point of accountability. Zero excuses.",

    // Cinematic
    "cine.microsoft": "700 sqm. Double Decker. Microsoft at LEAP.",
    "cine.microsoft.sub": "Our largest build to date — a partner-centric stand in Riyadh.",
    "cine.impact": "Every Square Meter Engineered for Impact.",

    // Portfolio
    "portfolio.label": "Selected Work",
    "portfolio.title": "Projects That Speak",
    "portfolio.title.accent": "for Themselves",
    "portfolio.desc": "From a 700 sqm double-decker for Microsoft to a refined 18 sqm compact stand — every project gets our full commitment.",
    "portfolio.viewall": "View All Projects",

    // Stats
    "stats.projects": "Projects Delivered",
    "stats.countries": "Countries Operated In",
    "stats.industries": "Industries Served",
    "stats.ontime": "On-Time Delivery Rate",


    // About
    "about.label": "Who We Are",
    "about.title": "Built Different.",
    "about.title.accent": "Built to Deliver.",
    "about.p1": "We are a UAE-based exhibition and event company that operates like a special operations unit: small, focused, lethal on deadlines. Every project gets senior-level attention from concept through final installation.",
    "about.p2": "Our team combines architectural design, structural engineering, and creative production under one roof — eliminating the handoff gaps that plague traditional agencies.",
    "about.learn": "Learn More",
    "about.talk": "Talk to Us",

    // About page
    "aboutpage.label": "Who We Are",
    "aboutpage.title": "Built Different.",
    "aboutpage.title.accent": "Built to Deliver.",
    "aboutpage.desc": "A UAE-based exhibition and event company that operates like a special operations unit: small, focused, and relentless on deadlines.",
    "aboutpage.story.label": "Our Story",
    "aboutpage.story.title": "From Concept to",
    "aboutpage.story.title.accent": "Global Execution",
    "aboutpage.values.label": "Our Values",
    "aboutpage.values.title": "What Drives",
    "aboutpage.values.title.accent": "Every Decision",
    "aboutpage.cap.label": "Capabilities",
    "aboutpage.cap.title": "What We Bring",
    "aboutpage.cap.title.accent": "to the Table",
    "aboutpage.track.label": "Track Record",
    "aboutpage.track.title": "Milestones",
    "aboutpage.track.title.accent": "That Matter",
    "aboutpage.cta": "Ready to Work With Us?",

    // CTA
    "cta.title": "Ready to Build Something",
    "cta.title.accent": "Remarkable?",
    "cta.desc": "Tell us about your next exhibition or event. We respond within 24 hours.",
    "cta.start": "Start Your Project",
    "cta.see": "See Our Work",

    // Contact
    "contact.label": "Start a Project",
    "contact.title": "Let's Build Something",
    "contact.title.accent": "Exceptional",
    "contact.desc": "Fill out our project brief form below and we will respond with a detailed proposal within 24 hours. Every inquiry gets senior-level attention.",
    "contact.direct": "Direct Contact",
    "contact.direct.desc": "Prefer a quick conversation? Reach out directly via phone, email, or WhatsApp. Our team is available Sunday through Thursday, 9:00 AM to 6:00 PM GST.",
    "contact.office": "Office",
    "contact.phone": "Phone & WhatsApp",
    "contact.email": "Email",
    "contact.social": "Social",
    "contact.step1.title": "What do you need?",
    "contact.step1.desc": "Select the primary service you are looking for.",
    "contact.step2.title": "Project Details",
    "contact.step2.desc": "Tell us about your exhibition or event.",
    "contact.step3.title": "Your Information",
    "contact.step3.desc": "How can we reach you?",
    "contact.step4.title": "Anything Else?",
    "contact.step4.desc": "Share any additional details or requirements.",
    "contact.submit": "Submit Project Brief",
    "contact.next": "Next Step",
    "contact.back": "Back",
    "contact.success.title": "Project Brief Received",
    "contact.success.ref": "Your reference number:",
    "contact.consent": "I agree that The Butter Duck may store and process my data to respond to this inquiry.",

    // Footer
    "footer.brand": "Turning vision into experience, every event, every time. UAE-based exhibition design and event production for global brands.",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.aboutus": "About Us",
    "footer.contact": "Contact",
    "footer.getintouch": "Get in Touch",

    // Case study
    "case.overview": "Overview",
    "case.challenge": "The Challenge",
    "case.solution": "Our Solution",
    "case.features": "Key Features",
    "case.results": "Results",
    "case.cta": "Ready to Build Something Like This?",
    "case.next": "Next Project",
    "case.prev": "Previous Project",
    "case.allprojects": "All Projects",
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "المشاريع",
    "nav.about": "من نحن",
    "nav.quote": "طلب عرض سعر",

    "mega.exhibition": "تصميم المعارض",
    "mega.exhibition.desc": "أجنحة مخصصة من 18 إلى 700+ م²",
    "mega.project": "إدارة المشاريع",
    "mega.project.desc": "خدمات لوجستية شاملة",
    "mega.concept": "تصميم الفعاليات",
    "mega.concept.desc": "بيئات العلامة التجارية الغامرة",
    "mega.media": "المحتوى والإعلام",
    "mega.media.desc": "فيديو، رسومات، تقنيات تفاعلية",

    "hero.badge": "مقرنا الإمارات، عملنا عالمي",
    "hero.title": "نبني تجارب",
    "hero.title.accent": "تجذب كل الأنظار",
    "hero.sub": "أجنحة معارض وإنتاج فعاليات وبيئات غامرة للعلامات التجارية من <strong>18 م² إلى 700 م²</strong>. موثوقون من مايكروسوفت وفاندرلاند وعلامات تجارية في 10 دول.",
    "hero.cta.start": "ابدأ مشروعك",
    "hero.cta.work": "عرض أعمالنا",
    "hero.stat.projects": "مشروع منجز",
    "hero.stat.countries": "دول",
    "hero.stat.sqm": "م² أكبر مشروع",
    "hero.stat.ontime": "تسليم في الموعد",

    "trust.label": "موثوقون من رواد الصناعة",

    "services.label": "ما نقدمه",
    "services.title": "حلول شاملة للمعارض",
    "services.title.accent": "والفعاليات",
    "services.desc": "من أول رسم إلى الجولة النهائية، نتولى كل التفاصيل لتركز أنت على ما يهم: جمهورك.",
    "services.learn": "اعرف المزيد",

    "servicespage.label": "قدراتنا",
    "servicespage.title": "خدمات معارض وفعاليات",
    "servicespage.title.accent": "شاملة",
    "servicespage.desc": "نصمم ونهندس ونبني وندير أجنحة المعارض والفعاليات في الشرق الأوسط وخارجه. فريق واحد. مسؤولية واحدة.",

    "cine.microsoft": "700 م². طابقين. مايكروسوفت في LEAP.",
    "cine.microsoft.sub": "أكبر مشروع لنا حتى الآن — جناح شراكات في الرياض.",
    "cine.impact": "كل متر مربع مُهندَس للتأثير.",

    "portfolio.label": "أعمال مختارة",
    "portfolio.title": "مشاريع تتحدث",
    "portfolio.title.accent": "عن نفسها",
    "portfolio.desc": "من جناح 700 م² مزدوج لمايكروسوفت إلى جناح مدمج 18 م² — كل مشروع يحظى بالتزامنا الكامل.",
    "portfolio.viewall": "عرض جميع المشاريع",

    "stats.projects": "مشروع منجز",
    "stats.countries": "دول عملنا فيها",
    "stats.industries": "صناعة مخدومة",
    "stats.ontime": "معدل التسليم في الموعد",


    "about.label": "من نحن",
    "about.title": "مختلفون في البناء.",
    "about.title.accent": "ملتزمون بالتسليم.",
    "about.p1": "شركة معارض وفعاليات مقرها الإمارات تعمل كوحدة عمليات خاصة: صغيرة ومركزة وحازمة في المواعيد.",
    "about.p2": "يجمع فريقنا بين التصميم المعماري والهندسة الإنشائية والإنتاج الإبداعي تحت سقف واحد.",
    "about.learn": "اعرف المزيد",
    "about.talk": "تواصل معنا",

    "aboutpage.label": "من نحن",
    "aboutpage.title": "مختلفون في البناء.",
    "aboutpage.title.accent": "ملتزمون بالتسليم.",
    "aboutpage.desc": "شركة معارض وفعاليات مقرها الإمارات تعمل كوحدة عمليات خاصة: صغيرة ومركزة ولا تتهاون في المواعيد.",
    "aboutpage.story.label": "قصتنا",
    "aboutpage.story.title": "من الفكرة إلى",
    "aboutpage.story.title.accent": "التنفيذ العالمي",
    "aboutpage.values.label": "قيمنا",
    "aboutpage.values.title": "ما يحرك",
    "aboutpage.values.title.accent": "كل قرار",
    "aboutpage.cap.label": "القدرات",
    "aboutpage.cap.title": "ما نقدمه",
    "aboutpage.cap.title.accent": "على الطاولة",
    "aboutpage.track.label": "سجل الإنجازات",
    "aboutpage.track.title": "محطات",
    "aboutpage.track.title.accent": "مهمة",
    "aboutpage.cta": "مستعد للعمل معنا؟",

    "cta.title": "مستعد لبناء شيء",
    "cta.title.accent": "استثنائي؟",
    "cta.desc": "أخبرنا عن معرضك أو فعاليتك القادمة. نرد خلال 24 ساعة.",
    "cta.start": "ابدأ مشروعك",
    "cta.see": "شاهد أعمالنا",

    "contact.label": "ابدأ مشروعاً",
    "contact.title": "لنبنِ شيئاً",
    "contact.title.accent": "استثنائياً",
    "contact.desc": "املأ نموذج ملخص المشروع أدناه وسنرد بعرض مفصل خلال 24 ساعة.",
    "contact.direct": "اتصال مباشر",
    "contact.direct.desc": "تفضل محادثة سريعة؟ تواصل مباشرة عبر الهاتف أو البريد أو واتساب. فريقنا متاح من الأحد إلى الخميس.",
    "contact.office": "المكتب",
    "contact.phone": "الهاتف وواتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.social": "التواصل الاجتماعي",
    "contact.step1.title": "ما الذي تحتاجه؟",
    "contact.step1.desc": "اختر الخدمة الأساسية التي تبحث عنها.",
    "contact.step2.title": "تفاصيل المشروع",
    "contact.step2.desc": "أخبرنا عن معرضك أو فعاليتك.",
    "contact.step3.title": "معلوماتك",
    "contact.step3.desc": "كيف يمكننا الوصول إليك؟",
    "contact.step4.title": "أي شيء آخر؟",
    "contact.step4.desc": "شارك أي تفاصيل أو متطلبات إضافية.",
    "contact.submit": "إرسال ملخص المشروع",
    "contact.next": "الخطوة التالية",
    "contact.back": "رجوع",
    "contact.success.title": "تم استلام ملخص المشروع",
    "contact.success.ref": "رقم المرجع:",
    "contact.consent": "أوافق على أن The Butter Duck قد تخزن وتعالج بياناتي للرد على هذا الاستفسار.",

    "footer.brand": "نحوّل الرؤية إلى تجربة، في كل فعالية، في كل مرة. تصميم معارض وإنتاج فعاليات من الإمارات للعلامات التجارية العالمية.",
    "footer.services": "الخدمات",
    "footer.company": "الشركة",
    "footer.aboutus": "من نحن",
    "footer.contact": "اتصل بنا",
    "footer.getintouch": "تواصل معنا",

    "case.overview": "نظرة عامة",
    "case.challenge": "التحدي",
    "case.solution": "حلنا",
    "case.features": "الميزات الرئيسية",
    "case.results": "النتائج",
    "case.cta": "مستعد لبناء شيء مثل هذا؟",
    "case.next": "المشروع التالي",
    "case.prev": "المشروع السابق",
    "case.allprojects": "جميع المشاريع",
  },
} as const;

export type Translations = Record<TranslationKey, string>;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getTranslations(locale: Locale): Translations {
  return (translations[locale] ?? translations.en) as Translations;
}
