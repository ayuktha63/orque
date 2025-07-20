import React from 'react';
import '../styles/ContactBanner.css';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

function ContactBanner() {
    return (
        <section className="contact-banner">
            <div className="contact-content">
                <div className="badge">
                    <HiOutlineSpeakerphone size={18} />
                    <span>We are available 24 Hours</span>
                </div>
                <h2>Have a Project in Mind? Let’s Talk</h2>
                <p>
                    We design and develop custom software, intelligent AI systems, and modern websites that help businesses scale and innovate. Whether you're starting from scratch or improving an existing solution, we’ll craft a tailored approach to bring your vision to life.
                </p>
                <a href="/contact" className="contact-btn">
                    <FiPhoneCall size={20} />
                    <span>Contact Us</span>
                </a>
            </div>
        </section>
    );
}

export default ContactBanner;