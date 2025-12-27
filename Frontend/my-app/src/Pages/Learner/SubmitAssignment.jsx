import React from 'react';
import './SubmitAssignment.css';

const SubmitAssignment = () => {
    return (
        <div className="submit-assignment-container">
            <h2>Submit Assignment</h2>
            <div className="assignment-info">
                <h3>Task: Build a Login Form</h3>
                <p>Due Date: Dec 31, 2025</p>
            </div>
            <form className="submit-form">
                <label>Upload Solution (ZIP or PDF)</label>
                <input type="file" className="file-input" />
                <textarea placeholder="Any comments for the instructor?"></textarea>
                <button type="submit" className="submit-btn">Submit to Instructor</button>
            </form>
        </div>
    );
};

export default SubmitAssignment;