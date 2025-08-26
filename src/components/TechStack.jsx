import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles/TechStack.css';

function TechStack() {
    const techLogos = [
        { src: '/images/flutter.svg', alt: 'Flutter' },
        { src: '/images/firebase.svg', alt: 'Firebase' },
        { src: '/images/python1.svg', alt: 'Python'  },
        { src: '/images/figma2.svg', alt: 'Figma' },
        { src: '/images/tensor.svg', alt: 'TensorFlow' }
    ];

    return (
        <section className="tech-banner" data-aos="fade-up">
            <h2>Our Tech Stack</h2>

            {/* Desktop View */}
            <div className="icons-coll desktop-only">
                {techLogos.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt}   / >
                ))}
            </div>

            {/* Mobile View - Swiper Carousel */}
            <div className="swiper-wrapper-mobile mobile-only">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2.5}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                    }}
                >
                    {techLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <img src={logo.src} alt={logo.alt} className="tech-logo" loading="lazy" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default TechStack;