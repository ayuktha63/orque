import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <img src="src/assets/images/logo copy.png" alt="Logo" className="logo" loading="lazy" />
      <div className="container">
        <div className={`href ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu} className="links">Home</Link>
          <a href="#Company" onClick={toggleMenu} className="links">Company</a>
          <Link to="/contact" onClick={toggleMenu} className="links">Contact</Link>
          <a href="/#Services" onClick={toggleMenu} className="links">Services</a>
        </div>
        <button className="talk1 desktop-only">Let’s Talk</button>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
