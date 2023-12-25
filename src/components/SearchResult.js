import React from 'react';

function SearchResult({ results }) {
  return (
    <div className="search-result">
      {/* Search result implementation */}
      <ul className="result-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((result) => (
          <li key={result.id} className="bg-white p-4 rounded-md shadow-md transition duration-300 hover:shadow-lg">
            {/* Display individual search result item */}
            <p className="text-gray-800">{result.name}</p>
            {/* Add more details if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
