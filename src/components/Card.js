import React from 'react'

const Card = ({name, image, price, discount, rating}) => {
  return (
    <div className="product-container bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg" style={{display:"inline-block"}}>
    {/* Product implementation */}
    <div className="product-content">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">
       <img src={image} alt="cloth" style={{ width: '300px' }} />
       </p>
       <p>
       <span>Rs.{price}</span><span> Rs.{discount}</span>
       </p>
       <p>{rating}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        View Product
      </button>
    </div>
  </div>
  )
}

export default Card