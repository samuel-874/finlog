import React from 'react';
import './FeatureCard.css';

function FeatureCard({ icon, title, description, gradient, link }) {
  return (
    <div className={`feature-card ${gradient ? 'feature-card-gradient' : ''}`}>
      <div className="feature-icon-wrapper">
        {typeof icon === 'string' && icon.startsWith('/') ? (
          <img src={icon} alt={title} className="feature-icon-image" />
        ) : (
          <div className="feature-icon">{icon}</div>
        )}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
      {link && (
        <button className="feature-link">
          Learn More →
        </button>
      )}
    </div>
  );
}

export default FeatureCard;
