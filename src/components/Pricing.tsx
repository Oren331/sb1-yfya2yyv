import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'בסיסי',
      price: '0',
      features: [
        'עריכה בסיסית',
        'ייצוא ב-HD',
        '5 פרויקטים',
        'תמיכה במייל'
      ]
    },
    {
      name: 'מקצועי',
      price: '49',
      features: [
        'כל התכונות הבסיסיות',
        'ייצוא ב-4K',
        'פרויקטים ללא הגבלה',
        'אפקטים מתקדמים',
        'תמיכה בצאט 24/7'
      ],
      popular: true
    },
    {
      name: 'עסקי',
      price: '99',
      features: [
        'כל התכונות המקצועיות',
        'גיבוי בענן',
        'עריכה שיתופית',
        'API גישה',
        'תמיכה VIP'
      ]
    }
  ];

  return (
    <section className="py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">מחירים פשוטים</h2>
          <p className="text-xl text-gray-600">בחר את התוכנית המתאימה לך</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-sm p-8 ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  הכי פופולרי
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₪{plan.price}</span>
                <span className="text-gray-600">/חודש</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-blue-600 ml-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                התחל עכשיו
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}