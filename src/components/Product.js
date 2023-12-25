import React from 'react';

function Product({ productName }) {
  return (
    <div className="product-container bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
      {/* Product implementation */}
      <div className="product-content">
        <h2 className="text-xl font-bold mb-2">{productName}</h2>
        <p className="text-gray-700 mb-4">
          This is a sample product description. Replace it with the actual product details.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          View Product
        </button>
      </div>
    </div>
  );
}

export default Product;
