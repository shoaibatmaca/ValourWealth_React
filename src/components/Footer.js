import React from "react";
import "../styles/footer.css"; 
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - About */}
        <div className="footer-left">
          <h2 className="footer-logo-title">Valour Wealth</h2>
          <p className="footer-text">
            Headquartered in London. ValourWealth delivers unparalleled access to market tools with over 50 billion
            events processed daily.
          </p>

          {/* Subscribe Form */}
          <div className="footer-subscribe">
            <h3 className="subscribe-title">Subscribe</h3>
            <form className="footer-form">
              <input type="email" placeholder="Your Email" required className="footer-input" />
              <button type="submit" className="footer-join-btn">Join!</button>
            </form>
          </div>
        </div>

        {/* Middle Section - Menu */}
        <div className="footer-middle">
        <h3 className="footer-title">Menu</h3>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Technology</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/leave-a-review">Leave a Review</Link></li>
        </ul>
      </div>

        {/* Right Section - Pages */}
        <div className="footer-right">
        <h3 className="footer-title">Pages</h3>
        <ul className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms Of Service</Link></li>
          <li><Link to="/acceptable-use-policy">Acceptable Use Policy</Link></li>
          <li><Link to="/legal-disclaimer">Legal Disclaimer</Link></li>
        </ul>
      </div>

        <div className="contact-menu">
          <h3 className="footer-title" style={{textAlign: "left"}}>Contact</h3>
          <ul className="footer-links" style={{textAlign: "left"}}>
          <li> <a href="mailto:your-email@example.com">Contact@valourwealth.com</a></li>
          <li> <a href="tel:+1234567890">+1 414 485 8800</a></li>
          </ul>

        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        {/* <a href="https://twitter.com/tradealgo_" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          Twitter
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
