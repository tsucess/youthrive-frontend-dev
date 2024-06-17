/* eslint-disable no-unused-vars */
import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faArrowUp, faAt, faBars, faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer-section">
      <a href="#top">
        <FontAwesomeIcon icon={faAnglesUp} className="text-white" />
        <p>BACK TO TOP</p>
      </a>
      <div className="footer-socials">
        <span>
          <a href="">
          <FontAwesomeIcon icon={faFacebook} className="text-white fs-4" />
          </a>
        </span>
        <span>
          <a href="">
          <FontAwesomeIcon icon={faLinkedin} className="text-white fs-4" />
          </a>
        </span>
        <span>
          <a href="">
          <FontAwesomeIcon icon={faInstagram} className="text-white fs-4" />
          </a>
        </span>
        <span>
          <a href="">
          <FontAwesomeIcon icon={faEnvelope} className="text-white fs-4" />
          </a>
        </span>
      </div>
      <div className="copyright">
        <p>@2020 Tomasz Gajda All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
