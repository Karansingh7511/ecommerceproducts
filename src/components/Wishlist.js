import React, { useState } from 'react';

function Wishlist() {
  // State to track whether the wishlist button is clicked
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  // Function to handle clicking the wishlist button
  const handleWishlistClick = () => {
    setIsWishlistClicked(!isWishlistClicked);
  };

  return (
    <div className="wishlist-container">
      {/* Wishlist implementation */}
      <button
        className={`wishlist-button bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 ${
          isWishlistClicked ? 'wishlist-active' : ''
        }`}
        onClick={handleWishlistClick}
      >
        {isWishlistClicked ? 'Added to Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
}

export default Wishlist;
