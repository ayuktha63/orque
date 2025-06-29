    import React from 'react';
    import '../styles/WhyChooseUs.css';

    function WhyChooseUs() {
        return (
            <section className="section3">
                <div className="section3-heading">
                    <h2>Why Choose Us?</h2>
                    <p>We blend agility, expertise, and purpose in every project.</p>
                </div>
                <div className="section3-bottom">
                    <div className="section3-img">
                        <img src="/images/section3.png" alt="" loading="lazy" />
                        <img src="/images/section3.png" alt="" loading="lazy" />
                        <img src="/images/section3.png" alt="" loading="lazy" />
                        <img src="/images/section3.png" alt="" loading="lazy" />
                    </div>
                    <div className="section3-content">
                        <div className="section3-right">
                            <p className="no">01</p>
                            <h6>Quality-Driven Delivery</h6>
                            <p className="para">
                                We prioritize performance, scalability, and clean code in every project.
                            </p>
                        </div>
                        <div className="section3-right">
                            <p className="no">02</p>
                            <h6>Problem-Solving Mindset</h6>
                            <p className="para">
                                We create solutions that are purpose-built to solve real challenges.
                            </p>
                        </div>
                        <div className="section3-right">
                            <p className="no">03</p>
                            <h6>Agile & Transparent</h6>
                            <p className="para">
                                We follow agile methods with regular updates and collaborative feedback.
                            </p>
                        </div>
                        <div className="section3-right">
                            <p className="no">04</p>
                            <h6>Full-Stack Expertise</h6>
                            <p className="para">
                                From frontend design to backend logic and AI, we cover it all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    export default WhyChooseUs;