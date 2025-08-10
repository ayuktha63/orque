import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = e.target.phone.value.trim();
    const countryVal = e.target.country.value.trim();

    // ✅ Name validation: only letters + spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(e.target.name.value)) {
      alert('Please enter a valid name (letters only).');
      return;
    }

    // ✅ Phone validation
    if (countryVal.toLowerCase() === 'india') {
      if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number for India.');
        return;
      }
    } else {
      if (!/^\+?[0-9\s\-]{7,15}$/.test(phone)) {
        alert('Please enter a valid international phone number.');
        return;
      }
    }

    setIsSending(true);

    // 📩 1. Send main form to you
    emailjs
      .sendForm(
        'service_sike2z5',     // Your Service ID
        'template_y6bkmdj',    // Template for YOU (admin notification)
        e.target,
        '5NsRaDUVCZclTOvvO'    // Public key
      )
      .then(() => {
        // ✅ Now send auto-reply to customer
        emailjs.send(
          'service_sike2z5',   // Same service ID
          'template_zq4liod',  // Auto-reply template for customer
          {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            country: e.target.country.value,
            serviceType: e.target.serviceType.value,
            message: e.target.message.value
          },
          '5NsRaDUVCZclTOvvO'
        );

        setIsSending(false);
        setPopupVisible(true);
        e.target.reset();
        setTimeout(() => setPopupVisible(false), 3000);
      })
      .catch((error) => {
        setIsSending(false);
        console.error('FAILED...', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="contact-page-wrapper">
      <Helmet>
        <title>Contact Orque Innovations</title>
        <meta
          name="description"
          content="Have a project in mind? Contact Orque Innovations LLP for scalable software, AI, or ERP solutions. Get in touch via phone, email, or our contact form."
        />
        <meta name="keywords" content="Contact Orque Innovations, ERP software, custom software, AI development, Kerala IT company" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Orque Innovations LLP" />
        <link rel="canonical" href="https://orqueinnovations.com/contact" />
      </Helmet>

      <Header />
      <div className="contact-content-section">
        <div className="contact-header">
          <h1>Get in touch with us</h1>
        </div>

        <div className="contact-main-area">
          {/* Left: Contact Form */}
          <form className="contact-form-box" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" className="contact-input" required />
            </div>

            <div className="contact-row">
              <div className="input-group">
                <label>Mobile Number</label>
                <input type="text" name="phone" placeholder="Enter your mobile number" className="contact-input" required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email id" className="contact-input" required />
              </div>
            </div>

            <div className="contact-row">
              <div className="input-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  className="contact-input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label>Service Type</label>
                <select name="serviceType" className="contact-input" required>
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="ERP Solutions">ERP Solutions</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea name="message" placeholder="Enter your message" className="contact-textarea" required></textarea>
            </div>

            <button type="submit" className="contact-submit-button" disabled={isSending}>
              {isSending ? 'Sending...' : 'Submit'}
            </button>
          </form>

          {/* Success Popup */}
          {popupVisible && (
            <div className="popup-message">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {/* Right: Map + Info */}
          <div className="contact-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3572393328304!2d76.94583107526044!3d8.464598297567743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb1610b98e73%3A0x1d1c077e73f83bcf!2sOrque%20Innovations%20LLP!5e0!3m2!1sen!2sin!4v1754830981296!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-frame"
              title="Orque Innovations LLP Location"
            ></iframe>

            <div className="contact-info-box">
              <p>
                <strong class="label">Address:</strong>
                Safa Towers, TC 69/55(4), Kamaleshwaram, Manacaud, Thiruvananthapuram, Kerala, 695009
              </p>
              <p>
                <strong class="label">Phone:</strong>
                +91 70122 56258
              </p>
              <p>
                <strong class="label">Email:</strong>
                orquesolutions@gmail.com<br />
                <span class="label"></span>info@orqueinnovations.com
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
