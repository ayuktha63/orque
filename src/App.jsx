import React from 'react';
import { Helmet } from 'react-helmet'; // For SEO

import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Services from './components/Services';
import ContactBanner from './components/ContactBanner';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="wrapper">
            <Helmet>
                {/* BASIC SEO TAGS */}
                <title>Orque Innovations | Custom Software Development & Scalable Tech</title>
                <meta name="description" content="Orque Innovations offers clean-code, quality-driven software development for every project. We provide scalable tech solutions, web & mobile apps, and IT consulting services." />
                <meta name="keywords" content="custom software development, software company, scalable tech, web apps, mobile apps, project delivery, clean code, Orque Innovations, IT services" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://orqueinnovations.netlify.app/" />

                {/* OPEN GRAPH TAGS (for Facebook, LinkedIn) */}
                <meta property="og:title" content="Orque Innovations | Custom Software Development" />
                <meta property="og:description" content="We build software solutions with a focus on clean code, performance, and client success." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://orqueinnovations.netlify.app/" />
                <meta property="og:image" content="https://orqueinnovations.netlify.app/images/logo%20copy.png" />

                {/* TWITTER CARD TAGS */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Orque Innovations | Software Solutions Across Industries" />
                <meta name="twitter:description" content="Custom software development services for startups & enterprises. Clean, scalable, and fast." />
                <meta name="twitter:image" content="https://orqueinnovations.netlify.app/og-preview.jpg" />

                {/* STRUCTURED DATA - JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Orque Innovations",
                            "url": "https://orqueinnovations.netlify.app/",
                            "logo": "https://orqueinnovations.netlify.app/images/logo%20copy.png",
                            "description": "A software company offering custom web & mobile solutions, IT consulting, and scalable platforms.",
                            "sameAs": [
                                "https://www.linkedin.com/in/orque-solutions",
                                "https://www.instagram.com/orque.solutions/"
                            ],
                            "founder": {
                                "@type": "Person",
                                "name": "Krishna Prasad"
                            }
                        }
                    `}
                </script>
            </Helmet>

            {/* SITE CONTENT */}
            <Header />
            <Hero />
            <Banner />
            <Services />
            <WhyChooseUs />
            <TechStack />
            <ContactBanner />
            <Footer />
        </div>
    );
};

export default App;
