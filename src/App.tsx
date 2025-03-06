import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CakeDetails } from './pages/CakeDetails';
import { Cart } from './pages/Cart';
import { SpecialOccasions } from './pages/SpecialOccasions';
import { LocationSelection } from './pages/LocationSelection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/special-occasions" element={<SpecialOccasions />} />
          <Route path="/location" element={<LocationSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App