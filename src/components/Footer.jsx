import React from 'react';
import './Footer.css'; // Ensure to include this CSS file for additional styling if necessary

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo-container">
            <img src="/src/images/nicstechindia-1.webp" alt="NICS TECHNOLOGY Logo" className="footer-logo" />
            <span className="footer-logo-text">NICS TECHNOLOGY</span>
          </div>
          <p>&copy; {new Date().getFullYear()} NICS TECHNOLOGY. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p><strong>Our Address:</strong> 3rd Floor, Bhavani Market, Noida Sector 18, Atta Market, Pocket E, Sector 18, Noida, Uttar Pradesh 201301</p>
          <p><strong>Mob:</strong> +91-8920364846, +91-120-4692636</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
