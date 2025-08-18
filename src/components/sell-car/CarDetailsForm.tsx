
import React, { useEffect } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useCarModels } from '@/hooks/useCarModels';

interface CarDetailsFormProps {
  form: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const CarDetailsForm = ({ form, handleChange }: CarDetailsFormProps) => {
  const { getBrands, getModelsByBrand, loading } = useCarModels();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="make">Make *</Label>
        <select
          name="make"
          value={form.make}
          onChange={handleChange}
          required
          disabled={loading}
          className="w-full p-3 border border-red-200 rounded-lg focus:border-red-500 focus:ring-red-500"
        >
          <option value="">Select Make</option>
          {getBrands().map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="model">Model *</Label>
        <Input
          name="model"
          type="text"
          value={form.model}
          onChange={handleChange}
          placeholder="e.g., Corolla"
          required
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="year">Year *</Label>
        <Input
          name="year"
          type="number"
          value={form.year}
          onChange={handleChange}
          placeholder="e.g., 2020"
          min="1990"
          max="2024"
          required
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price (Rs) *</Label>
        <Input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="e.g., 750000"
          required
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mileage">Mileage (km)</Label>
        <Input
          name="mileage"
          type="number"
          value={form.mileage}
          onChange={handleChange}
          placeholder="e.g., 50000"
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="engine_capacity">Engine Capacity (cc)</Label>
        <Input
          name="engine_capacity"
          type="number"
          value={form.engine_capacity}
          onChange={handleChange}
          placeholder="e.g., 1500"
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="seats">Number of Seats</Label>
        <Input
          name="seats"
          type="number"
          value={form.seats}
          onChange={handleChange}
          placeholder="e.g., 5"
          min="2"
          max="8"
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="doors">Number of Doors</Label>
        <Input
          name="doors"
          type="number"
          value={form.doors}
          onChange={handleChange}
          placeholder="e.g., 4"
          min="2"
          max="5"
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="telephone">Telephone Number</Label>
        <Input
          name="telephone"
          type="tel"
          value={form.telephone}
          onChange={handleChange}
          placeholder="e.g., 12345678"
          maxLength={8}
          className="border-red-200 focus:border-red-500 focus:ring-red-500"
        />
        <p className="text-xs text-gray-500">Enter 8-digit phone number</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="color">Color</Label>
        <select
          name="color"
          value={form.color}
          onChange={handleChange}
          className="w-full p-3 border border-red-200 rounded-lg focus:border-red-500 focus:ring-red-500"
        >
          <option value="">Select Color</option>
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Silver">Silver</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Gray">Gray</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fuel">Fuel Type</Label>
        <select
          name="fuel"
          value={form.fuel}
          onChange={handleChange}
          className="w-full p-3 border border-red-200 rounded-lg focus:border-red-500 focus:ring-red-500"
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="transmission">Transmission</Label>
        <select
          name="transmission"
          value={form.transmission}
          onChange={handleChange}
          className="w-full p-3 border border-red-200 rounded-lg focus:border-red-500 focus:ring-red-500"
        >
          <option value="">Select Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="CVT">CVT</option>
        </select>
      </div>
    </div>
  );
};

export default CarDetailsForm;
