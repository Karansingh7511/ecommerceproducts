import React, { useState, useEffect } from 'react';
import SearchResult from './SearchResult';
import { fetchSearchResults } from '../services/api';

function Search() {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle changes in the search input
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle form submission (fetch search results from the API)
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchSearchResults(searchQuery);
      setSearchResults(data);
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-container bg-gray-100 p-4 rounded-md shadow-md">
      {/* Search input and button */}
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Display search results */}
      <SearchResult results={searchResults} />
    </div>
  );
}

export default Search;
