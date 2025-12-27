import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Master New Skills with <span className="highlight">UpSkillr</span></h1>
                    <p>
                        A lightweight platform for instructors to share knowledge and 
                        learners to grow their careers through structured modules.
                    </p>
                    <div className="hero-btns">
                        <Link to="/register" className="btn-primary">Get Started</Link>
                        <Link to="/courses" className="btn-secondary">Browse Courses</Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Placeholder for a professional illustration */}
                    <div className="image-blob"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="feature-card">
                    <div className="icon">🎓</div>
                    <h3>Expert Led</h3>
                    <p>Learn from industry professionals with real-world experience.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">🛠️</div>
                    <h3>Practical Projects</h3>
                    <p>Go beyond theory with hands-on assignments and notes.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">📈</div>
                    <h3>Track Progress</h3>
                    <p>Visual dashboards to monitor your learning journey in real-time.</p>
                </div>
            </section>

            {/* CTA Section for Instructors */}
            <section className="instructor-cta">
                <h2>Want to teach the world?</h2>
                <p>Join our community of instructors and create impactful courses today.</p>
                <Link to="/register" className="btn-outline">Become an Instructor</Link>
            </section>
        </div>
    );
};

export default Home;
