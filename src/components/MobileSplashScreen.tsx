
import React, { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

const MobileSplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Allow fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-50 to-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-pulse mb-4">
          <Car size={64} className="text-red-600 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">CarsRus</h1>
        <p className="text-gray-600">Mauritius Car Marketplace</p>
      </div>
    </div>
  );
};

export default MobileSplashScreen;
