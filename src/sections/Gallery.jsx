import React from 'react';

const galleryItems = [
  {
    title: 'סיור אוכל בשדרות',
    image: '/gallery/eatsderot.jpg',
    caption: 'טעמים וסיפורים משדרות – תרבות קולינרית בדרום',
  },
  {
    title: 'בעקבות השביעי באוקטובר',
    image: '/gallery/otef.jpg',
    caption: 'מסע רגשי בעקבות חוסן והתמודדות בעוטף',
  },
  {
    title: 'אגם גארדה וסרמיונה',
    image: '/gallery/italy.jpg',
    caption: 'נופים קסומים בצפון איטליה והדרכה חמה בעברית',
  },
  {
    title: 'מפגש עם מקומיים',
    image: '/gallery/locals.jpg',
    caption: 'הפנים שמאחורי הסיפורים – קשרים אישיים ומרגשים',
  },
  {
    title: 'הדרכה בעברית עם חיוך',
    image: '/gallery/guide.jpg',
    caption: 'ליווי צמוד, הסברים מרתקים ויחס חם לכל משתתף',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">גלריית הסיורים</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          הצצה לרגעים הבלתי נשכחים מהסיורים – טעמים, מפגשים, נופים וסיפורים שנשארים בלב.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-4">
                <p className="text-white text-sm leading-relaxed">{item.caption}</p>
              </div>
              <div className="mt-3 text-navy font-semibold text-lg">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
