import React from 'react';
import './portfolio.scss';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="all-coded-design">
        <div className="all-coded-design-content">
          <h4 className="active-border active-color">All</h4>
          <h4>Coded</h4>
          <h4>Design</h4>
        </div>
      </div>
      <div className="portfolio-section">
        <h2>Portfolio</h2>
      </div>
      <div className="jobs-done">
        <img src="../src/assets/icons/Project1.png" alt="" />

        <div className="text-on-top-container">
          <img src="../src/assets/icons/Project2.png" alt="" />
          <div className="text-on-top">
            <p className="coded-design">coded, designed</p>
            <h3 className="eatsome">eatsome.</h3>
            <p>Restaurant browsing in React.js (Using Yelp API)</p>
            <div className="demo-more">
              <h4>Demo</h4>
              <h4>More</h4>
            </div>
          </div>
        </div>

        <img src="../src/assets/icons/Project3.png" alt="" />
        <img src="../src/assets/icons/Project4.png" alt="" />
        <img src="../src/assets/icons/Project5.png" alt="" />
        <img src="../src/assets/icons/Project1.png" alt="" />
      </div>
      <div className="footer-portfolio">
        <p>And many more to come...</p>
      </div>
    </div>
  );
};

export default Portfolio;
