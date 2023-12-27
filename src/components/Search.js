import React, { useState } from 'react';
import useProductList from '../hooks/useProductList';

function Search() {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');
  const { queryFetchData } = useProductList();

  const handleSearchChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    queryFetchData(newSearchQuery);
  };

  return (
    <div className="search-container bg-gray-100 p-4 rounded-md shadow-md">
      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none"
      />
    </div>
  );
}

export default Search;

