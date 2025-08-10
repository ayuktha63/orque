import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="footer">
      <div className="footer-content">
        {isLargeScreen && (
          <div className="footer-left">
            <img src="images/logo.webp" alt="Orque Logo" />
            <p>Empowering businesses with cutting-edge software solutions</p>
          </div>
        )}
        <div className="footer-right">
          <div className="first">
            <p>Useful Links</p>
            <Link to="/" className="link">Home</Link>
            <Link to="/company" className="link">Company</Link>
            <Link to="/service" className="link">Service</Link>
            <Link to="/contact" className="link">Contact</Link>
          </div>
          <div className="second">
            <p>Support</p>
            <a href="#PrivacyPolicy">Privacy Policy</a>
            <a href="#Terms">Terms & Conditions</a>
            <a href="#FAQ">FAQ</a>
          </div>
          {/* Social icons block with corrected SVGs */}
          <div className="social">
            <p>SOCIAL</p>
            <div className="social-icons">
             
              {/* LinkedIn - Corrected SVG */}
              <a href="https://www.linkedin.com/company/orque-innovations-llp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              
              {/* Instagram - Corrected SVG */}
              <a href="https://www.instagram.com/orqueinnovations.llp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="last-footer">
        <p>©2025 All rights reserved</p>
      </div>
    </section>
  );
}
export default Footer;