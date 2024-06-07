import React from 'react';
import Nav from './nav/Nav';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div id="header-content">
        <Nav />
        <div className="header-main">
          <div className="header-left">
            <div className="profileOverlay"></div>
            <div className="name-profile">
              <h2>Hi, I am</h2>
              <h1>Tomasz Gajda</h1>
              <p>Front-end Developer / UI Designer</p>
              <div className="social-handles1">
                <div className="icons">
                  <img src="../src/assets/icons/@-icon.svg" alt="" />
                </div>
                <div className="icons">
                  <img src="../src/assets/icons/github-02.svg" alt="" />
                </div>
                <div className="icons">
                  <img src="../src/assets/icons/linkedin-02-02.svg" alt="" />
                </div>
              </div>
              <div className="social-handles2">
                <div className="icons">
                  <img src="../src/assets/icons/@-icon_white.svg" alt="" />
                </div>
                <div className="icons">
                  <img src="../src/assets/icons/github-02_white.svg" alt="" />
                </div>
                <div className="icons">
                  <img
                    src="../src/assets/icons/linkedin-02-02_white.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <img src="../src/assets/imgs/profile_picture.png" alt="" />
            <p>
              this is not my photo, but I dearly hope to get one just like this{' '}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
