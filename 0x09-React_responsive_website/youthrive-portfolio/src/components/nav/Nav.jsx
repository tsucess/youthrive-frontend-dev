/* eslint-disable no-unused-vars */
import React from "react";
import logo from '../../assets/images/icon/logo.svg';
import blogo from '../../assets/images/icon/logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faClose} className="toggle-icon-close text-white fs-1 m-3" />
        <FontAwesomeIcon icon={faBars} className="toggle-icon-ham text-white fs-1 m-3" />
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
