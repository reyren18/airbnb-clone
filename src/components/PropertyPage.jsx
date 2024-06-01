import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../assets/data/properties.json";

const PropertyPage = ({ guests, startDate, endDate }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const property = data.find((property) => property.id === Number(id));

  if (!property) {
    navigate("/");
    alert("Property not found!");
    return null; 
  }

  const handleBookProperty = () => {
    alert("Property Booked!");
  };

  const formatDate = (date) => {
    return date ? date.toLocaleDateString() : "";
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img src={property.image} className="w-full h-50 mb-4" alt={property.title} />
      <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
      <p className="text-xl text-gray-700 mb-2">{property.location}</p>
      <p className="text-lg text-gray-700 mb-2">Guests: {guests}</p>
      <p className="text-lg text-gray-700 mb-2">From: {formatDate(startDate)}</p>
      <p className="text-lg text-gray-700 mb-2">To: {formatDate(endDate)}</p>

      <div className="text-lg text-gray-700 mb-4">
        <h2 className="text-2xl font-semibold mb-2">Amenities:</h2>
        <ul>
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold p-3 rounded"
        onClick={handleBookProperty}
      >
        Book Property!
      </button>
    </div>
  );
};

export default PropertyPage;
