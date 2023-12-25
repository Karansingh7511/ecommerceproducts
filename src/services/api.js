// api.js

const BASE_URL = 'https://fakestoreapi.com/products'; // Replace with your actual API endpoint

export const fetchSearchResults = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};
