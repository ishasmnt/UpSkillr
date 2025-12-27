import React, { useState } from 'react';
import './UploadNotes.css';

const UploadNotes = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [noteDetails, setNoteDetails] = useState({
        title: '',
        courseId: ''
    });

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        // Here you would call your notesController via notesService
        console.log("Uploading:", noteDetails, selectedFile);
        alert("Note uploaded successfully!");
    };

    return (
        <div className="upload-notes-wrapper">
            <div className="upload-card">
                <h2>Upload Course Resources</h2>
                <p className="description">Add PDF notes, cheat sheets, or slides for your learners.</p>

                <form onSubmit={handleUpload} className="upload-form">
                    <div className="form-group">
                        <label>Resource Title</label>
                        <input 
                            type="text" 
                            placeholder="e.g. React Cheat Sheet"
                            value={noteDetails.title}
                            onChange={(e) => setNoteDetails({...noteDetails, title: e.target.value})}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Select Course</label>
                        <select 
                            value={noteDetails.courseId}
                            onChange={(e) => setNoteDetails({...noteDetails, courseId: e.target.value})}
                            required
                        >
                            <option value="">Select a Course</option>
                            <option value="1">React for Beginners</option>
                            <option value="2">Advanced Node.js</option>
                        </select>
                    </div>

                    <div className="file-drop-zone">
                        <input 
                            type="file" 
                            id="file-upload" 
                            onChange={handleFileChange} 
                            accept=".pdf,.doc,.docx,.ppt"
                        />
                        <label htmlFor="file-upload" className="file-label">
                            <div className="upload-icon">📂</div>
                            {selectedFile ? (
                                <span className="file-name">{selectedFile.name}</span>
                            ) : (
                                <span>Click to select a file (PDF, DOC, PPT)</span>
                            )}
                        </label>
                    </div>

                    <button type="submit" className="upload-submit-btn" disabled={!selectedFile}>
                        Upload Resource
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UploadNotes;