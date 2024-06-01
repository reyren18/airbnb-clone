import React, { useEffect, useState } from 'react';
import data from '../assets/data/properties.json';
import PropertyCard from './UI/Cards/PropertyCard';
import { Link } from 'react-router-dom';

const PropertyListing = ({ searchQuery, filters }) => {
  const [properties, setProperties] = useState(data);
  const [liked, setLiked] = useState([]);

  const handleLike = (propertyId) => {
    setLiked(prev => {
        if (prev.includes(propertyId)) {
            return prev.filter(id => id !== propertyId);
        } else {
            return [...prev, propertyId];
        }
    });
  };

  useEffect(() => {
    let searchedProperties = data.filter(property =>
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filters) {
      searchedProperties = searchedProperties.filter(property => {
        const isPriceMatch = property.price >= filters.minPrice && property.price <= filters.maxPrice;
        const amenitiesArray = filters.amenities.split(',').map(amenity => amenity.trim().toLowerCase());
        const isAmenitiesMatch = amenitiesArray.every(amenity => property.amenities.map(a => a.toLowerCase()).includes(amenity));
        return isPriceMatch && isAmenitiesMatch;
      });
    }

    setProperties(searchedProperties);
  }, [searchQuery, filters]);

  return (
    <>
      <div>
        <Link to="/liked" state={{ liked }} className='rounded bg-pink-500 text-center hover:bg-pink-700 p-4'>
          View Liked Properties
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} onLike={handleLike} />
        ))}
      </div>
    </>
  );
};

export default PropertyListing;
