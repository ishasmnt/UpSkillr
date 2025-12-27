import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Public Pages
import Home from './Pages/Home';

// Instructor Pages
import InstructorDashboard from './Pages/Instructor/Dashboard';
import ManageCourse from './Pages/Instructor/ManageCourse';
import AddModules from './Pages/Instructor/AddModules';
import AddAssignments from './Pages/Instructor/AddAssignments';
import UploadNotes from './Pages/Instructor/UploadNotes';

// Learner Pages
import LearnerDashboard from './Pages/Learner/Dashboard';
import CourseList from './Pages/Learner/CourseList';
import MyCourses from './Pages/Learner/MyCourses';
import CoursePlayer from './Pages/Learner/CoursePlayer';
import SubmitAssignment from './Pages/Learner/SubmitAssignment';
import Notes from './Pages/Learner/Notes';

// Temporary components to prevent "Not Defined" errors
const Login = () => <div style={{padding: '100px', textAlign: 'center'}}><h2>Login Page</h2><p>Firebase Auth setup pending.</p></div>;
const Register = () => <div style={{padding: '100px', textAlign: 'center'}}><h2>Register Page</h2><p>Firebase Auth setup pending.</p></div>;

function App() {
  // Mode Switcher: 'public', 'instructor', 'learner'
  const [mode, setMode] = useState('public');

  return (
    <Router>
      <div className="app-structure">
        <Navbar mode={mode} setMode={setMode} />
        
        <main className="main-content" style={{ minHeight: '80vh' }}>
          <Routes>
            {/* --- PUBLIC ROUTES --- */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* --- INSTRUCTOR ROUTES --- */}
            <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
            <Route path="/instructor/manage-course" element={<ManageCourse />} />
            <Route path="/instructor/add-modules" element={<AddModules />} />
            <Route path="/instructor/add-assignments" element={<AddAssignments />} />
            <Route path="/instructor/upload-notes" element={<UploadNotes />} />

            {/* --- LEARNER ROUTES --- */}
            <Route path="/learner/dashboard" element={<LearnerDashboard />} />
            <Route path="/learner/courses" element={<CourseList />} />
            <Route path="/learner/my-courses" element={<MyCourses />} />
            <Route path="/learner/course-player" element={<CoursePlayer />} />
            <Route path="/learner/submit-assignment" element={<SubmitAssignment />} />
            <Route path="/learner/notes" element={<Notes />} />

            {/* --- REDIRECTS --- */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;