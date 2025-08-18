
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Header />
      <Hero />
      
      {/* WhatsApp Promotion */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white border-2 border-red-500 rounded-lg p-4 text-center shadow-lg max-w-4xl mx-auto">
          <p className="text-sm text-gray-800 font-medium">
            <span className="font-bold text-red-600">SELLER</span> - You want to make your Car appear on Top of our Website. 
            <span className="font-bold text-red-600 ml-2">BUYER</span> - You are looking for a Lease/Loan to buy a car. 
            Please Whatsapp us on <span className="font-bold text-red-600">55033736</span>.
          </p>
        </div>
      </div>
      
      <FeaturedCars />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
