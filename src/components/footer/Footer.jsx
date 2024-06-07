import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#logo">
          <img src="../src/assets/icons/ic_baseline-double-arrow.svg" alt="" />
          <h4>Back to top</h4>
        </a>
        <div className="socials">
          <img src="../src/assets/icons/fb-icon.svg" alt="" />
          <img src="../src/assets/icons/linkedin-icon2.svg" alt="" />
          <img src="../src/assets/icons/instagram-icon.svg" alt="" />

          <img src="../src/assets/icons/email-icon.svg" alt="" />
        </div>
        <p className="sm-text-p">@2024 Witty Umosung All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
