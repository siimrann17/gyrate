"use client";

import React, { useState } from 'react';

const ScooterPopup = ({ scooters, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClose = () => {
    onClose();
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-3.5/4 h-3.5/4">
        <h2 className="bold-20">Available Scooters</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {scooters.map((scooter, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`p-4 rounded-lg relative transition-opacity duration-300 ${
                hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'
              }`}
              style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}
            >
              <img src={scooter.image} alt={scooter.brand} className="w-full h-32 object-cover rounded-lg" />
              <div className="mt-2">
                <h3 className="bold-16">{scooter.brand}</h3>
                <p>Price: Rs:{scooter.price}</p>
                <p>Speed: {scooter.speed} km/h</p>
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg"></div>
              )}
            </div>
          ))}
        </div>
        <button 
          onClick={handleClose} 
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ScooterPopup;
