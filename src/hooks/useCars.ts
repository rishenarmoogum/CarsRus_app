
import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';

export interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
  year: number;
  transmission: string;
  fuel: string;
  mileage: string;
  seats: number;
  location: string;
  images: string[];
  features: string[];
  description: string;
  color: string;
  telephone: string;
  seller_name: string;
  seller_email: string;
  featured?: boolean;
  monthly_lease?: number;
  upload?: boolean;
}

export interface CarFilters {
  make: string;
  model: string;
  transmission: string;
  fuel: string;
  minPrice: number;
  maxPrice: number;
  year: string;
}

export const useCars = () => {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        setLoading(true);
        // Get cars ordered by featured first, then by creation date (newest first)
        // Only show cars where upload is true
        const { data: cars, error: carsError } = await supabase
          .from('cars')
          .select('*')
          .eq('upload', true)
          .order('featured', { ascending: false })
          .order('created_at', { ascending: false });

        if (carsError) {
          console.error('Error fetching cars:', carsError);
          return;
        }

        // Then get profiles for each car
        const carsWithProfiles = await Promise.all(
          cars.map(async (car) => {
            const { data: profile } = await supabase
              .from('profiles')
              .select('full_name, email')
              .eq('id', car.user_id)
              .single();

            return {
              id: car.id,
              brand: car.make,
              model: car.model,
              price: car.price,
              year: car.year,
              transmission: car.transmission || 'Automatic',
              fuel: car.fuel || 'Petrol',
              mileage: car.mileage ? `${car.mileage} km` : 'N/A',
              seats: car.seats || 5,
              location: 'Mauritius',
              images: car.images && car.images.length > 0 ? car.images : ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
              features: ['Contact Seller'],
              description: car.description || '',
              color: car.color || '',
              telephone: car.telephone || '',
              seller_name: profile?.full_name || 'Unknown Seller',
              seller_email: profile?.email || '',
              featured: car.featured || false,
              monthly_lease: car.monthly_lease || 0
            };
          })
        );

        setAllCars(carsWithProfiles);
      } catch (error) {
        console.error('Error loading cars:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  return { allCars, loading };
};
