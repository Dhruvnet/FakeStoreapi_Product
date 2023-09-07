import React from 'react';

const ProductDetailCard = ({ product, onClose }) => {
  // Handle click outside the card to close it
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('fixed')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleOutsideClick}>
      <div className="bg-gray-100 border border-black rounded-lg p-6 text-center">
        <div className="w-64 h-64 mx-auto">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src={product.image}
            alt="Product Image"
          />
        </div>
        <h2 className="text-lg font-medium text-gray-900 mt-4">{product.title}</h2>
        <p className="text-base text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailCard;
