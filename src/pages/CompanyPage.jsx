import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/CompanyPage.css";

const CompanyPage = () => {
  return (
    <div className="company-wrapper">
      <Helmet>
        <title>About Orque Innovations LLP</title>
        <meta
          name="description"
          content="Learn about the student-founded journey of Orque Innovations LLP, our mission for ethical software, and the passionate team behind our innovation."
        />
        <meta
          name="keywords"
          content="Orque Innovations, About Us, startup founders, company mission, ethical programming, Kerala IT startup, student-founded"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Orque Innovations LLP" />
        <link rel="canonical" href="https://orqueinnovations.com/company" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://orqueinnovations.com/company"
        />
        <meta
          property="og:title"
          content="About Orque Innovations LLP | Meet Our Founders & Vision"
        />
        <meta
          property="og:description"
          content="Discover how a group of passionate engineering students built Orque Innovations LLP to deliver ethical and impactful software solutions."
        />
        <meta
          property="og:image"
          content="https://orqueinnovations.com/orque-og-image.png"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://orqueinnovations.com/company"
        />
        <meta
          name="twitter:title"
          content="About Orque Innovations LLP | Meet Our Founders & Vision"
        />
        <meta
          name="twitter:description"
          content="Discover how a group of passionate engineering students built Orque Innovations LLP to deliver ethical and impactful software solutions."
        />
        <meta
          name="twitter:image"
          content="https://orqueinnovations.com/orque-og-image.png"
        />
      </Helmet>

      <Header />
      <div className="company-page">
        <h1 className="page-title" data-aos="fade-up">
          About Us
        </h1>
        {/* About Us Section */}
        <section className="about-us">
          <div className="about-content" data-aos="fade-up">
            <p>
              We are a group of passionate college students who started this
              venture in 2025 during our third year of engineering. As young
              innovators, we believe that ethics and responsibility are the
              foundation of great work. Our focus has always been on delivering
              quality projects with precision. We take pride in creating a team
              with care, precision, and a deep understanding of our clients'
              needs. With fresh ideas and a strong sense of dedication, we're
              building solutions that make a real impact.
            </p>
          </div>
          <div className="about-image" data-aos="fade-up">
            <img src="/images/about-image.png" alt="Team working" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission">
          <div className="mission-container">
            <div className="mission-image" data-aos="fade-up">
              <img src="/images/ourmission.png" alt="Mission" />
            </div>
            <div className="mission-step-content" data-aos="fade-up">
              <img src="/images/step.png" alt="Step" className="step-image" />
              <p>
                To promote ethical programming and quality student-driven
                innovation—ensuring every project reflects our commitment to
                learning, responsibility, and real-world impact.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision">
          <div className="vision-container">
            <div className="vision-image" data-aos="fade-up">
              <img src="/images/ourvision.png" alt="Vision" />
            </div>
            <div className="vision-step-content" data-aos="fade-up">
              <p>
                To become a trusted and innovative force in the industry by
                delivering impactful solutions that prioritize quality,
                integrity, and creativity—empowering businesses and responsible
                young professionals alike.
              </p>
              <img
                src="/images/vision.png"
                alt="Vision Step"
                className="vision-step-image"
              />
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="founders" data-aos="fade-up">
          <h2 className="founders-title">FOUNDERS</h2>
          <div className="founders-cards">
            <div className="founder-card">
              <img
                src="/images/krishna.jpg"
                alt="Krishna Prasad S M"
                className="founder-image"
              />
              <h3>Krishna Prasad S M</h3>
              <p>Chief Executive Officer</p>
            </div>
            <div className="founder-card">
              <img
                src="/images/aashish.jpg"
                alt="Aashish Shajahan"
                className="founder-image"
              />
              <h3>Aashish Shajahan</h3>
              <p>Chief Managing Director</p>
            </div>
            <div className="founder-card">
              <img
                src="/images/founder.jpg"
                alt="Sudhin Suresh"
                className="founder-image"
              />
              <h3>Sudhin Suresh</h3>
              <p>Chief Marketing Officer</p>
            </div>
            <div className="founder-card">
  <img
    src="/images/rizwan.jpeg"
    alt="Rizwan Shajahan"
    className="founder-image"
  />

  <div className="founder-name-wrapper">
    <h3 className="founder-name">Rizwan Shajahan</h3>
    <a
      href="https://www.linkedin.com/in/rizwanshajahan"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-icon-link"
      aria-label="LinkedIn Profile"
    >
      <img
        src="/images/linkedin.png"
        alt="LinkedIn"
        className="linkedin-icon"
        width="24"
        height="24"
      />
    </a>
  </div>

  <p>Chief Technical Officer</p>
</div>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyPage;
