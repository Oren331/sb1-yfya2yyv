import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?auto=format&fit=crop&q=80"
              alt="עורך וידאו"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">קצת עליי</h2>
            <p className="text-lg text-gray-600 mb-6">
              ש עורך וידאו מקצועי עם ניסיון של 15 שנה בתחום. אני מתמחה בעריכת וידאו לאירועים, סרטי תדמית\ופרסומות.
              הסטודיו שלי ממוקם בצפון הארץ, ואני עובד עם לקוחות מכל רחבי הארץ.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              אני מאמין שכל פרויקט הוא ייחודי ודורש גישה אישית ומקצועית. אני משקיע את כל כולי בכל פרויקט כדי להבטיח את שביעות רצון הלקוח.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-blue-600">15+</span>
                <span className="text-gray-600">שנות ניסיון</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="block text-3xl font-bold text-blue-600">200+</span>
                <span className="text-gray-600">פרויקטים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}