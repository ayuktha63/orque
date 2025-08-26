import React, { useState } from 'react';
import '../styles/Services.css';

function Services() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section2" id="Services" data-aos="fade-up" style={{ scrollMarginTop: '100px' }}>
            <div className="left-section2" data-aos="fade-up">
                <h3>Creating What Comes Next</h3>
                <p>
                    Ready to transform your business with cutting-edge technology? We partner with
                    forward-thinking teams to design and deliver scalable digital solutions that solve
                    real-world problems. Whether it’s a custom software application, a seamless mobile
                    experience, intelligent analytics, or cloud infrastructure, we bring the clarity,
                    speed, and expertise needed to build what’s next.
                </p>
                <div className="expanded-section">
                    <div className="sections">
                        <h4>Website Development</h4>
                        <img
                            src="/images/triangle.webp"
                            className={`toggle-btn ${openIndex === 0 ? 'rotated' : ''}`}
                            onClick={() => toggleAccordion(0)}
                            alt="toggle"
                            loading="lazy"
                        />
                    </div>
                    <div className={`accordion-content ${openIndex === 0 ? 'open' : ''}`}>
                        <p>
                            We build responsive, SEO-optimized, and high-performance web applications using
                            modern technologies like React, Next.js, and Tailwind CSS. Our websites are
                            designed with a mobile-first approach, fast load times, and robust frontend/backend
                            integration to deliver seamless user experiences.
                        </p>
                    </div>
                    <div className="sections">
                        <h4>Artificial Intelligence</h4>
                        <img
                            src="/images/triangle.webp"
                            className={`toggle-btn ${openIndex === 1 ? 'rotated' : ''}`}
                            onClick={() => toggleAccordion(1)}
                            alt="toggle"
                            loading="lazy"
                        />
                    </div>
                    <div className={`accordion-content ${openIndex === 1 ? 'open' : ''}`}>
                        <p>
                            Our AI capabilities focus on building intelligent systems using machine learning,
                            natural language processing (NLP), and predictive analytics. We create custom AI
                            models and integrate them into your applications to automate processes, extract
                            insights from data, and enhance decision-making at scale.
                        </p>
                    </div>
                    <div className="sections">
                        <h4>Software Development</h4>
                        <img
                            src="/images/triangle.webp"
                            className={`toggle-btn ${openIndex === 2 ? 'rotated' : ''}`}
                            onClick={() => toggleAccordion(2)}
                            alt="toggle"
                            loading="lazy"
                        />
                    </div>
                    <div className={`accordion-content ${openIndex === 2 ? 'open' : ''}`}>
                        <p>
                            We design and develop scalable, high-performance software solutions tailored to
                            your specific business workflows. Our expertise spans full-stack development,
                            RESTful APIs, microservices architecture, and database design — ensuring your
                            systems are secure, modular, and built for long-term maintainability.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-section2" data-aos="fade-up">
                <h2>Our Services</h2>
                <img src="/images/services.webp" alt="services" loading="lazy" />
            </div>
        </section>
    );
}

export default Services;