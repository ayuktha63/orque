import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CompanyPage from './pages/CompanyPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation time in ms
      once: false,     // run animation only once
      offset: 100,    // distance before element is in view
    });
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/company" element={<CompanyPage />} />
    </Routes>
  );
};

export default App;
