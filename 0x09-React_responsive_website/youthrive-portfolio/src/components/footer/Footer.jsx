/* eslint-disable no-unused-vars */
import React from "react";
import arrowUp from "../../assets/images/icon/ic_baseline-double-arrow.svg";
import faceBook from "../../assets/images/icon/facebook.svg";
import linkedIcon from "../../assets/images/icon/linkedin.svg";
import mailIcon from "../../assets/images/icon/mail.svg";
import instaIcon from "../../assets/images/icon/insta.svg";



const Footer = () => {
  return (
    <footer className="footer-section">
      <a href="#top">
        <img src={arrowUp} alt="arrow-up" />
        <p>BACK TO TOP</p>
      </a>
      <div className="footer-socials">
        <span>
          <a href="">
            <img src={faceBook} alt="FACEBOOK" />
          </a>
        </span>
        <span>
          <a href="">
            <img src={linkedIcon} alt="LINKEDIN" />
          </a>
        </span>
        <span>
          <a href="">
            <img src={instaIcon} alt="INSTAGRAM" />
          </a>
        </span>
        <span>
          <a href="">
            <img src={mailIcon} alt="MAIL" />
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
