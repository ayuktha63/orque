import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <Header />
      <main className="contact-section">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-description">
          We'd love to hear from you! Fill out the form below or connect with us on social media.
        </p>

        <form className="contact-input-form">
          <input
            className="contact-input"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="contact-input"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-submit-button">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
