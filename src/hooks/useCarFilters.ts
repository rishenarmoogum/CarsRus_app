
import { useMemo } from 'react';
import { Car, CarFilters } from './useCars';

export const useCarFilters = (cars: Car[], filters: CarFilters) => {
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      return (
        (filters.make === '' || car.brand === filters.make) &&
        (filters.model === '' || car.model === filters.model) &&
        (filters.transmission === '' || car.transmission === filters.transmission) &&
        (filters.fuel === '' || car.fuel === filters.fuel) &&
        car.price >= filters.minPrice &&
        car.price <= filters.maxPrice &&
        (filters.year === '' || car.year.toString() === filters.year)
      );
    });
  }, [cars, filters]);

  const brands = useMemo(() => [...new Set(cars.map(car => car.brand))], [cars]);
  const models = useMemo(() => [...new Set(cars.map(car => car.model))], [cars]);

  return { filteredCars, brands, models };
};
