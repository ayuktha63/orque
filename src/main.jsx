import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'aos/dist/aos.css';
import App from './App.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CompanyPage from './pages/CompanyPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
