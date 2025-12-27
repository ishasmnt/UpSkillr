import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>UpSkillr</h3>
                    <p>Empowering learners through instructor-led excellence.</p>
                </div>
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2025 UpSkillr - EDU-WEB-2025-088. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;