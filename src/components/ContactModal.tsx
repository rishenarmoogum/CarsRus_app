
import React from 'react';
import { X, Phone, User, Mail } from 'lucide-react';

interface ContactModalProps {
  car: any;
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ car, isOpen, onClose }: ContactModalProps) => {
  if (!isOpen || !car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Contact Seller</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Car Image */}
        <div className="p-6">
          <div className="mb-4">
            <img
              src={car.images[0]}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          {/* Car Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {car.brand} {car.model}
            </h3>
            <p className="text-2xl font-bold text-red-600">
              Rs {car.price.toLocaleString()}
            </p>
          </div>

          {/* Seller Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Seller Name</p>
                <p className="font-semibold text-lg">{car.seller_name}</p>
              </div>
            </div>

            {car.telephone && (
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold text-lg">{car.telephone}</p>
                </div>
              </div>
            )}

            {car.seller_email && (
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{car.seller_email}</p>
                </div>
              </div>
            )}

            {/* Combined Contact Info Display */}
            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
              <p className="text-sm text-gray-600 mb-2">Contact Information:</p>
              <p className="font-bold text-lg text-red-700">
                {car.seller_name} - {car.telephone || 'Phone not available'}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
