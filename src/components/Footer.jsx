import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Ecommerce</h2>
          <p className="footer-text">© 2024 Ecommerce. All rights reserved.</p>
        </div>
        <div className="footer-section footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/login" className="footer-link">Login</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-section footer-social">
          <a href="facebook.com" className="footer-social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="twitter.com" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
          <a href="instagram.com" className="footer-social-icon"><i className="fab fa-instagram"></i></a>
          <a href="linkedin.com" className="footer-social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
