import React from 'react';
import '../styles/Product.css';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
