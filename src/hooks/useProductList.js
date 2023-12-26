import React,{useEffect} from 'react'
import {useDispatch} from "react-redux";
import { addProducts } from '../utils/productSlice';

const useProductList = (query) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('./db.json');
            var data = await response.json();
            if(query.length){
                data=data.filter(product => 
                    product.Name?.trim().toLowerCase().includes(query.toLowerCase())
                );
            }
            dispatch(addProducts(data));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

}

export default useProductList
