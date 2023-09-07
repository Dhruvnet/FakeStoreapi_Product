import React from 'react';

// StarRating component
const StarRating = ({ rating }) => {
  const maxStars = 5;
  const starElements = [];

  for (let i = 1; i <= maxStars; i++) {
    const starClass = i <= rating ? 'text-yellow-500' : 'text-gray-300';
    starElements.push(
      <span key={i} className={`text-2xl ${starClass}`}>★</span>
    );
  }

  return (
    <div className="flex items-center space-x-1 my-2 md:my-4 text-base md:text-xl">
      {starElements}
    </div>
  );
};

export default StarRating;
