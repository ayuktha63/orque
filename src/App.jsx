import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CompanyPage from './pages/CompanyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/company" element={<CompanyPage />} />
    </Routes>
  );
};

export default App;