
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarDetailsModal from '../components/CarDetailsModal';
import ContactModal from '../components/ContactModal';
import CarFilters from '../components/buy-car/CarFilters';
import CarGrid from '../components/buy-car/CarGrid';
import { useCars, Car, CarFilters as FiltersType } from '../hooks/useCars';
import { useCarFilters } from '../hooks/useCarFilters';

const BuyCar = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [filters, setFilters] = useState<FiltersType>({
    make: '',
    model: '',
    transmission: '',
    fuel: '',
    minPrice: 0,
    maxPrice: 5000000,
    year: ''
  });

  const { allCars, loading } = useCars();
  const { filteredCars, brands, models } = useCarFilters(allCars, filters);

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsDetailsModalOpen(true);
  };

  const handleContactSeller = (car: Car) => {
    setSelectedCar(car);
    setIsContactModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <Header />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading cars...</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Browse <span className="text-red-600">Second-hand Cars</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find your perfect vehicle from our curated collection
          </p>
        </div>

        {/* Filters Section */}
        <CarFilters
          filters={filters}
          setFilters={setFilters}
          brands={brands}
          models={models}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filteredCount={filteredCars.length}
          totalCount={allCars.length}
        />

        {/* Cars Grid/List */}
        <CarGrid
          cars={filteredCars}
          viewMode={viewMode}
          onViewDetails={handleViewDetails}
          onContactSeller={handleContactSeller}
        />
      </div>

      <Footer />

      {/* Modals */}
      <CarDetailsModal 
        car={selectedCar}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />
      
      <ContactModal 
        car={selectedCar}
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default BuyCar;
