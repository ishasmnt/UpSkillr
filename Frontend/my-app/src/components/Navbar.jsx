import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ mode, setMode }) => {
  const navigate = useNavigate();

  const handleModeChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);
    
    // Redirect to the appropriate dashboard on switch
    if (selectedMode === 'instructor') navigate('/instructor/dashboard');
    else if (selectedMode === 'learner') navigate('/learner/dashboard');
    else navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">UpSkillr</Link>
      </div>

      <ul className="nav-links">
        {/* --- INSTRUCTOR LINKS --- */}
        {mode === 'instructor' && (
          <>
            <li className="role-indicator">Instructor Panel</li>
            <li><Link to="/instructor/dashboard">Overview</Link></li>
            <li><Link to="/instructor/manage-course">My Courses</Link></li>
            <li><Link to="/instructor/upload-notes">Resources</Link></li>
          </>
        )}

        {/* --- LEARNER LINKS --- */}
        {mode === 'learner' && (
          <>
            <li className="role-indicator">Learner Panel</li>
            <li><Link to="/learner/dashboard">My Progress</Link></li>
            <li><Link to="/learner/courses">All Courses</Link></li>
            <li><Link to="/learner/my-courses">Enrolled</Link></li>
            <li><Link to="/learner/notes">My Notes</Link></li>
          </>
        )}

        {/* --- PUBLIC LINKS --- */}
        {mode === 'public' && (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/learner/courses">Courses</Link></li>
            <li><Link to="/login" className="login-btn">Login</Link></li>
          </>
        )}
      </ul>

      <div className="nav-actions">
        <div className="mode-switcher">
          <span>Viewing as:</span>
          <select value={mode} onChange={handleModeChange}>
            <option value="public">Guest</option>
            <option value="instructor">Instructor</option>
            <option value="learner">Learner</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;