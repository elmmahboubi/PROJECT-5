import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import PolicyPage from './pages/policy';
import ProductPage from './pages/product';
import TrackPage from './pages/track';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/track" element={<TrackPage />} />
      </Routes>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/+12512615451?text=Hello%2C%20i%20need%20more%20informations%20about%20this%20offer!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] p-4 rounded-full shadow-lg transition-transform hover:scale-110 duration-300"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </Router>
  );
}

export default App;