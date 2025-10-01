import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SaleList from './components/SaleList';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import Homepage from './pages/Homepage';
import SellItem from './pages/SellItem';
import SalePage from './pages/SalePage';
import React from 'react';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<SalePage />} />
            <Route path="/sellitem" element={<SellItem />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;