
import React from 'react';
import { Grid, List } from 'lucide-react';
import { CarFilters as FiltersType } from '../../hooks/useCars';

interface CarFiltersProps {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  brands: string[];
  models: string[];
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  filteredCount: number;
  totalCount: number;
}

const CarFilters: React.FC<CarFiltersProps> = ({
  filters,
  setFilters,
  brands,
  models,
  viewMode,
  setViewMode,
  filteredCount,
  totalCount
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-red-100 rounded-3xl p-6 mb-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <select
          value={filters.make}
          onChange={(e) => setFilters({...filters, make: e.target.value})}
          className="p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <select
          value={filters.model}
          onChange={(e) => setFilters({...filters, model: e.target.value})}
          className="p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">All Models</option>
          {models.map(model => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        <select
          value={filters.transmission}
          onChange={(e) => setFilters({...filters, transmission: e.target.value})}
          className="p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>

        <select
          value={filters.fuel}
          onChange={(e) => setFilters({...filters, fuel: e.target.value})}
          className="p-3 border border-red-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Max Price: Rs {filters.maxPrice.toLocaleString()}</label>
          <input
            type="range"
            min={0}
            max={5000000}
            step={50000}
            value={filters.maxPrice}
            onChange={(e) => setFilters({...filters, maxPrice: Number(e.target.value)})}
            className="w-full accent-red-600"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Showing {filteredCount} of {totalCount} cars
      </div>
    </div>
  );
};

export default CarFilters;
