/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from '../../assets/images/icon/logo.svg';
import blogo from '../../assets/images/icon/logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

  let [toggle, setToggle] = useState(false);



  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand">
          <img className="logo-white" src={logo} alt="WHITE BRAND LOGO" />
          <img className="logo-black" src={blogo} alt="BLACK Brand LOGO" />
        </div>
      </div>
      <button type="button" className="toggle-btn">
        <FontAwesomeIcon icon={faClose}
        onClick={() => setToggle(false)}
        className={toggle? "toggle-icon-close text-white fs-1 m-3 show" :"hide"} />

        <FontAwesomeIcon icon={faBars}
        onClick={() => setToggle(true)}
         className={!toggle? "toggle-icon-ham text-white fs-1 m-3 show": "hide"} />
      </button>
      <div className={toggle? "nav-item show": "nav-item hide"}>
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
