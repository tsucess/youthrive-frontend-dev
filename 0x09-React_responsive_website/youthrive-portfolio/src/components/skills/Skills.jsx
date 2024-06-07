/* eslint-disable no-unused-vars */
import React from "react";

// Skill
import html5Icon from "../../assets/images/skills/html5.svg";
import css3Icon from "../../assets/images/skills/css3.svg";
import sassIcon from "../../assets/images/skills/sass.svg";
import jsIcon from "../../assets/images/skills/js.svg";
import reactIcon from "../../assets/images/skills/react.svg";
import bootstrapIcon from "../../assets/images/skills/bootstrap.svg";
import gitIcon from "../../assets/images/skills/git.svg";
import figmaIcon from "../../assets/images/skills/figma.svg";
import nodejsIcon from "../../assets/images/skills/nodejs.svg";
import mysqlIcon from "../../assets/images/skills/mysql.svg";
import mongoDBIcon from "../../assets/images/skills/mongo.png";
import typescriptIcon from "../../assets/images/skills/ts.svg";
import engIcon from "../../assets/images/skills/eng-lang.svg";
import portIcon from "../../assets/images/skills/portugal.svg";
import cppIcon from "../../assets/images/skills/c++.svg";
import cIcon from "../../assets/images/skills/c-lang.svg";




const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <div className="heading">
        <h2>SKILLS </h2>
      </div>
      <div className="row">
        <div className="title">
          <h2>USING NOW:</h2>
        </div>
        <div className="skills">
          <div className="skill">
            <img src={html5Icon} className="icon skill_icon" alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <img src={css3Icon} className="icon skill_icon" alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <img src={sassIcon} className="icon skill_icon" alt="SASS" />
            <p>SASS</p>
          </div>
          <div className="skill">
            <img src={jsIcon} className="icon skill_icon" alt="JAVASCRIPT" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill">
            <img src={reactIcon} className="icon skill_icon" alt="REACT" />
            <p>REACT</p>
          </div>
          <div className="skill">
            <img
              src={bootstrapIcon}
              className="icon skill_icon"
              alt="BOOTSTRAP"
            />
            <p>BOOTSTRAP</p>
          </div>
          <div className="skill">
            <img src={gitIcon} className="icon skill_icon" alt="GIT" />
            <p>GIT</p>
          </div>
          <div className="skill">
            <img src={figmaIcon} className="icon skill_icon" alt="FIGMA" />
            <p>FIGMA</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h2>LEARNING:</h2>
        </div>
        <div className="skills">
          <div className="skill">
            <img src={nodejsIcon} className="icon skill_icon" alt="NODEJS" />
            <p>NODEJS</p>
          </div>
          <div className="skill">
            <img src={mysqlIcon} className="icon skill_icon" alt="MySQL" />
            <p>MySQL</p>
          </div>
          <div className="skill">
            <img
              src={mongoDBIcon}
              className="icon skill_icon mongo"
              alt="MONGODB"
            />
            <p>MONGODB</p>
          </div>
          <div className="skill">
            <img
              src={typescriptIcon}
              className="icon skill_icon"
              alt="TYPE SCRIPT"
            />
            <p>TYPESCRIPT</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h2>OTHER SKILLS:</h2>
        </div>
        <div className="skills">
          <div className="skill">
            <img
              src={engIcon}
              className="icon skill_icon"
              alt="ENGLISH LANGUAGE"
            />
            <p>ANGIELSKI C1/C2</p>
          </div>
          <div className="skill">
            <img src={portIcon} className="icon skill_icon" alt="PORTUGAL" />
            <p>HISZPAŃSKI B1/B2</p>
          </div>
          <div className="skill">
            <img src={cppIcon} className="icon skill_icon" alt="C++ LANGUAGE" />
            <p>C++</p>
          </div>
          <div className="skill">
            <img src={cIcon} className="icon skill_icon" alt="C LANGUAGE" />
            <p>C</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
