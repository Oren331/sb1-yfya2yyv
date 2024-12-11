import React from 'react';
import { Wand2, Layers, Zap, Cloud, Share2, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Wand2 className="h-8 w-8 text-blue-600" />,
      title: 'עריכה אוטומטית',
      description: 'מערכת AI חכמה שמייעלת את תהליך העריכה'
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-600" />,
      title: 'אפקטים מתקדמים',
      description: 'מאות אפקטים ומעברים מקצועיים'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'מהירות מירבית',
      description: 'עריכה מהירה ללא תקיעות או השהיות'
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: 'גיבוי בענן',
      description: 'שמירה אוטומטית של הפרויקטים בענן'
    },
    {
      icon: <Share2 className="h-8 w-8 text-blue-600" />,
      title: 'שיתוף קל',
      description: 'ייצוא ושיתוף ישיר לכל הפלטפורמות'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'אבטחה מתקדמת',
      description: 'הגנה מלאה על התוכן שלך'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-600">הכלים המתקדמים ביותר לעריכת וידאו מקצועית</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}