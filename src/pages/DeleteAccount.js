import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DeleteAccount.css';

function DeleteAccount() {
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the request to your backend
    setSubmitted(true);
  };

  return (
    <div className="delete-account-page">
      <div className="delete-hero">
        <div className="container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="delete-title">Account Deletion</h1>
          <p className="delete-subtitle">
            We're sorry to see you go
          </p>
        </div>
      </div>

      <div className="delete-content">
        <div className="container-narrow">
          <section className="appreciation-section">
            <div className="appreciation-card">
              <div className="appreciation-icon">💙</div>
              <h2>Thank You for Being Part of Finlog</h2>
              <p>
                We truly appreciate the time you've spent with us. Your trust in managing your 
                finances with Finlog means the world to us. While we're sad to see you go, we 
                respect your decision and want to make this process as smooth as possible.
              </p>
              <div className="appreciation-stats">
                <div className="stat-item">
                  <span className="stat-icon">🔒</span>
                  <span className="stat-text">Your data is safe with us</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⏱️</span>
                  <span className="stat-text">Deletion takes 24 hours</span>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">✨</span>
                  <span className="stat-text">You're always welcome back</span>
                </div>
              </div>
            </div>
          </section>

          <section className="delete-section">
            <h2>Before You Go</h2>
            <div className="info-box">
              <h3>⚠️ Important Information</h3>
              <ul>
                <li><strong>Deletion Timeline:</strong> Your account will be permanently deleted within 24 hours of submitting this request</li>
                <li><strong>Data Removal:</strong> All your personal information, transactions, budgets, and reports will be permanently erased</li>
                <li><strong>No Recovery:</strong> Once deleted, your data cannot be recovered. Please export any important data before proceeding</li>
                <li><strong>Active Subscriptions:</strong> Any active subscriptions will be cancelled automatically</li>
              </ul>
            </div>

            <div className="export-reminder">
              <h3>📥 Don't Forget to Export Your Data</h3>
              <p>
                Before deleting your account, you may want to download your financial data for your records. 
                You can export your data in PDF or CSV format from your account settings.
              </p>
            </div>
          </section>

          {!submitted ? (
            <section className="delete-section">
              <h2>Request Account Deletion</h2>
              <p className="form-intro">
                Please fill out the form below to request account deletion. We'd love to hear 
                your feedback to help us improve Finlog for others.
              </p>

              <form className="deletion-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                  <small>Please enter the email associated with your account</small>
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Reason for Leaving *</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a reason...</option>
                    <option value="not-using">Not using the app anymore</option>
                    <option value="missing-features">Missing features I need</option>
                    <option value="too-expensive">Too expensive</option>
                    <option value="privacy-concerns">Privacy concerns</option>
                    <option value="switching-app">Switching to another app</option>
                    <option value="technical-issues">Technical issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="feedback">Additional Feedback (Optional)</label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="We'd love to hear how we could have served you better..."
                    rows="5"
                  />
                  <small>Your feedback helps us improve Finlog for everyone</small>
                </div>

                <div className="form-actions">
                  <Link to="/" className="btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn-danger">
                    Request Account Deletion
                  </button>
                </div>
              </form>
            </section>
          ) : (
            <section className="delete-section">
              <div className="confirmation-card">
                <div className="confirmation-icon">✅</div>
                <h2>Deletion Request Received</h2>
                <p>
                  We've received your account deletion request for <strong>{formData.email}</strong>.
                </p>
                <div className="timeline-info">
                  <h3>What Happens Next?</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-marker">1</div>
                      <div className="timeline-content">
                        <h4>Confirmation Email</h4>
                        <p>You'll receive a confirmation email within the next few minutes</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker">2</div>
                      <div className="timeline-content">
                        <h4>Grace Period (24 hours)</h4>
                        <p>You have 24 hours to cancel this request if you change your mind</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker">3</div>
                      <div className="timeline-content">
                        <h4>Account Deletion</h4>
                        <p>After 24 hours, your account and all data will be permanently deleted</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="final-message">
                  <p>
                    Thank you for being part of the Finlog community. We hope to see you again in the future! 💜
                  </p>
                  <Link to="/" className="btn-primary">
                    Return to Home
                  </Link>
                </div>
              </div>
            </section>
          )}

          <section className="delete-section alternatives-section">
            <h2>Looking for Alternatives?</h2>
            <p>
              Before you delete your account, consider these options that might address your concerns:
            </p>
            <div className="alternatives-grid">
              <div className="alternative-card">
                <div className="alternative-icon">⏸️</div>
                <h3>Pause Your Account</h3>
                <p>Take a break without losing your data. You can reactivate anytime.</p>
              </div>
              <div className="alternative-card">
                <div className="alternative-icon">🔔</div>
                <h3>Adjust Notifications</h3>
                <p>Reduce email and push notifications to only what matters to you.</p>
              </div>
              <div className="alternative-card">
                <div className="alternative-icon">💬</div>
                <h3>Contact Support</h3>
                <p>Our team is here to help resolve any issues you're experiencing.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
