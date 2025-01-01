import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='header'>
      <a href="/" className='logo'>Raj</a>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">About</a>
        <a href="/">Feature</a>
        <a href="/">How to Use</a>
        <a href="/">Download</a>
      </nav>
    </header>
  );
};

export default Navbar;
