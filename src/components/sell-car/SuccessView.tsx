
import React from 'react';
import { Card } from '../ui/card';
import { CheckCircle } from 'lucide-react';

const SuccessView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md p-8 text-center bg-white border-red-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Success!</h2>
        <p className="text-gray-600 mb-6">
          Your car has been listed successfully! Redirecting to home page...
        </p>
      </Card>
    </div>
  );
};

export default SuccessView;
