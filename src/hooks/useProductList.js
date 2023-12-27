import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../utils/productSlice';

const useProductList = () => {
  const dispatch = useDispatch();

  const queryFetchData = async (query) => {
    try {
      const response = await fetch('./db.json');
      const data = await response.json();

      // Filter the data based on the query, if provided
      const filteredData = query
        ? data.filter((product) =>
            product.Name?.trim().toLowerCase().includes(query.toLowerCase())
          )
        : data;

      // Dispatch the filtered data to the Redux store
      dispatch(addProducts(filteredData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterFetchData = async (filter) => {
    try {
      const response = await fetch('./db.json');
      const data = await response.json();

      // Filter the data based on the filter, if provided
      const filteredData = filter
        ? data.filter((product) => {
            if (filter === 'Mango' || filter === 'H&M') {
              return filter === product.Brand;
            } else if (filter === 'Under 500') {
              return product.Discount < 500;
            } else if (filter === '1000 To 3000') {
              return product.Discount >= 1000 && product.Discount <= 3000;
            } else {
              return product.Rating === filter;
            }
          })
        : data;

      // Dispatch the filtered data to the Redux store
      dispatch(addProducts(filteredData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Initial data fetching without a query or filter
    queryFetchData();
    filterFetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return { queryFetchData, filterFetchData };
};

export default useProductList;
