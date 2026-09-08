/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Contact from './pages/Contact';
import { LanguageProvider } from './i18n';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <LanguageProvider>
      <div className="bg-background font-body-md text-body-md text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed flex-grow flex flex-col">
        <Header currentPage={page} setPage={setPage} />
        <main className="flex-grow pt-20">
          {page === 'home' && <Home setPage={setPage} />}
          {page === 'about' && <About />}
          {page === 'capabilities' && <Capabilities />}
          {page === 'contact' && <Contact />}
        </main>
        <Footer setPage={setPage} />
      </div>
    </LanguageProvider>
  );
}
