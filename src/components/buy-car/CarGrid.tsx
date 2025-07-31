
import React from 'react';
import CarCard from './CarCard';
import { Car } from '../../hooks/useCars';

interface CarGridProps {
  cars: Car[];
  viewMode: 'grid' | 'list';
  onViewDetails: (car: Car) => void;
  onContactSeller: (car: Car) => void;
}

const CarGrid: React.FC<CarGridProps> = ({ cars, viewMode, onViewDetails, onContactSeller }) => {
  if (cars.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">No cars found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results</p>
      </div>
    );
  }

  return (
    <div className={`${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}`}>
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          viewMode={viewMode}
          onViewDetails={onViewDetails}
          onContactSeller={onContactSeller}
        />
      ))}
    </div>
  );
};

export default CarGrid;
