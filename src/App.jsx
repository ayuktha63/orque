import React from 'react';
import { Helmet } from 'react-helmet'; // ⬅️ Import Helmet for SEO
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
                {/* Basic SEO */}
                <title>Orque Innovations | Custom Software Solutions for Every Industry</title>
                <meta name="description" content="Orque Innovations offers tailored software solutions for startups, enterprises, and everything in between. Empower your business with cutting-edge tech." />
                <meta name="keywords" content="software development, custom software, tech company, Orque Innovations, web apps, mobile apps, SaaS solutions, IT services, btech projects, Orque Solutions" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://orqueinnovations.netlify.app/" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Orque Innovations" />
                <meta property="og:description" content="We deliver smart, scalable software solutions across industries. Let's build your next product." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://orqueinnovations.netlify.app/" />
                <meta property="og:image" content="https://orqueinnovations.netlify.app/images/logo%20copy.png" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Orque Innovations" />
                <meta name="twitter:description" content="Custom software development company delivering smart solutions for startups & enterprises." />
                <meta name="twitter:image" content="https://orqueinnovations.netlify.app/og-preview.jpg" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Orque Innovations",
                            "url": "https://orqueinnovations.netlify.app/",
                            "logo": "https://orqueinnovations.netlify.app/images/logo%20copy.png",
                            "sameAs": [
                                "https://www.linkedin.com/in/orque-solutions",
                                "https://www.instagram.com/orque.solutions/"
                            ]
                        }
                    `}
                </script>
            </Helmet>

            {/* Site Content */}
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
