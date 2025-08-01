import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TechStack from '../components/TechStack';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Orque Innovations LLP</title>
        <meta
          name="description"
          content="Orque Innovations offers clean-coded, scalable custom software, AI solutions, and digital transformation services for startups and enterprises."
        />
        <meta
          name="keywords"
          content="Orque Innovations, custom software, scalable tech, AI development, ERP, Kerala IT company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Orque Innovations LLP" />
        <link rel="canonical" href="https://orqueinnovations.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orqueinnovations.com/" />
        <meta property="og:title" content="Orque Innovations | Custom Software Development & Scalable Tech" />
        <meta property="og:description" content="Clean-coded custom software and AI solutions tailored to your business needs." />
        <meta property="og:image" content="https://orqueinnovations.com/orque-og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://orqueinnovations.com/" />
        <meta name="twitter:title" content="Orque Innovations | Custom Software Development & Scalable Tech" />
        <meta name="twitter:description" content="Clean-coded custom software and AI solutions tailored to your business needs." />
        <meta name="twitter:image" content="https://orqueinnovations.com/orque-og-image.png" />
      </Helmet>

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

export default HomePage;
