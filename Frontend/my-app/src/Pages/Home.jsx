import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Users, BookOpen, Award, TrendingUp, Play } from 'lucide-react';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import './Home.css';

const Home = ({ allCourses, onEnroll }) => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-badge">
            <span className="home-hero-badge-content">
              🎓 Welcome to UpSkillr
            </span>
          </div>
          
          <h1 className="home-hero-title">
            <span className="home-hero-title-main">LEARN & GROW</span>
            <br />
            <span className="home-hero-title-gradient">
              Master New Skills
            </span>
          </h1>
          
          <p className="home-hero-subtitle">
            Discover expert-led courses designed to help you achieve your learning goals and advance your career
          </p>
          
          <div className="home-hero-search">
            <div className="home-hero-search-content">
              <Search className="home-hero-search-icon" />
              <input 
                type="text" 
                placeholder="Search courses by name, instructor, or category..."
                className="home-hero-search-input"
              />
            </div>
          </div>
          
          <div className="home-hero-actions">
            <Button size="lg" onClick={() => navigate('/courses')}>
              Browse Courses <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/instructor')}>
              Become an Instructor
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="home-stats">
        <div className="home-stats-container">
          <div className="home-stats-grid">
            {[
              { value: '50K+', label: 'Active Learners', icon: Users },
              { value: '500+', label: 'Expert Courses', icon: BookOpen },
              { value: '200+', label: 'Top Instructors', icon: Award },
              { value: '95%', label: 'Success Rate', icon: TrendingUp }
            ].map((stat, i) => (
              <div key={i} className="home-stat-card">
                <div className="home-stat-icon">
                  <stat.icon />
                </div>
                <div className="home-stat-value">{stat.value}</div>
                <div className="home-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="home-courses">
        <div className="home-courses-container">
          <div className="home-courses-header">
            <h2 className="home-courses-title">Featured Courses</h2>
            <p className="home-courses-subtitle">Handpicked courses to accelerate your learning journey</p>
          </div>
          
          <div className="home-courses-grid">
            {allCourses && allCourses.slice(0, 4).map((course, i) => (
              <CourseCard 
                key={i} 
                course={course}
                onEnroll={() => onEnroll(course)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-how-it-works">
        <div className="home-how-it-works-container">
          <div className="home-how-it-works-header">
            <h2 className="home-how-it-works-title">How It Works</h2>
            <p className="home-how-it-works-subtitle">Three simple steps to start your learning journey</p>
          </div>
          
          <div className="home-steps-grid">
            {[
              { step: '01', title: 'Sign Up', description: 'Create your free account in seconds and explore our extensive course library', icon: Users },
              { step: '02', title: 'Enroll & Learn', description: 'Choose courses that match your goals and start learning at your own pace', icon: Play },
              { step: '03', title: 'Achieve & Grow', description: 'Complete courses, earn certificates, and showcase your new skills', icon: Award }
            ].map((item, i) => (
              <div key={i} className="home-step-card">
                <div className="home-step-number">
                  {item.step}
                </div>
                <div className="home-step-content">
                  <div className="home-step-icon">
                    <item.icon />
                  </div>
                  <h3 className="home-step-title">{item.title}</h3>
                  <p className="home-step-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <div className="home-cta-container">
          <h2 className="home-cta-title">Ready to Start Learning?</h2>
          <p className="home-cta-subtitle">Join thousands of learners transforming their careers with UpSkillr</p>
          <Button size="lg" onClick={() => setCurrentPage('courses')}>
            Explore All Courses <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
       {/* CTA Section for Instructors */}
            <section className="instructor-cta">
                <h2>Want to teach the world?</h2>
                <p>Join our community of instructors and create impactful courses today.</p>
                <Button size="lg" onClick={() => setCurrentPage('register')}>
                  Become an Instructor
                </Button>
            </section>
    </div>
  );
};

export default Home;