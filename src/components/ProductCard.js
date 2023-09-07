import React, { useState } from 'react';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const descriptionClass = showFullDescription
    ? 'mb-2 text-lg dark:text-white text-gray-900'
    : 'mb-2 text-base dark:text-gray-300 text-gray-700 line-clamp-3';

  return (
    <div className="w-full lg:w-1/4 p-4">
      <div className="rounded-lg shadow-md bg-white">
        <div className="bg-white rounded-lg p-6 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-2 rounded-tr-lg">
              {product.category}
            </div>
          </div>
          <img className="h-64 w-full object-cover object-center" src={product.image} alt="Product Image" />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
            <p className={descriptionClass}>
              {product.description}
            </p>
            {product.description.length > 200 && (
              <button
                onClick={toggleDescription}
                className="text-indigo-500 cursor-pointer"
                style={{ fontWeight: 'normal' }} // Prevents the "Read More" text from becoming bold
              >
                {showFullDescription ? 'Read Less' : 'Read More'}
              </button>
            )}
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
    </div>
  );
};

export default ProductCard;
