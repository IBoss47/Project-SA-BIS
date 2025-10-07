import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import CoursePage from './pages/CoursePage';
import Examsidebar from './components/Examsidebar';
import CourseDetail from './pages/CourseDetail';
function App() {
  return (  
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<CoursePage />} />
            <Route path="/books/:id" element={<Examsidebar /> }/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;