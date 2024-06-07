/* eslint-disable no-unused-vars */
import React from 'react'
import profileImg from '../../assets/images/profile-img.png';
import profile from '../../assets/images/profile.png';
import separator from '../../assets/images/separatorWhite.svg';

const Hero = () => {
  return (
	<section className="hero-section">
          <div className="hero-bg">
            <img
              src={profileImg}
              className="profile-img"
              alt=""
            />
            <div className="profile">
              <div className="profile-info">
                <p>Hi, I am</p>
                <h3>Tomasz Gajda</h3>
                <p className="desc">Front-end Developer / UI Designer</p>
              </div>
              <div className="profile_icon">
                <a href="#">
                  <i className="fa-solid fa-at"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
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
              <img
                src={separator}
                className="separator"
                alt="seperator"
              />
              <div className="social_icon">
                <a href="#">
                  <i className="fa-solid fa-at"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <img src={profile} className="profile-img" alt="" />
          </div>
        </section>
  )
}

export default Hero