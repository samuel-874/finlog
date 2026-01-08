import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TestimonialSection from '../components/TestimonialSection';
import './LandingPage.css';

import trackExpensesImg from '../images/track-expenses.png';
import budgetPlanningImg from '../images/budget-planning.png';
import insightsImg from '../images/insights.png';

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />

      {/* Features Showcase */}
      <section id="features" className="features-section section-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="slide-up">Powerful Features for Smart Money Management</h2>
            <p className="section-subtitle slide-up">
              Everything you need to take control of your finances in one beautiful app
            </p>
          </div>

          <div className="features-grid">
            <FeatureCard
              icon={trackExpensesImg}
              title="Track Every Dollar"
              description="Log expenses as they happen, categorize spending, and attach receipts with a simple photo. Never wonder where your money went again."
              link={true}
            />
            <FeatureCard
              icon={budgetPlanningImg}
              title="Set Smart Budgets"
              description="Create monthly spending limits, get visual progress bars, and receive alerts when you're close to your limit. Stay on track effortlessly."
              link={true}
            />
            <FeatureCard
              icon={insightsImg}
              title="Get Insights"
              description="Beautiful charts and reports show your spending patterns. Discover trends, identify big expenses, and make smarter financial decisions."
              link={true}
            />
          </div>
        </div>
      </section>

      {/* Key Features Detailed */}
      <section className="detailed-features section">
        <div className="container">
          <div className="feature-row">
            <div className="feature-content slide-in-left">
              <div className="feature-badge">💸 Expense Tracking</div>
              <h3>Log Your Expenses in Seconds</h3>
              <p>
                Quickly add expenses as they happen with our intuitive interface. 
                Categorize spending, add notes, and even attach receipt photos. 
                Track both expenses and income to see your complete financial picture.
              </p>
              <ul className="feature-list">
                <li>✓ Quick expense entry</li>
                <li>✓ Custom categories with icons</li>
                <li>✓ Receipt photo attachments</li>
                <li>✓ Income tracking</li>
              </ul>
            </div>
            <div className="feature-visual slide-in-right">
              <div className="visual-card card-glass">
                <div className="visual-icon">📊</div>
                <h4>Real-time Updates</h4>
                <p>See your spending update instantly</p>
              </div>
            </div>
          </div>

          <div className="feature-row feature-row-reverse">
            <div className="feature-content slide-in-right">
              <div className="feature-badge">📊 Budget Management</div>
              <h3>Stay Within Your Budget</h3>
              <p>
                Set monthly spending limits for different categories and watch your 
                progress in real-time. Visual progress bars and smart alerts help you 
                avoid overspending before it happens.
              </p>
              <ul className="feature-list">
                <li>✓ Category-based budgets</li>
                <li>✓ Visual progress tracking</li>
                <li>✓ Smart spending alerts</li>
                <li>✓ Flexible budget adjustments</li>
              </ul>
            </div>
            <div className="feature-visual slide-in-left">
              <div className="visual-card card-glass">
                <div className="visual-icon">💡</div>
                <h4>Smart Insights</h4>
                <p>Understand your spending patterns</p>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-content slide-in-left">
              <div className="feature-badge">🔒 Privacy & Security</div>
              <h3>Your Data is Safe</h3>
              <p>
                Your financial information is encrypted and protected. We never sell 
                your data or show you ads. You own your data and can delete it anytime.
              </p>
              <ul className="feature-list">
                <li>✓ Encrypted data storage</li>
                <li>✓ Secure cloud backup</li>
                <li>✓ No ads or data selling</li>
                <li>✓ Complete data ownership</li>
              </ul>
            </div>
            <div className="feature-visual slide-in-right">
              <div className="visual-card card-glass">
                <div className="visual-icon">🛡️</div>
                <h4>Bank-Level Security</h4>
                <p>Your finances are protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses Finlog */}
      <section id="who-uses" className="who-uses-section section-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="slide-up">Who Uses Finlog?</h2>
            <p className="section-subtitle slide-up">
              Financial control for everyone, from students to families
            </p>
          </div>

          <div className="who-uses-grid">
            <div className="user-card">
              <div className="user-icon">👨‍🎓</div>
              <h3>Students</h3>
              <p>
                Track allowances, part-time job income, and expenses. 
                Learn good financial habits early and stay on budget.
              </p>
            </div>
            <div className="user-card">
              <div className="user-icon">👨‍💼</div>
              <h3>Young Professionals</h3>
              <p>
                Manage salary, subscriptions, and savings goals. 
                Build wealth intelligently with data-driven insights.
              </p>
            </div>
            <div className="user-card">
              <div className="user-icon">👨‍👩‍👧‍👦</div>
              <h3>Families</h3>
              <p>
                Track household expenses, manage family budgets, 
                and plan for the future together.
              </p>
            </div>
            <div className="user-card">
              <div className="user-icon">🎯</div>
              <h3>Anyone</h3>
              <p>
                If you've ever wondered "where did my money go?"—
                Finlog is for you. Take control today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Final CTA */}
      <section className="cta-section section-lg">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title slide-up">
              Start Your Financial Journey Today
            </h2>
            <p className="cta-subtitle slide-up">
              Take the first step toward financial freedom. Join thousands of users 
              who have transformed their relationship with money.
            </p>
            <div className="cta-buttons slide-up">
              <button className="btn btn-primary btn-lg">
                Get Started Free
              </button>
              <button className="btn btn-secondary btn-lg">
                View Demo
              </button>
            </div>
            <p className="cta-note">
              ✨ No credit card required • Free forever • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
