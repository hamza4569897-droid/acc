import React from 'react';
import { useLanguage } from '../i18n';

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export default function Header({ currentPage, setPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <button 
            onClick={() => setPage('home')}
            className="flex items-center gap-space-sm focus:outline-none" 
          >
            <img 
              alt="American Group Logo" 
              className="h-10 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhIszW28nHc86P3leBdbQJdv_Ht6AnVCwSXAEATj0TOuL8xkxJ0UTTgZR8eTGXNBX6pUfnaHpxOPB5kK-mHKXiLR8LDQGo_1zBypExxWHBPQ-vc5aa01vFuXobM8WBGz3oJ-n7PmHOiQdBQCkJP4EKIbmrYF8Om9Y_RnXY2Q_5N-OpNDPLJNQN1-RSV9waEsxn6ypUigcMHGjhdgkkP03WaM62Ud2N7VmsORKBpNaDL2NyBqiaTan388Yo74ot_TeeqQ" 
            />
            <div className="flex flex-col leading-tight text-start">
              <span className="font-title-md text-title-md text-on-surface font-bold">American Group</span>
              <span className="font-caption-code text-caption-code text-secondary tracking-wider">{t('zone', 'header')}</span>
            </div>
          </button>
          
          <nav className="hidden lg:flex items-center gap-space-xs">
            <button 
              onClick={() => setPage('home')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors ${currentPage === 'home' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('home')}
            </button>
            <button 
              onClick={() => setPage('about')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors ${currentPage === 'about' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('about')}
            </button>
            <button 
              onClick={() => setPage('capabilities')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors ${currentPage === 'capabilities' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('capabilities')}
            </button>
            <button 
              onClick={() => setPage('contact')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors ${currentPage === 'contact' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('contact')}
            </button>
          </nav>
        </div>
        
        <div className="flex items-center gap-space-sm">
          <div className="hidden sm:flex items-center bg-surface-container-low p-space-2xs rounded-full">
            <button 
              onClick={() => setLanguage('ar')}
              className={`px-space-sm py-space-2xs font-caption-code text-caption-code rounded-full transition-colors ${language === 'ar' ? 'bg-surface-container-lowest text-on-surface font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-on-surface-variant hover:text-on-surface'}`} 
              type="button"
            >
              AR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-space-sm py-space-2xs font-caption-code text-caption-code rounded-full transition-colors ${language === 'en' ? 'bg-surface-container-lowest text-on-surface font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-on-surface-variant hover:text-on-surface'}`} 
              type="button"
            >
              EN
            </button>
          </div>
          <a className="hidden md:inline-flex items-center px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary-fixed transition-colors" href="mailto:inquiry@americanfreezone.com">
            EMAIL
          </a>
        </div>
      </div>
    </header>
  );
}
