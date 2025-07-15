import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/CompanyPage.css';

const CompanyPage = () => {
  return (
    <>
      <Header />
      <div className="company-page">
        <h1 className="page-title">About Us</h1>
        {/* About Us Section */}
        <section className="about-us">
          <div className="about-content">
            <p>We are a group of passionate college students who started this venture in 2025 during our third year of engineering. As young innovators, we believe that ethics and responsibility are the foundation of great work. Our focus has always been on delivering quality projects with precision. We take pride in creating a team with care, precision, and a deep understanding of our clients' needs. With fresh ideas and a strong sense of dedication, we're building solutions that make a real impact.</p>
          </div>
          <div className="about-image">
            <img src="/images/about-image.png" alt="Team working" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission">
          <div className="mission-container">
            <div className="mission-image">
              <img src="/images/ourmission.png" alt="Mission" />
            </div>
            <div className="mission-step-content">
              <img src="/images/step.png" alt="Step" className="step-image" />
              <p>To promote ethical programming and quality student-driven innovation—ensuring every project reflects our commitment to learning, responsibility, and real-world impact.</p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision">
          <div className="vision-container">
            <div className="vision-image">
              <img src="/images/ourvision.png" alt="Vision" />
            </div>
            <div className="vision-step-content">
              <p>To become a trusted and innovative force in the industry by delivering impactful solutions that prioritize quality, integrity, and creativity—empowering businesses and responsible young professionals alike.</p>
              <img src="/images/vision.png" alt="Vision Step" className="vision-step-image" />
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="founders">
          <h2 className="founders-title">FOUNDERS</h2>
          <div className="founders-cards">
            <div className="founder-card">
              <img src="/images/founder.png" alt="Krishna Prasad S M" className="founder-image" />
              <h3>Krishna Prasad S M</h3>
              <p>Chief Executive Officer</p>
            </div>
            <div className="founder-card">
              <img src="/images/aashish.jpg" alt="Aashish Shahjan" className="founder-image" />
              <h3>Aashish Shahjan</h3>
              <p>Chief Managing Director</p>
            </div>
            <div className="founder-card">
              <img src="/images/founder.png" alt="Sudhin Suresh" className="founder-image" />
              <h3>Sudhin Suresh</h3>
              <p>Chief Marketing Officer</p>
            </div>
            <div className="founder-card">
              <img src="/images/founder.png" alt="Rizwan Shahjan" className="founder-image" />
              <h3>Rizwan Shahjan</h3>
              <p>Chief Technical Officer</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;