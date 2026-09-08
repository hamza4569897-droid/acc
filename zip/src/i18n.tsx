import React, { createContext, useContext, useState } from 'react';

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
      about: 'عن الشركة',
      capabilities: 'قدراتنا',
      contact: 'اتصل بنا',
    },
    header: {
      zone: 'BITOTEX INTERNATIONAL · منطقة حرة خاصة'
    },
    footer: {
      desc: 'الشركة الرائدة في مجال تصدير الملابس الجاهزة وتصنيع النسيج في الشرق الأوسط.',
      rights: 'جميع الحقوق محفوظة'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      capabilities: 'Capabilities',
      contact: 'Contact',
    },
    header: {
      zone: 'BITOTEX INTERNATIONAL · Private Free Zone'
    },
    footer: {
      desc: 'The leading company in readymade garments export and textile manufacturing in the Middle East.',
      rights: 'All Rights Reserved'
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
