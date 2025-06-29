import React from 'react';
import '../styles/Hero.css';

function Hero() {
    return (
        <section className="section1" id="Home">
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="src/assets/images/orque.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Transform</h1>
                <h1>How Your Team Works.</h1>
                <p>Where Innovation Meets <br />Simplicity</p>
                <button className="talk">Let’s Talk</button>
            </div>
        </section>
    );
}

export default Hero;