import React from 'react';
import { Play, Star, Award, Users, Clock } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-blue-100">זוכה פרס העורך המצטיין 2023</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">הופכים רעיונות לסיפורים ויזואליים מרהיבים</h1>
            <p className="text-xl mb-8 text-blue-100">
              15 שנות ניסיון בעריכת וידאו מקצועית, מומחיות באירועים, פרסומות וסרטי תדמית. 
              יוצר תוכן שמספר את הסיפור שלך בצורה הטובה ביותר.
            </p>
            <div className="flex space-x-4 space-x-reverse mb-12">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                צפה בעבודות שלי
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center">
                <Play className="ml-2 h-5 w-5" />
                סרט תדמית
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Users className="h-6 w-6 text-blue-300" />
                <div>
                  <p className="font-bold text-2xl">200+</p>
                  <p className="text-blue-100">לקוחות מרוצים</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="h-6 w-6 text-blue-300" />
                <div>
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-blue-100">שנות ניסיון</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80"
              alt="עריכת וידאו מקצועית"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
              </div>
              <p className="mt-1 font-bold">דירוג 5.0 ב-Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}