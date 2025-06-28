import React, { useState, useEffect } from 'react';
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
                        <img src="images/logo.png" alt="" />
                        <p>Empowering businesses with cutting-edge software solutions</p>
                    </div>
                )}
                <div className="footer-right">
                    <div className="first">
                        <p>Useful Links</p>
                        <a href="#Home">Home</a>
                        <a href="#Company">Company</a>
                        <a href="#Services">Service</a>
                        <a href="#Contact">Contact</a>
                    </div>
                    <div className="second">
                        <p>Support</p>
                        <a href="#Privacy Policy">Privacy Policy</a>
                        <a href="#Terms & Conditions">Terms & Conditions</a>
                        <a href="#FAQ">FAQ</a>
                    </div>
                    <div className="third">
                        <p>Find Us</p>
                        <p>Mon - Sat : 8am - 9pm</p>
                        <p>Thiruvananthapuram</p>
                        <p>E-mail</p>
                        <p>orquesolutions@gmail.com</p>
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