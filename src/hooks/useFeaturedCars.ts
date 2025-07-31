
import { useState, useEffect } from 'react';
import { supabase } from '../integrations/supabase/client';
import { Car } from './useCars';

export const useFeaturedCars = () => {
  const [allCars, setAllCars] = useState<Car[]>([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        // Load cars from Supabase, ordering by featured first, then by creation date
        // Only show cars where upload is true
        const { data: supabaseCars, error } = await supabase
          .from('cars')
          .select('*')
          .eq('upload', true)
          .order('featured', { ascending: false })
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) {
          console.error('Error fetching cars from Supabase:', error);
        }

        // Get profiles for each car
        const carsWithProfiles = await Promise.all(
          (supabaseCars || []).map(async (car) => {
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
              fuel: car.fuel || 'Petrol',
              transmission: car.transmission || 'Automatic',
              seats: car.seats || 5,
              featured: car.featured,
              images: car.images && car.images.length > 0 ? car.images : ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
              features: ['Contact Seller'],
              description: car.description || '',
              color: car.color || '',
              telephone: car.telephone || '',
              seller_name: profile?.full_name || 'Unknown Seller',
              seller_email: profile?.email || '',
              mileage: car.mileage ? `${car.mileage} km` : 'N/A',
              location: 'Mauritius',
              monthly_lease: car.monthly_lease || 0
            };
          })
        );

        // If we have less than 6 cars from database, fill with static cars
        if (carsWithProfiles.length < 6) {
          const staticFeaturedCars = [
            {
              id: 'static-1',
              brand: 'Toyota',
              model: 'Camry Hybrid',
              price: 1250000,
              year: 2023,
              fuel: 'Hybrid',
              transmission: 'Automatic',
              seats: 5,
              featured: false,
              images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
              features: ['Contact Seller'],
              description: 'Excellent condition hybrid vehicle with great fuel economy.',
              color: 'Silver',
              telephone: '+230 5xxx xxxx',
              seller_name: 'CarDealer MU',
              seller_email: 'dealer@example.com',
              mileage: '25,000 km',
              location: 'Mauritius',
              monthly_lease: Math.round(Math.max(1250000 - 200000, 0) * (0.008333 * Math.pow(1.008333, 84)) / (Math.pow(1.008333, 84) - 1))
            },
            {
              id: 'static-2',
              brand: 'Mercedes-Benz',
              model: 'C-Class',
              price: 2850000,
              year: 2022,
              fuel: 'Petrol',
              transmission: 'Automatic',
              seats: 5,
              featured: false,
              images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
              features: ['Contact Seller'],
              description: 'Luxury sedan with premium features and comfort.',
              color: 'Black',
              telephone: '+230 5xxx xxxx',
              seller_name: 'Mercedes Dealer',
              seller_email: 'mercedes@example.com',
              mileage: '15,000 km',
              location: 'Mauritius',
              monthly_lease: Math.round(Math.max(2850000 - 200000, 0) * (0.008333 * Math.pow(1.008333, 84)) / (Math.pow(1.008333, 84) - 1))
            },
            {
              id: 'static-3',
              brand: 'BMW',
              model: 'X3',
              price: 3200000,
              year: 2023,
              fuel: 'Petrol',
              transmission: 'Automatic',
              seats: 7,
              featured: false,
              images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
              features: ['Contact Seller'],
              description: 'Spacious SUV perfect for families.',
              color: 'White',
              telephone: '+230 5xxx xxxx',
              seller_name: 'BMW Dealer',
              seller_email: 'bmw@example.com',
              mileage: '10,000 km',
              location: 'Mauritius',
              monthly_lease: Math.round(Math.max(3200000 - 200000, 0) * (0.008333 * Math.pow(1.008333, 84)) / (Math.pow(1.008333, 84) - 1))
            }
          ];

          const remainingSlots = 6 - carsWithProfiles.length;
          const staticCarsToAdd = staticFeaturedCars.slice(0, remainingSlots);
          setAllCars([...carsWithProfiles, ...staticCarsToAdd]);
        } else {
          setAllCars(carsWithProfiles);
        }
      } catch (error) {
        console.error('Error loading cars:', error);
        // Fallback to static cars if there's an error
        const staticFeaturedCars = [
          {
            id: 'static-1',
            brand: 'Toyota',
            model: 'Camry Hybrid',
            price: 1250000,
            year: 2023,
            fuel: 'Hybrid',
            transmission: 'Automatic',
            seats: 5,
            featured: false,
            images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
            features: ['Contact Seller'],
            description: 'Excellent condition hybrid vehicle.',
            color: 'Silver',
            telephone: '+230 5xxx xxxx',
            seller_name: 'CarDealer MU',
            seller_email: 'dealer@example.com',
            mileage: '25,000 km',
            location: 'Mauritius',
            monthly_lease: Math.round(Math.max(1250000 - 200000, 0) * (0.008333 * Math.pow(1.008333, 84)) / (Math.pow(1.008333, 84) - 1))
          }
        ];
        setAllCars(staticFeaturedCars);
      }
    };

    loadCars();
  }, []);

  return { allCars };
};
