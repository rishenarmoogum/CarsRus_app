
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Car, PlusCircle, Phone, User } from 'lucide-react';

const MobileNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/buy-car', icon: Car, label: 'Buy' },
    { path: '/sell-car', icon: PlusCircle, label: 'Sell' },
    { path: '/contact', icon: Phone, label: 'Contact' },
    { path: '/login', icon: User, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              location.pathname === path
                ? 'text-red-600 bg-red-50'
                : 'text-gray-600'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
