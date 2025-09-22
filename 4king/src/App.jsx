import './App.css';
import React from 'react';
import SaleList from './components/SaleList';
import FilterSidebar from './components/FilterSidebar';

function App() {
  return (
    <div className="container">
      <FilterSidebar />
      <SaleList />
    </div>
  );
}

export default App;