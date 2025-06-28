import React from 'react';
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
