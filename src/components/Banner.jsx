import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../styles/Banner.css';

import awsLogo from '/images/aws.svg';
import notionLogo from '/images/notion.svg';
import bubbleLogo from '/images/bubble.svg';
import mongodbLogo from '/images/mongo.svg';

function Banner() {
    const logos = [
        { src: awsLogo, alt: 'AWS Startups', className: 'aws-logo' },
        { src: notionLogo, alt: 'Notion', className: 'notion-logo' },
        { src: bubbleLogo, alt: '.bubble', className: 'bubble-logo' },
        { src: mongodbLogo, alt: 'MongoDB for Startups', className: 'mongodb-logo' },
    ];

    return (
        <section className="banner">
            <h3 className="banner-heading">Powered by</h3>

            {/* Desktop View */}
            <div className="logo-container desktop-only">
                {logos.map((logo, i) => (
                    <img key={i} src={logo.src} alt={logo.alt} className={`logo ${logo.className}`} />
                ))}
            </div>

            {/* Mobile View - Swiper Carousel */}
            <div className="mobile-only">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2.5}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={true}
                >
                    {logos.map((logo, i) => (
                        <SwiperSlide key={i}>
                            <img src={logo.src} alt={logo.alt} className={`logo ${logo.className}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Banner;
