import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import CoursePage from './pages/CoursePage';
function App() {
  return (  
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<CoursePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;