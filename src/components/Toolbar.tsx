import React from 'react';
import { Volume2, Image, Type, Sparkles, Download } from 'lucide-react';

export function Toolbar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm" dir="rtl">
      <h2 className="text-lg font-bold mb-4">כלי עריכה</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          <Volume2 className="h-5 w-5 ml-2 text-blue-600" />
          <span>הוסף שמע</span>
        </button>
        <button className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          <Image className="h-5 w-5 ml-2 text-blue-600" />
          <span>הוסף תמונה</span>
        </button>
        <button className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          <Type className="h-5 w-5 ml-2 text-blue-600" />
          <span>הוסף טקסט</span>
        </button>
        <button className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
          <Sparkles className="h-5 w-5 ml-2 text-blue-600" />
          <span>אפקטים</span>
        </button>
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center">
        <Download className="h-5 w-5 ml-2" />
        <span>ייצא וידאו</span>
      </button>
    </div>
  );
}