import React from 'react';
import { Play } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'סרט תדמית - מלון גליל',
      thumbnail: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
      category: 'סרטי תדמית'
    },
    {
      title: 'קליפ חתונה - דנה ורון',
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
      category: 'אירועים'
    },
    {
      title: 'פרסומת - רשת מסעדות צפון',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
      category: 'פרסומות'
    },
    {
      title: 'סרט תדמית - חברת הייטק',
      thumbnail: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80',
      category: 'סרטי תדמית'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">תיק עבודות</h2>
          <p className="text-xl text-gray-600">הפרויקטים האחרונים שלי</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <span className="text-blue-400 text-sm mb-2 block">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <button className="flex items-center text-white hover:text-blue-400">
                    <Play className="h-5 w-5 ml-2" />
                    צפה בוידאו
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}