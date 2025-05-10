import React from 'react';
import { FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#3B7C66] to-[#2c3e50] text-white py-12 px-6 font-['Assistant']">
      <div className="w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        {/* עמודת מידע כללי */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-[#b9fbc0]">חנה מדריכת טיולים</h3>
          <p className="text-sm leading-relaxed">
            סיורים חווייתיים ובלתי נשכחים בארץ ובחו"ל – עם לב, הקשבה, ידע ואהבה אמיתית למקום ולאנשים.
          </p>
        </div>

        {/* עמודת פרטים */}
        <div>
          <h4 className="text-lg font-semibold mb-2">פרטים שימושיים</h4>
          <ul className="text-sm space-y-1 leading-relaxed">
            <li>🕰 זמינות: א׳–ה׳, 9:00–18:00</li>
            <li>📍 אזורי סיור: שדרות, הנגב, ירושלים, צפון איטליה</li>
            <li>✉️ <a href="mailto:your@email.com" className="underline hover:text-turquoise">שלחו מייל</a></li>
          </ul>
        </div>

        {/* עמודת רשתות */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h4 className="text-lg font-semibold">נשארים בקשר</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://wa.me/9725XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition shadow-lg"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-lg"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:your@email.com"
              className="bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-full transition shadow-lg"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xs text-center text-white/70">
        © {new Date().getFullYear()} Chana Tours | נבנה באהבה 💚 כל הזכויות שמורות.
      </div>
    </footer>
  );
}
