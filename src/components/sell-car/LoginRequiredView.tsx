
import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginRequiredView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
      <Card className="max-w-md p-8 text-center bg-white border-red-200">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
        <p className="text-gray-600 mb-6">
          You need to be logged in to sell your car. Please sign in or create an account to continue.
        </p>
        <Link to="/login">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Go to Login
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default LoginRequiredView;
