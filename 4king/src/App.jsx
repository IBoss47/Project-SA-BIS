import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import CoursePage from './pages/CoursePage';
import Examsidebar from './components/Examsidebar';
function App() {
  return (  
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Examsidebar />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;