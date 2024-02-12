import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>

                <div className="hero-btn">
                    <button className="red-btn">Shop Now </button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img
                            src="https://i.postimg.cc/m29ktBPt/flipkart.png"
                            alt="amazon-logo"
                        />
                        <img
                            src="https://i.postimg.cc/RhMdqXR0/amazon.png"
                            alt="flipkart-logo"
                        />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="https://i.postimg.cc/vTSdSD8L/shoe-image.png" />
            </div>
        </main>
    );
}

export default Hero;
