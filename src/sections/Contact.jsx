import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaPaperPlane,
  FaClipboardCheck,
  FaQuestionCircle,
} from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('contactForm'));
    if (saved) setFormData(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem('contactForm', JSON.stringify(updated));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSent(true);
        localStorage.removeItem('contactForm');
        setFormData({ name: '', email: '', message: '', subject: '' });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => alert('משהו השתבש, נסו שוב או פנו ישירות במייל.'));
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 bg-gradient-to-b from-white to-lightgray dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
      dir="rtl"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">יצירת קשר</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          רוצים להזמין סיור? לשאול שאלה? אנחנו כאן לכל דבר 💬
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-right">
          <div className="relative shadow-sm">
            <FaUser className="absolute top-3 right-3 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pr-10 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>

          <div className="relative shadow-sm">
            <FaEnvelope className="absolute top-3 right-3 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="אימייל לחזרה"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pr-10 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>

          <div className="relative shadow-sm">
            <FaQuestionCircle className="absolute top-3 right-3 text-gray-500" />
            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full pr-10 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-turquoise"
            >
              <option value="">בחרו נושא הפנייה</option>
              <option value="סיור פרטי">בקשה לסיור פרטי</option>
              <option value="שאלה כללית">שאלה כללית</option>
              <option value="המלצה או הערה">המלצה / הערה</option>
            </select>
          </div>

          <div className="relative shadow-sm">
            <FaCommentDots className="absolute top-3 right-3 text-gray-500" />
            <textarea
              name="message"
              rows="5"
              placeholder="ההודעה שלכם..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full pr-10 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-navy text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-turquoise transition shadow-md"
            title="שלח הודעה"
          >
            {sent ? <FaClipboardCheck /> : <FaPaperPlane />}
            {sent ? 'ההודעה נשלחה 🎉' : 'שלח הודעה'}
          </button>

          {sent && (
            <p className="text-center text-sm text-green-500 mt-4">
              ✅ תודה! ההודעה נשלחה, נחזור אליכם תוך 24 שעות.
            </p>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            אנחנו מתחייבים למענה אישי תוך 24 שעות בימי עסקים.
          </p>
        </form>
      </div>
    </section>
  );
}
