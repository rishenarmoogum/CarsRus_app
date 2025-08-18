
import React from 'react';
import { Fuel, Settings, Users, MapPin } from 'lucide-react';
import { Car } from '../../hooks/useCars';

interface CarCardProps {
  car: Car;
  viewMode: 'grid' | 'list';
  onViewDetails: (car: Car) => void;
  onContactSeller: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, viewMode, onViewDetails, onContactSeller }) => {
  return (
    <div className={`group bg-white/80 backdrop-blur-md border border-red-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${viewMode === 'list' ? 'md:flex' : ''}`}>
      {/* Car Image */}
      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className={`object-cover group-hover:scale-110 transition-transform duration-500 ${viewMode === 'list' ? 'w-full h-64 md:h-full' : 'w-full h-64'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            For Sale
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
            {car.year}
          </span>
        </div>
      </div>

      {/* Car Details */}
      <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3 flex flex-col justify-between' : ''}`}>
        <div>
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
            <div className="flex items-center text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{car.location}</span>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <Fuel className="w-5 h-5 text-gray-500 mx-auto mb-1" />
              <span className="text-sm text-gray-600 block">{car.fuel}</span>
            </div>
            <div className="text-center">
              <Settings className="w-5 h-5 text-gray-500 mx-auto mb-1" />
              <span className="text-sm text-gray-600 block">{car.transmission}</span>
            </div>
            <div className="text-center">
              <Users className="w-5 h-5 text-gray-500 mx-auto mb-1" />
              <span className="text-sm text-gray-600 block">{car.seats} Seats</span>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Key Features:</p>
            <div className="flex flex-wrap gap-2">
              {car.features.map((feature, index) => (
                <span key={index} className="bg-red-50 text-red-600 px-2 py-1 rounded-lg text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="space-y-2">
          <button 
            onClick={() => onViewDetails(car)}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            View Details
          </button>
          <button 
            onClick={() => onContactSeller(car)}
            className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
          >
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
