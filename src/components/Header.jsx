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
      <img src="/images/logo copy.webp" alt="Logo" className="logo" loading="lazy" />
      <div className="container">
        <div className={`href ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu} className="links">Home</Link>
          <Link to="/company" onClick={toggleMenu} className="links">Company</Link>
          <Link to="/contact" onClick={toggleMenu} className="links">Contact</Link>
          <a href="/#Services" onClick={toggleMenu} className="links">Services</a>
        </div>
        <Link to="/contact">
          <button className="talk1 desktop-only">Let’s Talk</button>
        </Link>
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
