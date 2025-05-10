import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'בית', href: '/#hero' },
    { label: 'אודות חנה', href: '/#about' },
    { label: 'סיורים', href: '/#tours' },
    { label: 'גלריה', href: '/#gallery' },
    { label: 'המלצות', href: '/#testimonials' },
    { label: 'יצירת קשר', href: '/#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm transition font-['Assistant']">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* לוגו */}
        <h1 className="text-2xl font-bold text-navy dark:text-[#b9fbc0]">
          <Link to="/">
            Chana<span className="text-turquoise">.Tours</span>
          </Link>
        </h1>

        {/* ניווט בדסקטופ */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800 dark:text-gray-100">
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={link.href}
              className="hover:text-turquoise transition"
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* מצב כהה + כפתור תפריט */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            title="החלף מצב כהה"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-300" />}
          </button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="פתח תפריט"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* תפריט נייד */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-center py-6 shadow-inner">
          <ul className="space-y-4 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <HashLink
                  smooth
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 dark:text-gray-200 hover:text-turquoise transition"
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
