import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SaleList from './components/SaleList';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import React from 'react';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <div className="filter-section">
          <FilterSidebar />
        </div>
        <div className="product-section">
          <SaleList />
        </div>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;