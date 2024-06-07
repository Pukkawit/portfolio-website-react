import React, { useState } from 'react';
import './nav.scss';

const Nav = () => {
  let [toggleFloatingMenu, setToggleFloatingMenu] = useState(false);

  function handleToggle() {
    setToggleFloatingMenu(!toggleFloatingMenu);
    const open = toggleFloatingMenu;

    if (open) {
      document.getElementById('menu').style.display = 'flex';
      document.querySelector('.open').classList.add('hide');
      document.querySelector('.close').classList.remove('hide');
    } else {
      document.getElementById('menu').style.display = 'none';
      document.querySelector('.open').classList.remove('hide');
      document.querySelector('.close').classList.add('hide');
    }
  }
  return (
    <nav id="nav">
      <a href="/">
        <img
          className="logo"
          src="../src/assets/icons/logo_website.svg"
          alt=""
          id="logo"
        />
        <img
          className="logo logo-white"
          src="../src/assets/icons/logo-white.svg"
          alt=""
          id="logo"
        />
      </a>
      <div className="toggle" onClick={() => handleToggle()}>
        <span className="close hide">&#10006;</span>
        <span className="open">&#9776;</span>
      </div>
      <ul id="menu">
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li className="contact-me">
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
