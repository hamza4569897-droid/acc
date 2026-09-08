import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { useLanguage } from '../i18n';

interface HeaderProps {
  currentPage: string;
  setPage: (page: string) => void;
}

export default function Header({ currentPage, setPage }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageName: string) => {
    setPage(pageName);
    setMobileMenuOpen(false);
  };

  const isHomeActive = currentPage === 'home' || currentPage === 'index';

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-space-sm focus:outline-none cursor-pointer" 
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
              onClick={() => handleNavClick('home')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors cursor-pointer ${isHomeActive ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('home')}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors cursor-pointer ${currentPage === 'about' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('about')}
            </button>
            <button 
              onClick={() => handleNavClick('capabilities')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors cursor-pointer ${currentPage === 'capabilities' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('capabilities')}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`px-space-md py-space-xs font-label-md text-label-md rounded-lg transition-colors cursor-pointer ${currentPage === 'contact' ? 'bg-surface-container text-on-surface font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t('contact')}
            </button>
          </nav>
        </div>
        
        <div className="flex items-center gap-space-sm">
          <div className="flex items-center bg-surface-container-low p-space-2xs rounded-full">
            <button 
              onClick={() => setLanguage('ar')}
              className={`px-space-sm py-space-2xs font-caption-code text-caption-code rounded-full transition-colors cursor-pointer ${language === 'ar' ? 'bg-surface-container-lowest text-on-surface font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-on-surface-variant hover:text-on-surface'}`} 
              type="button"
            >
              AR
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-space-sm py-space-2xs font-caption-code text-caption-code rounded-full transition-colors cursor-pointer ${language === 'en' ? 'bg-surface-container-lowest text-on-surface font-bold shadow-[0_1px_2px_rgba(0,0,0,0.05)]' : 'text-on-surface-variant hover:text-on-surface'}`} 
              type="button"
            >
              EN
            </button>
          </div>
          <a className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md hover:bg-secondary-fixed transition-colors" href="mailto:inquiry@americanfreezone.com">
            {t('email', 'header')}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-space-xs rounded-lg text-on-surface hover:bg-surface-container focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-gutter-mobile py-space-md shadow-lg flex flex-col gap-space-xs">
          <button 
            onClick={() => handleNavClick('home')}
            className={`w-full py-space-sm px-space-md rounded-lg font-title-md text-title-md text-start transition-colors cursor-pointer ${isHomeActive ? 'bg-surface-container text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('home')}
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`w-full py-space-sm px-space-md rounded-lg font-title-md text-title-md text-start transition-colors cursor-pointer ${currentPage === 'about' ? 'bg-surface-container text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('about')}
          </button>
          <button 
            onClick={() => handleNavClick('capabilities')}
            className={`w-full py-space-sm px-space-md rounded-lg font-title-md text-title-md text-start transition-colors cursor-pointer ${currentPage === 'capabilities' ? 'bg-surface-container text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('capabilities')}
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`w-full py-space-sm px-space-md rounded-lg font-title-md text-title-md text-start transition-colors cursor-pointer ${currentPage === 'contact' ? 'bg-surface-container text-on-surface font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            {t('contact')}
          </button>

          <div className="pt-space-sm mt-space-xs border-t border-outline-variant/30 flex items-center justify-between">
            <a 
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md" 
              href="mailto:inquiry@americanfreezone.com"
            >
              <Mail className="w-4 h-4" />
              <span>{t('email', 'header')}</span>
            </a>
            <span className="font-caption-code text-caption-code text-secondary">{t('zone', 'header')}</span>
          </div>
        </div>
      )}
    </header>
  );
}

