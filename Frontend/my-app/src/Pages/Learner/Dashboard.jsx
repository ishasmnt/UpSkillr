import React from 'react';
import './Dashboard.css';
import ProgressBar from '../../components/ProgressBar';

const LearnerDashboard = () => {
    // Mock data for demo - will be replaced by learnerService.js API
    const enrolledCourses = [
        { id: 1, title: 'React Masterclass', instructor: 'Dr. Smith', progress: 75 },
        { id: 2, title: 'Node.js Backend Essentials', instructor: 'Sarah J.', progress: 30 }
    ];

    return (
        <div className="learner-dashboard">
            <header className="dash-header">
                <h1>Welcome Back, Learner!</h1>
                <p>Track your progress and continue your skill journey.</p>
            </header>

            <div className="stats-row">
                <div className="stat-box"><h3>2</h3><p>Enrolled Courses</p></div>
                <div className="stat-box"><h3>12</h3><p>Lessons Completed</p></div>
                <div className="stat-box"><h3>1</h3><p>Certificates Earned</p></div>
            </div>

            <section className="enrolled-section">
                <h2>Your Courses</h2>
                <div className="course-progress-grid">
                    {enrolledCourses.map(course => (
                        <div key={course.id} className="progress-card">
                            <h4>{course.title}</h4>
                            <span>{course.instructor}</span>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            <div className="card-footer">
                                <span>{course.progress}% Complete</span>
                                <button className="btn-resume">Resume</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LearnerDashboard;