import React, { useState } from 'react';
import Product from './Product';

function Search() {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <div className="search-container bg-gray-100 p-4 rounded-md shadow-md">
      {/* Search input and button */}
    
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search..."
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none"
        />
      
    </div>
    <div>
      {searchQuery && <Product query={searchQuery}/> }
      {searchQuery==='' && <Product query={''}/> }
    </div>
    
    </>
  );
}

export default Search;
