import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from './UI/Cards/PropertyCard';
import data from '../assets/data/properties.json'; 

function Liked() {
  const location = useLocation();
  const { liked } = location.state || { liked: [] }; 
  const likedPropertyData = data.filter(property => liked.includes(property.id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {likedPropertyData.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Liked;
