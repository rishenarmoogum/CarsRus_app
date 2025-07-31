
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/f849771a-7d92-461d-a66f-fa74fe044c53.png" 
                alt="CarsRus Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold text-white">CarsRus</span>
            </Link>
            <p className="text-red-100 leading-relaxed">
              Mauritius' premier automotive marketplace, connecting buyers and sellers with trust and transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-red-500 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-500 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-red-500 rounded-lg hover:bg-white hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-red-100 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/buy-car" className="block text-red-100 hover:text-white transition-colors">
                Buy Car
              </Link>
              <Link to="/sell-car" className="block text-red-100 hover:text-white transition-colors">
                Sell Car
              </Link>
              <Link to="/contact" className="block text-red-100 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
            <div className="space-y-3 text-red-100">
              <div>Car Financing</div>
              <div>Insurance</div>
              <div>Vehicle Inspection</div>
              <div>Trade-In Service</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-300" />
                <span className="text-red-100">Royal Road St Pierre, Mauritius</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-300" />
                <span className="text-red-100">+230 5503 3736</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-300" />
                <span className="text-red-100">carsrus88@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500 mt-12 pt-8 text-center text-red-100">
          <p>&copy; 2024 CarsRus Mauritius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
