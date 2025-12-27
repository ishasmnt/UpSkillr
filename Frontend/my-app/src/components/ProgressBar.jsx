import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-wrapper">
            <div className="progress-outer">
                <div 
                    className="progress-inner" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <span className="progress-label">{progress}% Complete</span>
        </div>
    );
};

export default ProgressBar;