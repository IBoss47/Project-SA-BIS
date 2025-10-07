import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import CoursePage from './pages/CoursePage';
import Exam1 from './components/Exam1';
import CourseDetail from './pages/CourseDetail';
function App() {
  return (  
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<CoursePage />} />
            <Route path="/Exam1" element={<Exam1 /> }/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;