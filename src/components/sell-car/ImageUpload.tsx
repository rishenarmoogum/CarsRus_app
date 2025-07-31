
import React from 'react';
import { Upload, X } from 'lucide-react';
import { Label } from '../ui/label';

interface ImageUploadProps {
  images: File[];
  imageUrls: string[];
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: (index: number) => void;
}

const ImageUpload = ({ images, imageUrls, onImageUpload, onRemoveImage }: ImageUploadProps) => {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold text-gray-800">Car Images (Max 10)</Label>
      <div className="border-2 border-dashed border-red-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          <Upload className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Click to upload car images</p>
          <p className="text-sm text-gray-500">PNG, JPG up to 5MB each</p>
        </label>
      </div>

      {/* Image Preview */}
      {imageUrls.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageUrls.map((url, idx) => (
            <div key={idx} className="relative group">
              <img
                src={url}
                alt={`Car image ${idx + 1}`}
                className="w-full h-32 object-cover rounded-lg border border-red-200"
              />
              <button
                type="button"
                onClick={() => onRemoveImage(idx)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
