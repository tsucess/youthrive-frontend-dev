/* eslint-disable no-unused-vars */
import React from "react";
import profileImg from "../../assets/images/profile-img.png";
import profile from "../../assets/images/profile.png";
import separator from "../../assets/images/separatorWhite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src={profileImg} className="profile-img" alt="" />
        <div className="profile">
          <div className="profile-info">
            <p>Hi, I am</p>
            <h3>Tomasz Gajda</h3>
            <p className="desc">Front-end Developer / UI Designer</p>
          </div>
          <div className="profile_icon">
            <a href="#">
              <FontAwesomeIcon icon={faAt} className="text-white fs-1" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className="text-white fs-1" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className="text-white fs-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="info-lg">
        <div className="info">
          <div className="hero-info">
            <p> my name is Thomas</p>
            <h3>I’M A DEVELOPER</h3>
          </div>
          <img src={separator} className="separator" alt="seperator" />
          <div className="social_icon">
            <a href="#">
              <FontAwesomeIcon icon={faAt} className="text-dark fs-1" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} className="text-dark fs-1" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} className="text-dark fs-1" />
            </a>
          </div>
        </div>
        <img src={profile} className="profile-img" alt="" />
      </div>
    </section>
  );
};

export default Hero;
