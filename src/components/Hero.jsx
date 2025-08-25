import React from 'react';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="section1" id="Home" >
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="/images/orque.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="content" data-aos="fade-right">
                <h1>Transform</h1>
                <h1>How Your Team Works.</h1>
                <p>Where Innovation Meets <br />Simplicity</p>
                <Link to="/contact">
                    <button className="talk">Let’s Talk</button>
                </Link>
            </div>
        </section>
    );
}

export default Hero;