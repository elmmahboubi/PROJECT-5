import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import PolicyPage from './pages/policy';
import ProductPage from './pages/product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;