import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">צור קשר</h2>
          <p className="text-xl text-gray-600">אשמח לשמוע על הפרויקט שלך</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">טלפון</h3>
                <p className="text-gray-600">054-1234567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">אימייל</h3>
                <p className="text-gray-600">dani@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">כתובת הסטודיו</h3>
                <p className="text-gray-600">רחוב הראשונים 1, כרמיאל</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700"
            >
              שלח הודעה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}