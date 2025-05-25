import React, { useState } from 'react';

export default function AccessibilityWidget() {
  const [visible, setVisible] = useState(false);
  const [fontSize, setFontSize] = useState('100');

  const applyFontSize = (size) => {
    const html = document.documentElement;
    html.classList.remove('text-size-100', 'text-size-150', 'text-size-200');
    html.classList.add(`text-size-${size}`);
    setFontSize(size);
  };

  const toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
  };

  const highlightLinks = () => {
    document.body.classList.toggle('highlight-links');
  };

  const resetAccessibility = () => {
    const html = document.documentElement;
    document.body.classList.remove('high-contrast', 'highlight-links');
    html.classList.remove('text-size-100', 'text-size-150', 'text-size-200');
    setFontSize('100');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-['Assistant'] text-right">
      <button
        onClick={() => setVisible(!visible)}
        aria-label="כפתור נגישות"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring"
      >
        ♿
      </button>

      {visible && (
        <div className="mt-2 bg-white dark:bg-gray-800 text-sm rounded-xl shadow-xl p-4 w-56 space-y-2 border border-gray-300 dark:border-gray-600">
          <div>
            <p className="font-semibold mb-1">גודל טקסט:</p>
            <div className="flex gap-2">
              <button
                onClick={() => applyFontSize('100')}
                className={`w-full px-2 py-1 rounded ${fontSize === '100' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                רגיל
              </button>
              <button
                onClick={() => applyFontSize('150')}
                className={`w-full px-2 py-1 rounded ${fontSize === '150' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                +50%
              </button>
              <button
                onClick={() => applyFontSize('200')}
                className={`w-full px-2 py-1 rounded ${fontSize === '200' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                +100%
              </button>
            </div>
          </div>

          <button
            onClick={toggleContrast}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            ניגודיות גבוהה
          </button>

          <button
            onClick={highlightLinks}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            הדגשת קישורים
          </button>

          <button
            onClick={resetAccessibility}
            className="w-full px-3 py-2 bg-red-100 dark:bg-red-800 text-red-700 dark:text-white rounded hover:bg-red-200 dark:hover:bg-red-700"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
}
