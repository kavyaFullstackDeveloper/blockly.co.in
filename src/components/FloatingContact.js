import React from 'react';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <div>
      {/* Left-side social icons */}
      <div className="social-icons position-absolute start-0 top-50 translate-middle-y d-flex flex-column ms-3 z-3">
        {['facebook', 'instagram', 'twitter', 'github', 'linkedin', 'telegram', 'snapchat'].map((icon, i) => (
          <a key={i} href="#" className="mb-2 icon-link" target="_blank" rel="noopener noreferrer">
            <i className={`bi bi-${icon}`}></i>
          </a>
        ))}
      </div>

      {/* Right-side email */}
      <div className="email-right position-absolute end-0 top-50 translate-middle-y me-3 z-3">
        <a href="mailto:sinhaanishkumar@outlook.com" className="email-link">
          sinhaanishkumar@outlook.com
        </a>
      </div>
    </div>
  );
};

export default FloatingContact;
