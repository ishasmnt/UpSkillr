import React, { useState } from 'react';
import { Star, Play, BookOpen, Award, TrendingUp, Search, ChevronRight, ChevronLeft, Check, X, Menu, User, Clock, Video, Users, Edit, Eye, PlusCircle, LogOut, DollarSign, MessageSquare } from 'lucide-react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <BookOpen size={20} />
              </div>
              <span className="footer-brand">UpSkillR</span>
            </div>
            <p className="footer-description">Empowering learners worldwide with quality education and expert-led courses.</p>
            <div className="footer-social">
              <button className="footer-social-btn">
                <span>f</span>
              </button>
              <button className="footer-social-btn">
                <span>𝕏</span>
              </button>
              <button className="footer-social-btn">
                <span>in</span>
              </button>
              <button className="footer-social-btn">
                <span>▶</span>
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">For Learners</h3>
            <ul className="footer-list">
              <li><button className="footer-list-btn">Browse Courses</button></li>
              <li><button className="footer-list-btn">My Learning</button></li>
              <li><button className="footer-list-btn">Progress Tracking</button></li>
              <li><button className="footer-list-btn">Certificates</button></li>
              <li><button className="footer-list-btn">Help Center</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">For Instructors</h3>
            <ul className="footer-list">
              <li><button className="footer-list-btn">Teach on UpSkillR</button></li>
              <li><button className="footer-list-btn">Create Course</button></li>
              <li><button className="footer-list-btn">Instructor Dashboard</button></li>
              <li><button className="footer-list-btn">Teaching Resources</button></li>
              <li><button className="footer-list-btn">Community</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-list">
              <li><button className="footer-list-btn">About Us</button></li>
              <li><button className="footer-list-btn">Careers</button></li>
              <li><button className="footer-list-btn">Press</button></li>
              <li><button className="footer-list-btn">Blog</button></li>
              <li><button className="footer-list-btn">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2024 UpSkillR. All rights reserved.</p>
            <div className="footer-links">
              <button className="footer-links-btn">Privacy Policy</button>
              <button className="footer-links-btn">Terms of Service</button>
              <button className="footer-links-btn">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer