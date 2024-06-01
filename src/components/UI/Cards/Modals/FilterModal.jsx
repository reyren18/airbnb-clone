import React, { useState } from 'react';

export default function FilterModal({ isOpen, onClose, onApplyFilters, onClearFilters }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [amenities, setAmenities] = useState('');

  const handleApplyFilters = () => {
    onApplyFilters({ minPrice, maxPrice, amenities });
    onClose();
  };

const handleRemoveFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setAmenities('');
    onClearFilters();
    onClose();
}

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Filter Properties</h2>

          <div className="mb-4">
            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
              Price Range
            </label>
            <input 
              type="range" 
              id="priceRange" 
              min={0} 
              max={1000} 
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)} 
            />
            <input 
              type="range" 
              id="priceRange" 
              min={0} 
              max={1000}
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
            <p className="text-gray-600 mt-2">
              ${minPrice} - ${maxPrice}
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="amenities" className="block text-sm font-medium text-gray-700">
              Amenities (separate by ",")
            </label>
            <input 
              type="text" 
              id="amenities" 
              className="mt-1 p-2 border rounded-md w-full" 
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
            />
          </div>
        <div className=''>
        <button 
            onClick={handleApplyFilters} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded"
          >
            Apply Filters
          </button>
          <button 
            onClick={handleRemoveFilters} 
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold p-3 rounded"
          >
            Remove Filters
          </button>
        </div>

        </div>
      </div>
    )
  );
}
