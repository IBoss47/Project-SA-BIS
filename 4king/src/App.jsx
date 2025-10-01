import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import SaleList from './components/SaleList';
import Footer from './components/Footer';
import FilterSidebar from './components/FilterSidebar';
import Homepage from './pages/Homepage';
import SellItem from './pages/SellItem';
import React from 'react';
import LoginPage from './pages/LoginPage';
import SellListPage from './pages/SellListPage';
import MyStorePage from './pages/MyStorePage';
function App() {
  return (  
    // <Router>
    //   <div className="App">
    //     <Routes>
    //         <Route path="/sellitem" element={<SellItem />} />
    //         <Route path="/books" element={<SellListPage />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sellitem" element={<SellItem />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;