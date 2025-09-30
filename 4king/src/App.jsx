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
import SellListPage from './pages/SellListPage';
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
      <Navbar></Navbar>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books" element={<SellListPage />} />

          </Routes>
        </main>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;