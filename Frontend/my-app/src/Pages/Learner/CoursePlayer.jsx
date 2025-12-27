import React, { useState } from 'react';
import './CoursePlayer.css';

const CoursePlayer = () => {
    const [activeLesson, setActiveLesson] = useState("Introduction");

    const lessons = ["Introduction", "Setting up Environment", "First Component", "State & Props"];

    return (
        <div className="player-layout">
            <div className="video-section">
                <div className="video-placeholder">
                    {/* In production, use <iframe src={activeLesson.videoUrl}> */}
                    <h2>Playing: {activeLesson}</h2>
                    <p>Video Content Loading...</p>
                </div>
                <div className="video-details">
                    <h3>About this lesson</h3>
                    <p>This lesson covers the fundamental concepts of your chosen course.</p>
                </div>
            </div>

            <aside className="lesson-sidebar">
                <h3>Course Content</h3>
                <ul>
                    {lessons.map((lesson, index) => (
                        <li 
                            key={index} 
                            className={activeLesson === lesson ? 'active' : ''}
                            onClick={() => setActiveLesson(lesson)}
                        >
                            {index + 1}. {lesson}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default CoursePlayer;