import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaLink } from 'react-icons/fa';

import eatsderot1 from '../assets/eatsderot.jpg';
import eatsderot2 from '../assets/otef.jpg';
import otef1 from '../assets/otef.jpg';
import otef2 from '../assets/eatsderot.jpg';
import abroad1 from '../assets/abroad.jpg';
import abroad2 from '../assets/otef.jpg';

const tours = [
  {
    title: 'סיור אוכל ותרבות בשדרות',
    images: [eatsderot1, eatsderot2],
    description: 'מסע טעים בלב הדרום עם מפגש אישי ואותנטי.',
    duration: 'כ-4 שעות',
    price: '₪180 למשתתף',
    badge: 'נותרו מקומות אחרונים!',
    details: 'נטעם מאפים מקומיים, נבקר בגרפיטי השכונתי ונשמע סיפורים אותנטיים מהעיר.',
    link: '#tour1',
  },
  {
    title: 'שדרות – בעקבות המלחמה',
    images: [otef1, otef2],
    description: 'סיור עוצמתי בעקבות השביעי באוקטובר.',
    duration: 'כ-3 שעות',
    price: '₪150 למשתתף',
    badge: 'סיור מבוקש 🔥',
    details: 'נבקר נקודות מפתח בעיר, נשמע עדויות ונחווה שיח מרגש על חוסן והתמודדות.',
    link: '#tour2',
  },
  {
    title: 'טיול מודרך לצפון איטליה',
    images: [abroad1, abroad2],
    description: 'טיולים, תרבות, אוכל והדרכה חמה בעברית.',
    duration: '7 ימים / 6 לילות',
    price: '$2000 לאדם (כולל טיסות והדרכה)',
    badge: '10% הנחה השבוע בלבד!',
    details: 'כולל לינה איכותית, העברות, הדרכה מקצועית וארוחות קלות. מתאים לזוגות ומשפחות.',
    link: '#tour3',
  },
];

export default function Tours() {
  const [activeModal, setActiveModal] = useState(null);
  const [imageIndexes, setImageIndexes] = useState(tours.map(() => 0));
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((index, i) => (index + 1) % tours[i].images.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const copyLink = (i) => {
    navigator.clipboard.writeText(window.location.href.split('#')[0] + tours[i].link);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="tours"
      className="relative px-4 sm:px-6 py-20 overflow-hidden bg-lightgray dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-['Assistant']"
      dir="rtl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-turquoise via-white to-transparent dark:from-[#3B7C66] dark:via-gray-800" />

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-navy dark:text-[#b9fbc0]">הסיורים שלי</h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {tours.map((tour, i) => (
            <motion.div
              key={i}
              id={tour.link.replace('#', '')}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 max-w-md mx-auto rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative"
            >
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {tour.badge}
              </div>
              <div className="relative h-56 overflow-hidden group">
                <motion.img
                  key={tour.images[imageIndexes[i]]}
                  src={tour.images[imageIndexes[i]]}
                  alt={tour.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium">
                  ✨ חוויה בלתי נשכחת
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {tour.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ⏱️ {tour.duration} | 💰 {tour.price}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4 justify-center">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 bg-[#3B7C66] text-white rounded-full hover:bg-[#2c5f51] transition font-medium shadow"
                  >
                    שריינו מקום עכשיו
                  </a>
                  <button
                    onClick={() => setActiveModal(i)}
                    className="px-5 py-2.5 border border-[#3B7C66] text-[#3B7C66] rounded-full hover:bg-[#3B7C66] hover:text-white transition font-medium"
                  >
                    פרטים נוספים
                  </button>
                  <button
                    onClick={() => copyLink(i)}
                    className="flex items-center gap-1 px-4 py-2 border text-sm text-gray-600 dark:text-gray-300 rounded hover:text-[#3B7C66]"
                    title="העתק קישור"
                  >
                    <FaLink className="text-sm" /> העתק קישור
                  </button>
                </div>
                {copiedIndex === i && (
                  <p className="text-green-600 text-xs mt-2">📎 הקישור הועתק!</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeModal !== null && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md mx-4 text-right shadow-xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 left-3 text-gray-400 hover:text-red-500 text-xl"
                >
                  ×
                </button>
                <h4 className="text-xl font-bold mb-3 text-navy dark:text-white">עוד על הסיור</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {tours[activeModal].details}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 flex justify-center gap-6">
          <a
            href="https://wa.me/9725XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center gap-2 text-sm shadow-lg"
          >
            <FaWhatsapp className="text-lg" /> וואטסאפ
          </a>
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full flex items-center gap-2 text-sm shadow-lg"
          >
            <FaFacebookF className="text-lg" /> פייסבוק
          </a>
        </div>
      </motion.div>
    </section>
  );
}
