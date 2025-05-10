import React from 'react';
import {
  FaHiking,
  FaLandmark,
  FaLeaf,
  FaPeopleCarry,
  FaCameraRetro,
  FaRoute,
  FaStar,
  FaMapSigns,
} from 'react-icons/fa';

export default function Highlights() {
  const highlights = [
    { name: 'טיולים רגליים בטבע', icon: <FaHiking className="text-green-600 text-4xl" /> },
    { name: 'היסטוריה ואתרים קדושים', icon: <FaLandmark className="text-yellow-700 text-4xl" /> },
    { name: 'סיורי טבע ופריחה', icon: <FaLeaf className="text-emerald-500 text-4xl" /> },
    { name: 'קבוצות ומשפחות', icon: <FaPeopleCarry className="text-blue-500 text-4xl" /> },
    { name: 'מסלולים מצולמים', icon: <FaCameraRetro className="text-pink-500 text-4xl" /> },
    { name: 'סיורים מודרכים בעברית / אנגלית / צרפתית', icon: <FaMapSigns className="text-indigo-400 text-4xl" /> },
    { name: 'מסלולים בהתאמה אישית', icon: <FaRoute className="text-cyan-500 text-4xl" /> },
    { name: 'יחס אישי ומקצועיות', icon: <FaStar className="text-yellow-500 text-4xl" /> },
  ];

  return (
    <section id="highlights" className="px-6 py-24 bg-gradient-to-b from-white to-lightgray dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">מה תמצאו בסיורים שלי?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          חנה מציעה סיורים עשירים בתוכן וחוויה – שמשלבים בין טבע, תרבות, היסטוריה ואנשים.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transform hover:-translate-y-1 transition text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}