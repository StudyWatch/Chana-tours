import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityWidget from './components/AccessibilityWidget';

import Hero from './sections/Hero';
import AboutGuide from './sections/AboutGuide';
import Highlights from './sections/Highlights';
import Tours from './sections/Tours';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutGuide />
              <Tours />
              <Highlights />
              <Gallery />
              <Testimonials />
              <Contact />
            </>
          }
        />
      </Routes>

      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
