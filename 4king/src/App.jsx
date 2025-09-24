import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import React from 'react';
function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <h1>hello</h1>
      </div>
    </Router>
  );
}

export default App;