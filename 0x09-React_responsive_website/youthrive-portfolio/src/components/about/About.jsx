/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import xdesign from "../../assets/images/icon/edit-x.svg";
import settings from "../../assets/images/icon/settings.svg";
import maintenance from "../../assets/images/icon/maintenance.svg";
import bseparator from "../../assets/images/separatorBlack.svg";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="heading">
        <h2>ABOUT ME</h2>
      </div>
      <p>
        My name is Tomasz Gajda, I'm a third year Applied Computer Science
        student at the AGH University of Science and Technology in Krakow. I
        have been learning Front-End technologies for a year and this time was
        just enough for me to make sure that this is my place in the industry.
      </p>
      <p>
        Membership in the science club developed my design skills, which quickly
        turned into a new hobby. I am fluent in English (spoken and written) and
        intermediate Spanish. Apart from designing and programming websites, my
        passion is all kinds of motorsport - from rallies to the very king of
        motorsport - formula 1.
      </p>
      <button type="button" className="btn explore">
        EXPLORE
      </button>

      <div className="ability_section">
        <img src={bseparator} className="separator" alt="" />
        <div className="abilities">
          <div className="ability">
            <div className="ability_heading">
              <img src={xdesign} className="icon ability_icon" alt="" />
              <h3 className="title">DESIGN</h3>
            </div>
            <p>
              I can design the website based on your needs and suggestions. I
              can also create it from scratch by consulting with you during
              work.
            </p>
          </div>
          <div className="ability">
            <div className="ability_heading">
              <img src={settings} className="icon ability_icon" alt="" />
              <h3 className="title">DEVELOPMENT</h3>
            </div>
            <p>
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </div>
          <div className="ability">
            <div className="ability_heading">
              <img src={maintenance} className="icon ability_icon" alt="" />
              <h3 className="title">MAINTENANCE</h3>
            </div>
            <p>
              In case of any problems or the need for changes, I can introduce
              new functionalities and solutions.
            </p>
          </div>
        </div>
      </div>
      <img src={bseparator} className="separator" alt="Seperator" />
    </section>
  );
};

export default About;
