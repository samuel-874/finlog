import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">Finlog</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('who-uses')}
            >
              About
            </button>
            <Link to="/privacy" className="nav-link">
              Privacy
            </Link>
            <a href="mailto:support@finlog.app" className="nav-link">
              Support
            </a>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
