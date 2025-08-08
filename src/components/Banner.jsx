import React from 'react';
import '../styles/Banner.css';
import awsLogo from '/images/aws.svg';
import notionLogo from '/images/notion.svg';
import bubbleLogo from '/images/bubble.svg';
import mongodbLogo from '/images/mongo.svg';

function Banner() {
    return (
        <section className="banner">
            <h3 className="banner-heading">Powered by</h3>
            <div className="logo-container">
                <img src={awsLogo} alt="AWS" className="logo aws-logo" />
                <img src={notionLogo} alt="Notion" className="logo notion-logo" />
                <img src={bubbleLogo} alt=".bubble" className="logo bubble-logo" />
                <img src={mongodbLogo} alt="MongoDB for Startups" className="logo mongodb-logo" />
            </div>
        </section>
    );
}

export default Banner;
