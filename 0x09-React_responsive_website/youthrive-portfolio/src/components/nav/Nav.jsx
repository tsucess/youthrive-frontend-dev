/* eslint-disable no-unused-vars */
import React from "react";
import logo from '../../assets/images/icon/logo.svg';
import blogo from '../../assets/images/icon/logo-black.svg';
import close from '../../assets/images/icon/closes.svg';
import hamburger from '../../assets/images/icon/ham.png';


const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand">
          <img className="logo-white" src={logo} alt="WHITE BRAND LOGO" />
          <img className="logo-black" src={blogo} alt="BLACK Brand LOGO" />
        </div>
      </div>
      <button type="button" className="toggle-btn">
        <img src={close} className="toggle-icon-close" alt="" />
        <img src={hamburger} className="toggle-icon-ham" alt="Ham-icon" />
      </button>
      <div className="nav-item">
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <div className="contact-btn">
          <a type="button" className="btn btn-lg">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
