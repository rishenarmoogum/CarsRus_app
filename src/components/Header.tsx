
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/buy-car', label: 'Buy Car' },
    { path: '/sell-car', label: 'Sell Car' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-red-100 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/f849771a-7d92-461d-a66f-fa74fe044c53.png" 
              alt="CarsRus Logo" 
              className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-red-600">CarsRus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive(link.path)
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* User Profile or Login Button */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Profile</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="text-sm text-gray-600">
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-red-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive(link.path)
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {user ? (
                <>
                  <div className="px-4 py-2 text-sm text-gray-600 border-t border-red-200">
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
