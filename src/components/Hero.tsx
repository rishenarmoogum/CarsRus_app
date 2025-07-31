
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNiOTFjMWMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Find Your Perfect
                <span className="block text-red-600">Car in Mauritius</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the island's most trusted car marketplace. Buy, sell, and explore premium vehicles with confidence.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">5★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/buy-car"
                className="group px-8 py-4 bg-red-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 text-center"
              >
                <Search className="inline w-5 h-5 mr-2" />
                Browse Cars
              </Link>
              <Link
                to="/sell-car"
                className="px-8 py-4 bg-white border-2 border-red-200 text-red-600 rounded-2xl font-semibold hover:bg-red-50 hover:border-red-300 transition-all duration-300 text-center"
              >
                Sell Your Car
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury car in Mauritius"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-red-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9 Rating</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-gray-900">Trusted by 1000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
