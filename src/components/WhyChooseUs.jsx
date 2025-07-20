import React from "react";
import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="section3">
      <div className="section3-heading">
        <h2>Why Choose Us?</h2>
        <p>We blend agility, expertise, and purpose in every project.</p>
      </div>
      <div className="section3-bottom">
        {/* New freeform layout for images */}
        <div className="section3-floating-images">
          <img src="/images/image1.png" alt="reason 1" className="img1" />
          <img src="/images/image2.png" alt="reason 2" className="img2" />
          <img src="/images/image3.png" alt="reason 3" className="img3" />
          <img src="/images/image4.png" alt="reason 4" className="img4" />
        </div>

        {/* Keep the content as-is */}
        <div className="section3-content">
          <div className="section3-right">
            <p className="no">01</p>
            <h6>Quality-Driven Delivery</h6>
            <p className="para">
              We prioritize performance, scalability, and clean code in every
              project.
            </p>
          </div>
          <div className="section3-right">
            <p className="no">02</p>
            <h6>Problem-Solving Mindset</h6>
            <p className="para">
              We create solutions that are purpose-built to solve real
              challenges.
            </p>
          </div>
          <div className="section3-right">
            <p className="no">03</p>
            <h6>Agile & Transparent</h6>
            <p className="para">
              We follow agile methods with regular updates and collaborative
              feedback.
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
