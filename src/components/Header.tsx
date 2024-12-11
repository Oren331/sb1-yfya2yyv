import React, { useState } from 'react';
import { Video, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#portfolio', label: 'תיק עבודות' },
    { href: '#services', label: 'שירותים' },
    { href: '#pricing', label: 'מחירים' },
    { href: '#about', label: 'אודות' },
    { href: '#contact', label: 'צור קשר' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Video className="h-8 w-8 text-blue-600" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              התחל פרויקט
            </button>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t mt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                התחל פרויקט
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}