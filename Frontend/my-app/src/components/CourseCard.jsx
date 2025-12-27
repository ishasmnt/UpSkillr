import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course, isInstructor }) => {
    const navigate = useNavigate();

    const handleAction = () => {
        if (isInstructor) {
            // If instructor, go to manage page
            navigate(`/instructor/manage-course/${course.id}`);
        } else {
            // If learner, go to the player/details
            navigate(`/learner/course-player`);
        }
    };

    return (
        <div className="course-card">
            <div className="card-image">
                {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title} />
                ) : (
                    <div className="image-placeholder">📚</div>
                )}
            </div>
            
            <div className="card-content">
                <span className="category-tag">{course.category || 'General'}</span>
                <h4 className="course-title">{course.title}</h4>
                <p className="instructor-name">By {course.instructor || 'UpSkillr Expert'}</p>
                
                <div className="card-footer">
                    <span className="course-price">
                        {course.price === 0 || course.price === 'Free' ? 'FREE' : `$${course.price}`}
                    </span>
                    <button className="btn-action" onClick={handleAction}>
                        {isInstructor ? 'Edit Course' : 'Enroll Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;