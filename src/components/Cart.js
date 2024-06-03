import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import '../styles/Cart.css'; // Adjusted path

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
