import React from 'react';
import '../styles/Banner.css'

function Banner() {
    return (
        <section className="banner">
            <div className="content1">
                <p>Employees</p>
                <h1>5+</h1>
            </div>
            <div className="content1">
                <p>Founded</p>
                <h1>2025</h1>
            </div>
            <div className="content1">
                <p>Product in Development</p>
                <h1>1+</h1>
            </div>
            <div className="content1">
                <p>Incubated At</p>
                <h1>MBCET</h1>
            </div>
        </section>
    );
}

export default Banner;