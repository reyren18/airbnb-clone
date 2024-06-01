import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property, onLike }) {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(property.id)
  }
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Link to={`property/${property.id}`}>
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover"
      />
      </Link>
      <div className="p-4 relative">
        <h2 className="text-xl font-bold">{property.title}</h2>
        <p className="text-gray-600 mt-2">{property.location}</p>
        <p className="text-lg font-bold mt-2">${property.price} <span className="text-sm text-gray-500">/ night</span></p>
<button className={`absolute rounded top-3 right-3 p-2 ${isLiked ? 'bg-pink-500' : 'bg-pink-300'}`} onClick={handleLike}>
𖹭
</button>
      </div>
    </div>
  );
}

export default PropertyCard;