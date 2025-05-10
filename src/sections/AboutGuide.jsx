import React from 'react';
import { FaMapMarkedAlt, FaHeart, FaComments, FaUserTie } from 'react-icons/fa';

export default function AboutGuide() {
  const highlights = [
    {
      title: 'אהבה אמיתית למקום',
      description: 'נולדתי וגדלתי בדרום הארץ – כל שביל, שוק, וחורשה מספרים לי סיפור שאני רוצה לחלוק אתכם.',
      icon: <FaHeart className="text-rose-500 text-3xl" />,
    },
    {
      title: 'ניסיון שטח מעשי',
      description: 'מעל 15 שנות הדרכה בשטח – מטיולים עירוניים ועד מסעות בטבע, כולל סיורים בחו"ל עם קבוצות מגוונות.',
      icon: <FaUserTie className="text-amber-600 text-3xl" />,
    },
    {
      title: 'תקשורת בגובה העיניים',
      description: 'עם כל קבוצה אני יוצרת קשר אישי, דינמיקה ייחודית וחוויות שמזכירים לנו למה טיול זה הרבה מעבר לנוף.',
      icon: <FaComments className="text-sky-500 text-3xl" />,
    },
    {
      title: 'התאמה אישית מלאה',
      description: 'אני מאמינה שאין שני טיולים זהים – אני בונה כל מסלול לפי תחומי עניין, קצב הקבוצה והעונה בשנה.',
      icon: <FaMapMarkedAlt className="text-emerald-600 text-3xl" />,
    },
  ];

  return (
    <section id="about" className="px-6 py-24 bg-gradient-to-b from-white to-lightgray dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100" dir="rtl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">עליי כמדריכת טיולים</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          נעים מאוד! אני חנה – מדריכת טיולים עם נשמה. אני מאמינה שכל טיול צריך להיות חוויה רב-חושית: להרגיש את האדמה, להריח את השוק, לשמוע סיפור טוב ולסיים עם חיוך. אם אתם מחפשים טיול שונה – עמוק, אנושי ומחבר – הגעתם למקום הנכון.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
