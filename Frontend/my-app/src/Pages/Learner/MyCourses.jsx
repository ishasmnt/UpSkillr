import React from 'react';
import './MyCourses.css';

const MyCourses = () => {
    const myEnrolled = [
        { id: 1, title: "Full Stack Web Dev", progress: 60 }
    ];

    return (
        <div className="my-courses-container">
            <h2>My Enrolled Courses</h2>
            {myEnrolled.length > 0 ? (
                <div className="enrolled-grid">
                    {myEnrolled.map(course => (
                        <div key={course.id} className="enrolled-card">
                            <h3>{course.title}</h3>
                            <p>Progress: {course.progress}%</p>
                            <button className="play-btn">Continue Learning</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>You haven't enrolled in any courses yet.</p>
            )}
        </div>
    );
};

export default MyCourses;