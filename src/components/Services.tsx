import React from 'react';
import { Video, Camera, Film, Presentation, Clapperboard, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: 'צילום אירועים',
      description: 'צילום מקצועי של חתונות, בר מצוות ואירועים מיוחדים'
    },
    {
      icon: <Film className="h-8 w-8 text-blue-600" />,
      title: 'סרטי תדמית',
      description: 'סרטי תדמית איכותיים לעסקים וארגונים'
    },
    {
      icon: <Presentation className="h-8 w-8 text-blue-600" />,
      title: 'פרסומות',
      description: 'עריכת פרסומות מקצועית לטלוויזיה ולדיגיטל'
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: 'תוכן לרשתות חברתיות',
      description: 'עריכת תוכן וידאו אטרקטיבי לרשתות החברתיות'
    }
  ];

  return (
    <section id="services" className="py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">השירותים שלי</h2>
          <p className="text-xl text-gray-600">מגוון שירותי צילום ועריכת וידאו מקצועיים</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}