import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Header.css';
import Logo from './Images/black-background.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="The King's Man Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
