import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CarModel {
  SN: number;
  Brand: string | null;
  Model: string | null;
}

export const useCarModels = () => {
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarModels = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .rpc('get_car_models') as { data: CarModel[] | null; error: any };

        if (error) {
          throw error;
        }

        setCarModels(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching car models:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarModels();
  }, []);

  // Get unique brands
  const getBrands = () => {
    const brands = carModels
      .map(model => model.Brand)
      .filter((brand, index, self) => brand && self.indexOf(brand) === index)
      .sort();
    return brands;
  };

  // Get models for a specific brand
  const getModelsByBrand = (brand: string) => {
    return carModels
      .filter(model => model.Brand === brand && model.Model)
      .map(model => model.Model!)
      .filter((model, index, self) => self.indexOf(model) === index)
      .sort();
  };

  return {
    carModels,
    loading,
    error,
    getBrands,
    getModelsByBrand
  };
};