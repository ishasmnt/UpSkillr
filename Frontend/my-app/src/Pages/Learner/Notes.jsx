import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
    // This will be fetched from backend/routes/notesRoutes.js
    const [notes] = useState([
        { id: 1, title: 'React Hooks Cheat Sheet', type: 'PDF', size: '1.2 MB' },
        { id: 2, title: 'Backend Architecture Slides', type: 'PPTX', size: '4.5 MB' }
    ]);

    return (
        <div className="notes-container">
            <header className="notes-header">
                <h2>Study Resources</h2>
                <p>Download notes and materials provided by your instructors.</p>
            </header>

            <div className="notes-list">
                {notes.map(note => (
                    <div key={note.id} className="note-item">
                        <div className="note-info">
                            <span className="file-icon">📄</span>
                            <div>
                                <h4>{note.title}</h4>
                                <small>{note.type} • {note.size}</small>
                            </div>
                        </div>
                        <button className="btn-download">Download</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;