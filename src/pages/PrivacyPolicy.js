import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Last updated: January 9, 2026
          </p>
        </div>
      </div>

      <div className="privacy-content">
        <div className="container-narrow">
          <section className="privacy-section">
            <h2>Your Privacy Matters</h2>
            <p>
              At Finlog, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, protect, and handle your personal and financial information when you use our app.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you create a Finlog account, we collect:</p>
            <ul>
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Password (encrypted)</li>
              <li>Profile preferences</li>
            </ul>

            <h3>Financial Data</h3>
            <p>To provide our expense tracking services, we store:</p>
            <ul>
              <li>Transaction records (expenses and income)</li>
              <li>Budget information</li>
              <li>Category preferences</li>
              <li>Receipt images (if you choose to upload them)</li>
              <li>Currency preferences</li>
            </ul>

            <h3>Usage Information</h3>
            <p>We automatically collect certain information about how you use the app:</p>
            <ul>
              <li>Device information (type, operating system)</li>
              <li>App usage statistics</li>
              <li>Error reports and crash logs</li>
              <li>Feature usage patterns</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li><strong>Provide our services:</strong> Track your expenses, create budgets, generate reports, and sync your data across devices</li>
              <li><strong>Improve our app:</strong> Analyze usage patterns to enhance features and fix bugs</li>
              <li><strong>Communicate with you:</strong> Send important updates, security alerts, and respond to support requests</li>
              <li><strong>Ensure security:</strong> Protect your account from unauthorized access and fraudulent activity</li>
              <li><strong>Personalize your experience:</strong> Remember your preferences and settings</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Security</h2>
            <p>
              Your financial information is sensitive, and we protect it with industry-standard security measures:
            </p>
            <ul>
              <li><strong>Encryption:</strong> All data is encrypted both in transit (using TLS/SSL) and at rest</li>
              <li><strong>Secure servers:</strong> Your data is stored on secure cloud servers with regular backups</li>
              <li><strong>Access controls:</strong> Only you have access to your financial data</li>
              <li><strong>Regular security audits:</strong> We continuously monitor and improve our security practices</li>
              <li><strong>No third-party access:</strong> We never sell or share your personal financial data with third parties</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Sharing and Disclosure</h2>
            <h3>We Do NOT:</h3>
            <ul>
              <li>❌ Sell your personal or financial data to anyone</li>
              <li>❌ Share your data with advertisers</li>
              <li>❌ Use your data for marketing purposes without consent</li>
              <li>❌ Access your data unless necessary for support or security</li>
            </ul>

            <h3>We May Share Data Only When:</h3>
            <ul>
              <li><strong>You request it:</strong> When you export reports or share data with your accountant</li>
              <li><strong>Required by law:</strong> If legally obligated to comply with valid legal processes</li>
              <li><strong>Service providers:</strong> With trusted third-party services that help us operate the app (e.g., cloud hosting), under strict confidentiality agreements</li>
              <li><strong>Business transfers:</strong> In the event of a merger or acquisition, with advance notice to you</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Your Rights and Choices</h2>
            <p>You have complete control over your data:</p>
            <ul>
              <li><strong>Access:</strong> View all your personal and financial data at any time</li>
              <li><strong>Export:</strong> Download your complete data in standard formats (PDF, CSV)</li>
              <li><strong>Edit:</strong> Update or correct your information whenever you want</li>
              <li><strong>Delete:</strong> Permanently delete your account and all associated data</li>
              <li><strong>Opt-out:</strong> Disable optional features like analytics or notifications</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. If you delete your account, 
              we will permanently delete all your personal and financial data within 30 days, except 
              where we're required to retain certain information for legal or regulatory purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Finlog is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you believe we have inadvertently collected 
              such information, please contact us immediately.
            </p>
          </section>

          <section className="privacy-section">
            <h2>International Users</h2>
            <p>
              Finlog is available worldwide. If you use our app from outside the United States, 
              please note that your data may be transferred to and stored in the United States or 
              other countries where our service providers operate. We ensure appropriate safeguards 
              are in place to protect your data regardless of where it's processed.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Cookies and Tracking</h2>
            <p>
              We use minimal cookies and tracking technologies to:
            </p>
            <ul>
              <li>Keep you logged in</li>
              <li>Remember your preferences</li>
              <li>Analyze app performance</li>
            </ul>
            <p>
              You can control cookie settings through your device or browser settings. Note that 
              disabling certain cookies may limit app functionality.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of significant changes via email or in-app 
              notification. Your continued use of Finlog after changes are posted constitutes your 
              acceptance of the updated policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, 
              please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:support@finlog.app">support@finlog.app</a></p>
              <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
            </div>
            <p>
              We will respond to all privacy-related inquiries within 48 hours.
            </p>
          </section>

          <section className="privacy-section privacy-commitment">
            <h2>Our Commitment to You</h2>
            <p>
              At Finlog, your trust is our most valuable asset. We are committed to:
            </p>
            <ul>
              <li>✅ Protecting your financial privacy</li>
              <li>✅ Being transparent about our data practices</li>
              <li>✅ Giving you control over your information</li>
              <li>✅ Never selling your data</li>
              <li>✅ Continuously improving our security</li>
            </ul>
            <p className="commitment-note">
              <strong>Your money, your data, your privacy.</strong> That's the Finlog promise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
