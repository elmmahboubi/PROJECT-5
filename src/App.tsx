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
    </Router>
  );
}

export default App;