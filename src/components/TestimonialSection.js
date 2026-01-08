import React from 'react';
import './TestimonialSection.css';

function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "College Student",
      avatar: "👩‍🎓",
      text: "Finlog helped me track my part-time job income and manage my student budget. I finally know where my money goes!"
    },
    {
      name: "James K.",
      role: "Young Professional",
      avatar: "👨‍💼",
      text: "The budget alerts keep me on track. I've saved 30% more this year thanks to Finlog's insights.",
      featured: true
    },
    {
      name: "Maria L.",
      role: "Freelancer",
      avatar: "👩‍💻",
      text: "Managing multiple income streams is so much easier now. The reports are perfect for tax season!"
    },
    {
      name: "David R.",
      role: "Family Dad",
      avatar: "👨‍👩‍👧",
      text: "Our whole family uses Finlog. It's helped us save for our dream vacation!"
    }
  ];

  const featuredTestimonial = testimonials.find(t => t.featured);
  const otherTestimonials = testimonials.filter(t => !t.featured);

  return (
    <section className="testimonial-section section-lg">
      <div className="container">
        <div className="testimonial-header text-center">
          <h2 className="slide-up">What Our Users Say</h2>
          <p className="testimonial-subtitle slide-up">
            Join thousands of people taking control of their finances
          </p>
        </div>

        <div className="testimonial-content">
          <div className="testimonial-avatars">
            {otherTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`avatar-circle avatar-${index + 1}`}
                title={`${testimonial.name} - ${testimonial.role}`}
              >
                <span className="avatar-emoji">{testimonial.avatar}</span>
              </div>
            ))}
            <div className="curved-text-testimonial">
              <svg viewBox="0 0 400 400" className="curved-svg">
                <path
                  id="testimonial-curve"
                  d="M 50,200 A 150,150 0 1,1 350,200"
                  fill="transparent"
                />
                <text className="curved-text-path-testimonial">
                  <textPath href="#testimonial-curve" startOffset="50%" textAnchor="middle">
                    ⭐ Trusted by Thousands ⭐
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {featuredTestimonial && (
            <div className="featured-testimonial glass-dark">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{featuredTestimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{featuredTestimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{featuredTestimonial.name}</div>
                  <div className="author-role">{featuredTestimonial.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
