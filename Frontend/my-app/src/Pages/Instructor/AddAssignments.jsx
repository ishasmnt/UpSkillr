import React, { useState } from 'react';
import './AddAssignments.css';

const AddAssignments = () => {
    const [assignment, setAssignment] = useState({ title: '', deadline: '', instructions: '' });

    return (
        <div className="assignment-container">
            <h2>Create New Assignment</h2>
            <form className="assignment-form">
                <div className="input-group">
                    <label>Assignment Title</label>
                    <input type="text" placeholder="e.g. Build a Todo App" />
                </div>
                <div className="input-group">
                    <label>Submission Deadline</label>
                    <input type="date" />
                </div>
                <div className="input-group">
                    <label>Instructions</label>
                    <textarea rows="5" placeholder="Detailed instructions for students..."></textarea>
                </div>
                <button type="submit" className="btn-save">Post Assignment</button>
            </form>
        </div>
    );
};

export default AddAssignments;