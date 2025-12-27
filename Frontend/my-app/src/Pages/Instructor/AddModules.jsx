import React, { useState } from 'react';
import './AddModules.css';

const AddModules = () => {
    const [modules, setModules] = useState([{ title: '', videoUrl: '' }]);

    const addModuleField = () => {
        setModules([...modules, { title: '', videoUrl: '' }]);
    };

    return (
        <div className="add-modules-container">
            <div className="modules-header">
                <h2>Build Course Curriculum</h2>
                <p>Add lessons and video content to your course.</p>
            </div>

            <div className="modules-list">
                {modules.map((module, index) => (
                    <div key={index} className="module-item">
                        <span className="module-number">{index + 1}</span>
                        <input 
                            type="text" 
                            placeholder="Lesson Title (e.g. Introduction to React)" 
                            className="module-input"
                        />
                        <input 
                            type="text" 
                            placeholder="Video URL (YouTube/Vimeo)" 
                            className="module-input"
                        />
                    </div>
                ))}
            </div>

            <div className="modules-actions">
                <button onClick={addModuleField} className="btn-add-more">
                    + Add Another Lesson
                </button>
                <button className="btn-save-curriculum">Save Curriculum</button>
            </div>
        </div>
    );
};

export default AddModules;