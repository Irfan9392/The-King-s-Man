import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css';
import Blazer_1 from './Images/Blazer_1.jpg';
import Sherwani_1 from './Images/Sherwani_1.jpg';

const ProductList = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/products');
  };

  return (
    <div className="product-list">
      <div className="product-card" onClick={handleNavigation}>
        <img src={Blazer_1} alt="Blazer" className="product-image" />
        <div className="product-info">
          <h3 className="product-title">Blazer</h3>
          <button className="product-button">Blazer</button>
        </div>
      </div>
      <div className="product-card" onClick={handleNavigation}>
        <img src={Sherwani_1} alt="Sherwani" className="product-image" />
        <div className="product-info">
          <h3 className="product-title">Sherwani</h3>
          <button className="product-button">Sherwani</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
