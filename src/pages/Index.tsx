
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
      <FeaturedCars />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
