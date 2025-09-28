import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SaleList from './components/SaleList';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import Homepage from './pages/Homepage';
import React from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Homepage />
        
      </div>
    </Router>
    
  );
}

export default App;