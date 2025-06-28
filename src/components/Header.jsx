import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="logo"></div>
            <div className="container">
                <div className={`href ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#Home" onClick={toggleMenu} className='links'>Home</a>
                    <a href="#Company" onClick={toggleMenu} className='links'>Company</a>
                    <a href="#Contact" onClick={toggleMenu} className='links'>Contact</a>
                    <a href="#Services" onClick={toggleMenu} className='links'>Services</a>
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
