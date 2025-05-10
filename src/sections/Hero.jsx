import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative h-[95vh] flex items-center justify-center text-white text-center font-['Assistant'] overflow-hidden"
      dir="rtl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* וידאו רקע */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-tour.mp4" type="video/mp4" />
        הדפדפן שלך לא תומך בווידאו.
      </video>

      {/* שכבת צבע כהה */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#3B7C66]/80 z-0" />

      {/* תוכן מונפש */}
      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#b9fbc0] drop-shadow-lg">
          חנה.טיולים – מסע שישאיר חותם בלב
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium text-white/90 drop-shadow">
          טיולים חווייתיים עם נשמה, הדרכה מקצועית ומפגש אנושי עמוק.
        </p>
        <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
          חו"ל, ישראל, קבוצות פרטיות או סיורי תרבות – כל מסע נבנה בהתאמה אישית.
        </p>
        <div className="mt-10 flex justify-center flex-wrap gap-4">
          <a
            href="#tours"
            className="px-6 py-3 bg-[#fefae0] text-[#3B7C66] font-semibold rounded-full shadow hover:bg-[#e9edc9] transition"
          >
            צאו למסע
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#3B7C66] transition"
          >
            דברו איתי
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
