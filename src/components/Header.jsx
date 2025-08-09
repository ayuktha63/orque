import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    toggleMenu();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleServicesClick = () => {
    toggleMenu();
    const scrollToServices = () => {
      const servicesElement = document.getElementById('Services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scrollToServices();
    } else {
      navigate('/', { state: { scrollTo: 'Services' } });
      setTimeout(scrollToServices, 100);
    }
  };

  return (
    <div className="header">
      {/* ✅ Updated logo wrapped in <Link> */}
      <Link to="/" aria-label="Home">
        <img
          src="/images/logo copy.webp"
          alt="Logo"
          className="logo"
          loading="lazy"
          style={{ cursor: 'pointer' }}
        />
      </Link>

      <div className="container">
        <div className={`href ${isMenuOpen ? 'active' : ''}`}>
          <a
            onClick={handleHomeClick}
            className="links"
            style={{ cursor: 'pointer' }}
          >
            Home
          </a>
          <Link to="/company" onClick={toggleMenu} className="links">Company</Link>
          <Link to="/contact" onClick={toggleMenu} className="links">Contact</Link>
          <a
            onClick={handleServicesClick}
            className="links"
            style={{ cursor: 'pointer' }}
          >
            Services
          </a>
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
