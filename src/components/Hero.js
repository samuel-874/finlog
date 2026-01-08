import React from 'react';
import './Hero.css';
import heroImage from '../images/hero-phone.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge slide-in-left">
              <span>💰</span> Personal Finance Made Simple
            </div>
            <h1 className="hero-title slide-up">
              Take Control of Your <span className="text-gradient">Finances</span>
            </h1>
            <p className="hero-subtitle slide-up">
              Track spending, save money, and achieve your financial goals with Finlog—your personal finance companion that makes managing money simple and intuitive.
            </p>
            <div className="hero-cta slide-up">
              <button className="btn btn-primary btn-lg">
                Get Started Free
              </button>
              <button className="btn btn-secondary btn-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image-container slide-in-right">
            <div className="hero-image-wrapper float">
              <img src={heroImage} alt="Finlog App Interface" className="hero-image" />
            </div>
            <div className="curved-text">
              <svg viewBox="0 0 500 500" className="curved-text-svg">
                <path
                  id="curve"
                  d="M 50,250 A 200,200 0 0,1 450,250"
                  fill="transparent"
                />
                <text className="curved-text-path">
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    ✨ Track • Budget • Save • Grow ✨
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
