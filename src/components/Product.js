import Card from './Card';
import React from 'react';
import useProductList from '../hooks/useProductList';
import { useSelector } from "react-redux";

const Product = ({query}) =>{
  useProductList(query);
  const product = useSelector((store) => store.product?.addproducts);
  return (
    <div>
      {product ? (
        product.map((element) => (
          <Card
            key={element.ID} 
            name={element.Name}
            image={element.Image}
            price={element.Price}
            discount={element.Discount}
            rating={element.Rating}
          />
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Product;