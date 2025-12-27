import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageCourse.css';

const ManageCourse = () => {
    const navigate = useNavigate();
    
    // Mock state of an existing course being edited
    const [courseInfo, setCourseInfo] = useState({
        title: "Fullstack MERN Development 2025",
        description: "Learn to build robust web applications using MongoDB, Express, React, and Node.",
        category: "Web Development",
        price: 49.99
    });

    return (
        <div className="manage-course-container">
            <header className="manage-header">
                <h1>Manage Course: {courseInfo.title}</h1>
                <p>Use the sections below to build out your course content.</p>
            </header>

            <div className="management-grid">
                {/* Section 1: Basic Info Editing */}
                <div className="management-card basic-info">
                    <h3>🛠️ Edit Basic Information</h3>
                    <div className="mini-form">
                        <label>Course Title</label>
                        <input 
                            type="text" 
                            value={courseInfo.title} 
                            onChange={(e) => setCourseInfo({...courseInfo, title: e.target.value})} 
                        />
                        <label>Description</label>
                        <textarea 
                            value={courseInfo.description} 
                            onChange={(e) => setCourseInfo({...courseInfo, description: e.target.value})}
                        ></textarea>
                        <button className="btn-update">Update Basic Info</button>
                    </div>
                </div>

                {/* Section 2: Content Management Actions */}
                <div className="management-card actions-hub">
                    <h3>📚 Course Content & Curriculum</h3>
                    <p>Manage your lessons, files, and student tasks.</p>
                    
                    <div className="action-buttons-list">
                        <button className="hub-btn modules" onClick={() => navigate('/instructor/add-modules')}>
                            <span className="icon">📂</span>
                            <div className="text">
                                <strong>Add Modules</strong>
                                <small>Videos & Lessons</small>
                            </div>
                        </button>

                        <button className="hub-btn assignments" onClick={() => navigate('/instructor/add-assignments')}>
                            <span className="icon">📝</span>
                            <div className="text">
                                <strong>Add Assignments</strong>
                                <small>Tasks for Students</small>
                            </div>
                        </button>

                        <button className="hub-btn notes" onClick={() => navigate('/instructor/upload-notes')}>
                            <span className="icon">📑</span>
                            <div className="text">
                                <strong>Upload Notes</strong>
                                <small>PDFs & Resources</small>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageCourse;