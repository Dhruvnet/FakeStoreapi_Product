import React, { useState } from 'react';
import StarRating from './StarRating';
import ProductDetailCard from './ProductDetailCard'; // Import the new component

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showDetailCard, setShowDetailCard] = useState(false); // State to control the detailed card

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleDetailCard = () => {
    setShowDetailCard(!showDetailCard);
  };

  const descriptionClass = showFullDescription
    ? 'mb-2 text-lg dark:text-white text-gray-900'
    : 'mb-2 text-base dark:text-gray-300 text-gray-700 line-clamp-3';

  return (
    <div className={`w-full lg:w-1/4 p-4 relative flex justify-center`}>
      <div className={`w-full rounded-lg shadow-md bg-white flex flex-col justify-between ${showDetailCard ? 'border border-black' : ''}`}>
        <div
          className={`bg-white rounded-lg p-6 transform cursor-pointer ${showDetailCard ? 'bg-black text-white' : ''}`}
          onClick={toggleDetailCard} 
        >
          <div className="relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-2 rounded-tr-lg">
              {product.category}
            </div>
          </div>
          <img className="h-64 w-full object-cover object-center" src={product.image} alt="Product Image" />
          <div className="p-4">
            <h2 className={`mb-2 text-lg font-medium text-gray-900 ${showDetailCard ? 'text-white' : ''}`}>
              {product.title}
            </h2>
            <div className="flex items-center space-x-2 my-2 text-lg font-medium">
              <StarRating rating={product.rating.rate} />
              <p>{product.rating.count} reviews</p>
            </div>
            <div className="flex items-center">
              <div className="rounded-lg bg-gray-100 flex py-2 px-4 md:py-2 md:px-5">
                <span className="text-indigo-500 mr-1 mt-0.5 md:mt-1">$</span>
                <span className="font-bold text-indigo-600 text-2xl md:text-3xl">{product.price}</span>
              </div>
              <p className="ml-2 text-lg text-indigo-500">(20% off)</p>
            </div>
          </div>
        </div>
      </div>
      {showDetailCard && (
        <ProductDetailCard product={product} onClose={toggleDetailCard} />
      )}
    </div>
  );
};

export default ProductCard;