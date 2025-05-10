import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'דנה לוי',
    role: 'מטיילת מירושלים',
    quote: 'סיור מרגש ומלא השראה...',
    full: 'סיור מרגש, חם ואישי. חנה שילבה ידע, הומור והכלה – פשוט נפלא.',
    stars: 5,
    avatar: '/avatars/dana.jpg',
  },
  {
    name: 'משפחת כהן',
    role: 'טיול משפחתי בצפון',
    quote: 'חוויה נהדרת לילדים ולמבוגרים...',
    full: 'הילדים נהנו, אנחנו למדנו – חנה מדהימה.',
    stars: 5,
    avatar: '/avatars/cohen.jpg',
  },
  {
    name: 'רונית שפירא',
    role: 'תיירת מצרפת',
    quote: 'ישראל נראית אחרת דרך חנה...',
    full: 'סיפורים, אוכל, הקשבה – הרגשתי בבית.',
    stars: 4,
    avatar: '/avatars/ronit.jpg',
  },
  {
    name: 'נועם ר.',
    role: 'סיור תלמידים',
    quote: 'היה מעניין, מצחיק ולא משעמם!',
    full: 'חנה יודעת לדבר בשפה שלנו. אפילו אני הקשבתי!',
    stars: 5,
    avatar: '/avatars/noam.jpg',
  },
  {
    name: 'איילת גולן',
    role: 'טיול בנות',
    quote: 'היה כיף, טעים ומרגש!',
    full: 'חנה יצרה קשר אישי עם כולן, זה היה מושלם.',
    stars: 5,
    avatar: '/avatars/ayelet.jpg',
  },
  {
    name: 'דני ש.',
    role: 'סיור בדרום',
    quote: 'חוויה שונה מכל מה שציפינו!',
    full: 'סוף סוף מדריכה שמביאה לב, לא רק מידע. ממליץ בחום.',
    stars: 5,
    avatar: '/avatars/default.jpg',
  },
  {
    name: 'תמר ב.',
    role: 'טיול זוגי באיטליה',
    quote: 'מומלץ לכל מי שמחפש עומק ואותנטיות.',
    full: 'קיבלנו הרבה מעבר למה שציפינו. תודה לך חנה!',
    stars: 5,
    avatar: '/avatars/default.jpg',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [pause, setPause] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || pause) return;

    const scrollAmount = container.offsetWidth / 1.1;
    let scrollInterval = setInterval(() => {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const nextScroll = container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: nextScroll >= maxScroll ? 0 : nextScroll,
        behavior: 'smooth',
      });
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [pause]);

  return (
    <section
      id="testimonials"
      className="px-6 py-24 bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-navy dark:text-[#b9fbc0]">
          המלצות מטיילים
        </h2>

        <div
          ref={containerRef}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          onTouchStart={() => setPause(true)}
          onTouchEnd={() => setPause(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2 md:px-0 scroll-smooth no-scrollbar"
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(item)}
              className="min-w-[300px] max-w-sm bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl snap-center flex-shrink-0 hover:scale-[1.05] transition duration-300 text-right text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 relative"
            >
              <div className="absolute top-3 left-3 text-yellow-400 text-sm">
                {[...Array(item.stars)].map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <div className="flex justify-start mb-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover shadow border-2 border-white dark:border-gray-600"
                />
              </div>
              <p className="italic text-sm mb-4 leading-relaxed">“{item.quote}”</p>
              <h4 className="text-lg font-bold text-navy">{item.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.role}</p>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-md w-full text-right relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 left-3 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setSelected(null)}
              aria-label="סגור"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selected.avatar}
                alt={selected.name}
                className="w-14 h-14 rounded-full object-cover border border-gray-200 dark:border-gray-700"
              />
              <div>
                <h4 className="text-lg font-semibold text-navy">{selected.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{selected.role}</p>
              </div>
            </div>
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              {selected.full}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
