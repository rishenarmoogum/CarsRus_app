
import React from 'react';
import { X, Calendar, Fuel, Settings, Users, Palette, Phone, User } from 'lucide-react';

interface CarDetailsModalProps {
  car: any;
  isOpen: boolean;
  onClose: () => void;
}

const CarDetailsModal = ({ car, isOpen, onClose }: CarDetailsModalProps) => {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">
            {car.brand} {car.model}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Images Gallery */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Photos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {car.images.map((image: string, index: number) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`${car.brand} ${car.model} - Photo ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Car Details */}
        <div className="p-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vehicle Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">Rs</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="font-semibold text-lg">Rs {car.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-semibold">{car.year}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Fuel className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fuel Type</p>
                    <p className="font-semibold">{car.fuel}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Seats</p>
                    <p className="font-semibold">{car.seats}</p>
                  </div>
                </div>

                {car.color && (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <Palette className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Color</p>
                      <p className="font-semibold">{car.color}</p>
                    </div>
                  </div>
                )}

                {car.mileage && (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-semibold text-xs">KM</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mileage</p>
                      <p className="font-semibold">{car.mileage}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Seller Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Seller Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Seller Name</p>
                    <p className="font-semibold">{car.seller_name}</p>
                  </div>
                </div>

                {car.telephone && (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone Number</p>
                      <p className="font-semibold">{car.telephone}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              {car.description && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{car.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
