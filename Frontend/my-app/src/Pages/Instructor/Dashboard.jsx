import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const InstructorDashboard = () => {
    const [stats, setStats] = useState({ totalCourses: 0, totalStudents: 0 });

    return (
        <div className="instructor-dashboard">
            <header className="dashboard-header">
                <h1>Instructor Dashboard</h1>
                <Link title="Create New Course" to="/instructor/manage-course" className="btn-primary">
                    + Create New Course
                </Link>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Courses</h3>
                    <p>{stats.totalCourses}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Students</h3>
                    <p>{stats.totalStudents}</p>
                </div>
            </div>

            <section className="course-management-section">
                <h2>Your Published Courses</h2>
                {/* Map through courses from API here */}
                <div className="empty-state">
                    <p>No courses published yet. Start by creating your first course!</p>
                </div>
            </section>
        </div>
    );
};

export default InstructorDashboard;