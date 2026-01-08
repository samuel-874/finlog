import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">💰</span>
              <span className="logo-text">Finlog</span>
            </div>
            <p className="footer-tagline">
              Your money, your rules, your future.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#features">Features</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><a href="mailto:support@finlog.app">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:support@finlog.app">support@finlog.app</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-link" aria-label="Facebook">f</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Finlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
