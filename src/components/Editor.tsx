import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Scissors, Plus } from 'lucide-react';

export function Editor() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg" dir="rtl">
      <div className="aspect-video bg-black rounded-lg mb-4">
        {/* Video Preview Area */}
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">טען קובץ וידאו להתחלת העריכה</p>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4 space-x-reverse mb-6">
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
          <SkipBack className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
          <Play className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
          <SkipForward className="h-5 w-5" />
        </button>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-bold">ציר זמן</h3>
          <div className="flex space-x-2 space-x-reverse">
            <button className="p-2 rounded bg-gray-700 hover:bg-gray-600 text-white">
              <Scissors className="h-4 w-4" />
            </button>
            <button className="p-2 rounded bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="h-24 bg-gray-700 rounded relative">
          {/* Timeline will be implemented here */}
        </div>
      </div>
    </div>
  );
}