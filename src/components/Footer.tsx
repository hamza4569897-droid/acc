import React from 'react';
import { MapPin, Building2, Mail, CheckCircle, Medal } from 'lucide-react';
import { useLanguage } from '../i18n';

interface FooterProps {
  setPage: (page: string) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(15,23,42,0.03)] mt-auto">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-4 flex flex-col items-start">
            <button 
              onClick={() => setPage('home')}
              className="flex items-center gap-space-sm mb-space-md focus:outline-none cursor-pointer"
            >
              <img 
                alt="American Group Logo" 
                className="h-9 w-auto object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWd77A8WKdDJIa3jfSPJ6W5yYkiekFhcxelnVST3EXemI9Q9lzeHY0InoCCcTFbS9uaST8Wfn-oYTaPK3E26l2rZOv6QeGF7MPSbAjQ5RTqogyHDzS6P3K0qexDoQZ8XR8KBjeOlpPUk6bEibQ2m6OzPXirCtuoSK5Xm1ybP_9y-5TKJvScoAvoZfVhaWxw5S7Gnl6m26F43cKd-BHYDbfByO-T6HxEdQklopS5l2AeWJZANtZQmDPvv6YVFiIfOQ00A" 
              />
              <span className="font-title-lg text-title-lg font-bold text-on-surface">American Group</span>
            </button>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              {t('desc', 'footer')}
            </p>
          </div>
          
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-md">{t('links', 'footer')}</h3>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md">
              <li className="flex items-center">
                <button onClick={() => setPage('home')} className="text-on-surface-variant hover:text-secondary transition-colors text-start cursor-pointer">{t('home')}</button>
              </li>
              <li className="flex items-center">
                <button onClick={() => setPage('about')} className="text-on-surface-variant hover:text-secondary transition-colors text-start cursor-pointer">{t('about')}</button>
              </li>
              <li className="flex items-center">
                <button onClick={() => setPage('capabilities')} className="text-on-surface-variant hover:text-secondary transition-colors text-start cursor-pointer">{t('capabilities')}</button>
              </li>
              <li className="flex items-center">
                <button onClick={() => setPage('contact')} className="text-on-surface-variant hover:text-secondary transition-colors text-start cursor-pointer">{t('contact')}</button>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-md">{t('branches', 'footer')}</h3>
            <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="leading-snug">{t('alex', 'footer')}</p>
              </div>
              <div className="flex items-start gap-space-xs">
                <Building2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="leading-snug">{t('freezone', 'footer')}</p>
              </div>
              <div className="flex items-start gap-space-xs">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="leading-snug" dir="ltr">info@americanfreezone.com</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-md">{t('quality', 'footer')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md text-start">
              {t('qualityDesc', 'footer')}
            </p>
            <div className="flex flex-wrap gap-space-xs">
              <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                <CheckCircle className="w-4 h-4" />
                WRAP Certified
              </span>
              <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                <Medal className="w-4 h-4" />
                ISO 9001 & 14001
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-surface-container-low py-space-md">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col sm:flex-row items-center justify-between gap-space-xs font-caption-code text-caption-code text-on-surface-variant">
          <span className="tracking-wide" dir="ltr">americanfreezone.com | © Copyright {new Date().getFullYear()}, {t('rights', 'footer')}</span>
          <span className="text-secondary">American Group – Bitotex International S.A.E</span>
        </div>
      </div>
    </footer>
  );
}

