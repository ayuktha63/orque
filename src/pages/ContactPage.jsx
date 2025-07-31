import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page-wrapper">
      <Helmet>
        <title>Contact Orque Innovations | Talk to Our Software Experts</title>
        <meta
          name="description"
          content="Have a project in mind? Contact Orque Innovations LLP for scalable software, AI, or ERP solutions. Get in touch via phone, email, or our contact form."
        />
        <meta name="keywords" content="Contact Orque Innovations, ERP software, custom software, AI development, Kerala IT company" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Orque Innovations LLP" />
        <link rel="canonical" href="https://orqueinnovations.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orqueinnovations.com/contact" />
        <meta property="og:title" content="Contact Orque Innovations | Talk to Our Software Experts" />
        <meta property="og:description" content="Need custom software or ERP services? Reach out to Orque Innovations LLP via our contact form or visit us in Thiruvananthapuram, Kerala." />
        <meta property="og:image" content="https://orqueinnovations.com/orque-og-image.png" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://orqueinnovations.com/contact" />
        <meta name="twitter:title" content="Contact Orque Innovations | Talk to Our Software Experts" />
        <meta name="twitter:description" content="Need custom software or ERP services? Reach out to Orque Innovations LLP via our contact form or visit us in Thiruvananthapuram, Kerala." />
        <meta name="twitter:image" content="https://orqueinnovations.com/orque-og-image.png" />
      </Helmet>

      <Header />
      <div className="contact-content-section">
        <div className="contact-header">
          <h1>Get in touch with us</h1>
        </div>

        <div className="contact-main-area">
          {/* Left: Contact Form */}
          <form className="contact-form-box">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" className="contact-input" />
            </div>

            <div className="contact-row">
              <div className="input-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter your mobile number" className="contact-input" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email id" className="contact-input" />
              </div>
            </div>

            <div className="contact-row">
              <div className="input-group">
                <label>Country</label>
                <input type="text" placeholder="Enter your country" className="contact-input" />
              </div>
              <div className="input-group">
                <label>Service Type</label>
                <input type="text" placeholder="Enter your service type" className="contact-input" />
              </div>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Enter your message" className="contact-textarea"></textarea>
            </div>

            <button type="submit" className="contact-submit-button">Submit</button>
          </form>

          {/* Right: Map + Info */}
          <div className="contact-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4033.441467817352!2d76.94868467507585!3d8.490333097188092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1610b98e73%3A0x1d1c077e73f83bcf!2sOrque%20Innovations%20LLP!5e1!3m2!1sen!2sin!4v1751184927833!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-frame"
              title="Orque Innovations LLP Location"
            ></iframe>

            <div className="contact-info-box">
              <p><strong>Address:</strong> SS Kovil Road, Thambanoor, Kumli Lane, Thiruvananthapuram, Kerala, Pin: 695001</p>
              <p><strong>Phone:</strong> +91 70122 56258</p>
              <p><strong>Email:</strong> orquesolutions@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
