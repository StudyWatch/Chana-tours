import React from 'react';

const galleryItems = [
  { title: 'סיור בפריז', image: '/gallery/abroad.jpg', caption: 'טיול חווייתי עם קבוצה במרכז פריז' },
  { title: 'הופעה בחו"ל', image: '/gallery/abroad2.jpg', caption: 'חוויה תרבותית תחת כיפת השמיים' },
  { title: 'טיול קבוצתי בחו"ל', image: '/gallery/abroad3.jpg', caption: 'קבוצה מגובשת בסיור פתוח בטבע' },
  { title: 'תיעוד המלחמה', image: '/gallery/accordingwar.jpg', caption: 'אומנות קיר בזמנים קשים' },
  { title: 'קיר הנצחה', image: '/gallery/accordingwar2.jpg', caption: 'מסר של תקווה ואחדות' },
  { title: 'המרחב הציבורי אחרי', image: '/gallery/accordingwar3.jpg', caption: 'רחוב לאחר המלחמה' },
  { title: 'אתר זיכרון', image: '/gallery/accordingwar4.jpg', caption: 'עמוד זיכרון באיזור הדרום' },
  { title: 'חיבור דרך אוכל', image: '/gallery/accordingwarandfood.jpg', caption: 'אוכל מקומי כחלק מהתמודדות' },
  { title: 'קבלת עזרה', image: '/gallery/accordingwarandfood2.jpg', caption: 'פעילות קהילתית בעוטף' },
  { title: 'תהלוכה קהילתית', image: '/gallery/album.jpg', caption: 'שמחה באירוע מקומי' },
  { title: 'אוכל שדרותי', image: '/gallery/eatsderot.jpg', caption: 'מאפים ומאכלים מקומיים משדרות' },
  { title: 'מנות אוכל', image: '/gallery/food2.jpg', caption: 'מנה אותנטית מדרום הארץ' },
  { title: 'ארוחה מסורתית', image: '/gallery/food3.jpg', caption: 'מאכלים מהמטבח הדרומי' },
  { title: 'שולחן שפע', image: '/gallery/food4.jpg', caption: 'שולחן מלא בטעמים מקומיים' },
  { title: 'מרק מקומי', image: '/gallery/food5.jpg', caption: 'טעם ביתי במרק מסורתי' },
  { title: 'שולחן משותף', image: '/gallery/food6.jpg', caption: 'אוכל כגשר בין אנשים' },
  { title: 'ארוחה באירוח קבוצתי', image: '/gallery/food7.jpg', caption: 'מזון, שיח וצחוק' },
  { title: 'קבב ואורז', image: '/gallery/food8.jpg', caption: 'מנת אוכל חם מהלב' },
  { title: 'קובה מסורתית', image: '/gallery/food9.jpg', caption: 'מאכלי עדות בסיור' },
  { title: 'קבוצת משתתפים', image: '/gallery/food10.jpg', caption: 'בישול ושיתוף פעולה' },
  { title: 'במטבח הקהילתי', image: '/gallery/food11.jpg', caption: 'סיור משולב עם חווית בישול' },
  { title: 'מטיילות מבשלות', image: '/gallery/food12.jpg', caption: 'סיור בנות בטעם ביתי' },
  { title: 'מאכלים לחג', image: '/gallery/food13.jpg', caption: 'בישול קהילתי לכבוד חג' },
  { title: 'סיור בעוטף', image: '/gallery/otef.jpg', caption: 'חיבור לאדמה ולסיפור המקומי' },
  { title: 'אנדרטת זיכרון', image: '/gallery/otef1.jpg', caption: 'ציון כאב והתגברות בעוטף' },
  { title: 'הדרכה עם רמקול', image: '/gallery/otef2.jpg', caption: 'סיור מונחה בשטח' },
  { title: 'תצפית על העוטף', image: '/gallery/otef3.jpg', caption: 'מבט פנורמי מהשטח' },
  { title: 'סיור בשדרות', image: '/gallery/sderot2.jpg', caption: 'סיור בין בתים וקהילות' },
  { title: 'סיור בחב"ד 770', image: '/gallery/sderot.jpg', caption: 'ביקור במבנה איקוני' },
  { title: 'שולחן קבלת פנים', image: '/gallery/accordingwar5.jpg', caption: 'אירוח חמים בסיום סיור' }
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
