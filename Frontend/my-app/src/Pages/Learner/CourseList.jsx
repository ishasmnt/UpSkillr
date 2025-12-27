import React, { useState } from 'react';
import './CourseList.css';
import CourseCard from '../../components/CourseCard';

const CourseList = () => {
    // Mock data for UI development
    const [courses] = useState([
        { id: 1, title: "Fullstack MERN Development", category: "Web Development", instructor: "Shraddha Desai", price: "Free" },
        { id: 2, title: "UI/UX Design Masterclass", category: "Design", instructor: "Isha Sawant", price: "Free" },
        { id: 3, title: "Data Structures & Algorithms", category: "Programming", instructor: "Dr. Ramesh", price: "Free" }
    ]);

    return (
        <div className="course-list-page">
            <header className="search-banner">
                <h1>Unlock Your Potential</h1>
                <input 
                    type="text" 
                    placeholder="Search for your next skill (e.g. React, Node...)" 
                    className="search-bar" 
                />
            </header>

            <div className="filter-container">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Web Development</button>
                <button className="filter-btn">Design</button>
                <button className="filter-btn">Programming</button>
            </div>

            <div className="course-grid">
                {courses.length > 0 ? (
                    courses.map(course => (
                        <CourseCard key={course.id} course={course} isInstructor={false} />
                    ))
                ) : (
                    <div className="no-courses">
                        <h3>No courses found</h3>
                        <p>Try searching for something else.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseList;