import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Automatically scroll to top on any route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // Triggers on every path change

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    toggleMenu();
    if (location.pathname === '/') {
      // If already on home, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home (useEffect will handle scroll)
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
      // If already on home, scroll to Services section
      scrollToServices();
    } else {
      // If on another page, navigate to home and then scroll to Services
      navigate('/', { state: { scrollTo: 'Services' } });
      // Use a slight delay to ensure the page has loaded
      setTimeout(scrollToServices, 100); // Adjust delay if needed based on load time
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If already on home, scroll to top (refreshes view)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home (useEffect will handle scroll)
      navigate('/');
    }
  };

  return (
    <div className="header">
      <img 
        src="/images/logo copy.webp" 
        alt="Logo" 
        className="logo" 
        loading="lazy" 
        onClick={handleLogoClick}  // Added handler for logo click
        style={{ cursor: 'pointer' }}  // Makes logo clickable visually
      />
      <div className="container">
        <div className={`href ${isMenuOpen ? 'active' : ''}`}>
          <a 
            onClick={handleHomeClick} 
            className="links" 
            style={{ cursor: 'pointer' }} // Ensure pointer cursor on hover
          >
            Home
          </a>
          <Link to="/company" onClick={toggleMenu} className="links">Company</Link>
          <Link to="/contact" onClick={toggleMenu} className="links">Contact</Link>
          <a 
            onClick={handleServicesClick} 
            className="links" 
            style={{ cursor: 'pointer' }} // Ensure pointer cursor on hover
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
