
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CarDetailsModal from './CarDetailsModal';
import FeaturedCarCard from './featured-cars/FeaturedCarCard';
import { useFeaturedCars } from '../hooks/useFeaturedCars';
import { Car } from '../hooks/useCars';

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const { allCars } = useFeaturedCars();

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsDetailsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Featured <span className="text-red-600">Second-hand Cars</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of the finest vehicles available in Mauritius
            </p>
          </div>

          {/* Cars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {allCars.slice(0, 6).map((car) => (
              <FeaturedCarCard
                key={car.id}
                car={car}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/buy-car"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-red-200 text-red-600 rounded-2xl font-semibold hover:bg-red-50 hover:border-red-300 transition-all duration-300 group"
            >
              Browse All Cars
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Car Details Modal */}
      <CarDetailsModal 
        car={selectedCar}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />
    </>
  );
};

export default FeaturedCars;
