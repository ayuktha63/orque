import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx'; // Import CompanyPage

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} /> {/* Add CompanyPage route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);