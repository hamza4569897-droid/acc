import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const translations: Record<string, Record<string, Record<string, string>>> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      index: 'الفهرس',
      about: 'عن الشركة',
      capabilities: 'قدراتنا',
      contact: 'اتصل بنا',
    },
    header: {
      zone: 'BITOTEX INTERNATIONAL · منطقة حرة خاصة',
      email: 'راسلنا',
      menu: 'القائمة'
    },
    footer: {
      desc: 'الشركة الرائدة في مجال تصدير الملابس الجاهزة وتصنيع النسيج في الشرق الأوسط.',
      rights: 'جميع الحقوق محفوظة',
      links: 'روابط سريعة',
      branches: 'الفروع والمصانع',
      quality: 'معايير الجودة',
      qualityDesc: 'ملتزمون بأعلى معايير الجودة العالمية والامتثال الأخلاقي.',
      alex: 'الإسكندرية، مصر',
      freezone: 'المنطقة الحرة، الإسكندرية'
    },
    common: {
      siteIndex: 'فهرس الموقع والخدمات',
      siteIndexDesc: 'دليل شامل لجميع أقسام الموقع، الشركات التابعة، خطوط الإنتاج والخدمات الصناعية',
      viewMore: 'عرض التفاصيل',
      contactUs: 'تواصل معنا'
    }
  },
  en: {
    nav: {
      home: 'Home',
      index: 'Index',
      about: 'About',
      capabilities: 'Capabilities',
      contact: 'Contact',
    },
    header: {
      zone: 'BITOTEX INTERNATIONAL · Private Free Zone',
      email: 'EMAIL',
      menu: 'Menu'
    },
    footer: {
      desc: 'The leading company in readymade garments export and textile manufacturing in the Middle East.',
      rights: 'All Rights Reserved',
      links: 'Quick Links',
      branches: 'Branches & Facilities',
      quality: 'Quality Standards',
      qualityDesc: 'Committed to the highest global quality standards and ethical compliance.',
      alex: 'Alexandria, Egypt',
      freezone: 'Free Zone, Alexandria'
    },
    common: {
      siteIndex: 'Site & Services Index',
      siteIndexDesc: 'Comprehensive guide to all website sections, subsidiaries, production lines, and industrial capabilities',
      viewMore: 'View Details',
      contactUs: 'Contact Us'
    }
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string, section: string = 'nav') => {
    return translations[language]?.[section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div 
        dir={language === 'ar' ? 'rtl' : 'ltr'} 
        className={`min-h-screen flex flex-col ${language === 'ar' ? 'font-ibm' : 'font-sans'} text-start`}
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

