
import React from 'react';
import { Fuel, Settings, Users } from 'lucide-react';
import { Car } from '../../hooks/useCars';

interface FeaturedCarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

const FeaturedCarCard: React.FC<FeaturedCarCardProps> = ({ car, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-red-100">
      {/* Car Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.featured ? 'Featured' : 'Available'}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
            {car.year}
          </span>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {car.brand} {car.model}
          </h3>
          <p className="text-3xl font-bold text-red-600">
            Rs {car.price.toLocaleString()}
          </p>
          {car.monthly_lease && (
            <p className="text-lg font-semibold text-blue-600 mt-1">
              Monthly Lease - Rs {car.monthly_lease.toLocaleString()}
            </p>
          )}
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Fuel className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-sm text-gray-600">{car.fuel}</span>
          </div>
          <div className="text-center">
            <Settings className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-sm text-gray-600">{car.transmission}</span>
          </div>
          <div className="text-center">
            <Users className="w-5 h-5 text-red-500 mx-auto mb-1" />
            <span className="text-sm text-gray-600">{car.seats} Seats</span>
          </div>
        </div>

        {/* Contact Button */}
        <button 
          onClick={() => onViewDetails(car)}
          className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarCard;
