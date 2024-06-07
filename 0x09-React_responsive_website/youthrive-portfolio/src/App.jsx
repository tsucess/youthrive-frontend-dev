/* eslint-disable react/no-unescaped-entities */
import logo from './assets/images/icon/logo.svg';
import blogo from './assets/images/icon/logo-black.svg';
import close from './assets/images/icon/closes.svg';
import hamburger from './assets/images/icon/ham.png';
import profileImg from './assets/images/profile-img.png';
import profile from './assets/images/profile.png';
import separator from './assets/images/separatorWhite.svg';
import bseparator from './assets/images/separatorBlack.svg';
import xdesign from './assets/images/icon/edit-x.svg';
import settings from './assets/images/icon/settings.svg';
import maintenance from './assets/images/icon/maintenance.svg';

// Skill 
import html5Icon from './assets/images/skills/html5.svg';
import css3Icon from './assets/images/skills/css3.svg';
import sassIcon from './assets/images/skills/sass.svg';
import jsIcon from './assets/images/skills/js.svg';
import reactIcon from './assets/images/skills/react.svg';
import bootstrapIcon  from './assets/images/skills/bootstrap.svg';
import gitIcon from './assets/images/skills/git.svg';
import figmaIcon from './assets/images/skills/figma.svg';
import nodejsIcon from './assets/images/skills/nodejs.svg';
import mysqlIcon from './assets/images/skills/mysql.svg';
import mongoDBIcon from './assets/images/skills/mongo.png';
import typescriptIcon from './assets/images/skills/ts.svg';
import engIcon from './assets/images/skills/eng-lang.svg';
import portIcon from './assets/images/skills/portugal.svg';
import cppIcon from './assets/images/skills/c++.svg';
import cIcon from './assets/images/skills/c-lang.svg';

import arrowUp from './assets/images/icon/ic_baseline-double-arrow.svg';
import faceBook from './assets/images/icon/facebook.svg';
import linkedIcon from './assets/images/icon/linkedin.svg';
import mailIcon from './assets/images/icon/mail.svg';
import instaIcon from './assets/images/icon/insta.svg';


function App() {
  return (
    <>
      <header className="nav-section">
        {/* <!-- NAV SECTION  --> */}
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="brand">
              <img
                className="logo-white"
                src={logo}
                alt="WHITE BRAND LOGO"
              />
              <img
                className="logo-black"
                src={blogo}
                alt="BLACK Brand LOGO"
              />
            </div>
          </div>
          <button type="button" className="toggle-btn">
            <img
              src={close}
              className="toggle-icon-close"
              alt=""
            />
            <img
              src={hamburger}
              className="toggle-icon-ham"
              alt="Ham-icon"
            />
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
      </header>

      <main id="top">
        {/* <!-- HERO SECTION  --> */}
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
        {/* <!-- INFO SECTION  --> */}
        <section className="info-section">
          <h2>IT BERRIES</h2>
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </p>
          <button type="button" className="btn">
            MORE
          </button>
        </section>

        {/* <!-- ABOUT SECTION  --> */}
        <section id="about" className="about-section">
          <div className="heading">
            <h2>ABOUT ME</h2>
          </div>
          <p>
            My name is Tomasz Gajda, I'm a third year Applied Computer Science
            student at the AGH University of Science and Technology in Krakow. I
            have been learning Front-End technologies for a year and this time
            was just enough for me to make sure that this is my place in the
            industry.
          </p>
          <p>
            Membership in the science club developed my design skills, which
            quickly turned into a new hobby. I am fluent in English (spoken and
            written) and intermediate Spanish. Apart from designing and
            programming websites, my passion is all kinds of motorsport - from
            rallies to the very king of motorsport - formula 1.
          </p>
          <button type="button" className="btn explore">
            EXPLORE
          </button>

          <div className="ability_section">
            <img
              src={bseparator}
              className="separator"
              alt=""
            />
            <div className="abilities">
              <div className="ability">
                <div className="ability_heading">
                  <img
                    src={xdesign}
                    className="icon ability_icon"
                    alt=""
                  />
                  <h3 className="title">DESIGN</h3>
                </div>
                <p>
                  I can design the website based on your needs and suggestions.
                  I can also create it from scratch by consulting with you
                  during work.
                </p>
              </div>
              <div className="ability">
                <div className="ability_heading">
                  <img
                    src={settings}
                    className="icon ability_icon"
                    alt=""
                  />
                  <h3 className="title">DEVELOPMENT</h3>
                </div>
                <p>
                  Based on a project created by me or another one, sent by you,
                  I can program the website to be fully functional and
                  responsive.
                </p>
              </div>
              <div className="ability">
                <div className="ability_heading">
                  <img
                    src={maintenance}
                    className="icon ability_icon"
                    alt=""
                  />
                  <h3 className="title">MAINTENANCE</h3>
                </div>
                <p>
                  In case of any problems or the need for changes, I can
                  introduce new functionalities and solutions.
                </p>
              </div>
            </div>
          </div>
          <img
            src={bseparator}
            className="separator"
            alt="Seperator"
          />
        </section>

        {/* <!-- SKILLS SECTION  --> */}
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
                <img
                  src={html5Icon}
                  className="icon skill_icon"
                  alt="HTML5"
                />
                <p>HTML5</p>
              </div>
              <div className="skill">
                <img
                  src={css3Icon}
                  className="icon skill_icon"
                  alt="CSS3"
                />
                <p>CSS3</p>
              </div>
              <div className="skill">
                <img
                  src={sassIcon}
                  className="icon skill_icon"
                  alt="SASS"
                />
                <p>SASS</p>
              </div>
              <div className="skill">
                <img
                  src={jsIcon}
                  className="icon skill_icon"
                  alt="JAVASCRIPT"
                />
                <p>JAVASCRIPT</p>
              </div>
              <div className="skill">
                <img
                  src={reactIcon}
                  className="icon skill_icon"
                  alt="REACT"
                />
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
                <img
                  src={gitIcon}
                  className="icon skill_icon"
                  alt="GIT"
                />
                <p>GIT</p>
              </div>
              <div className="skill">
                <img
                  src={figmaIcon}
                  className="icon skill_icon"
                  alt="FIGMA"
                />
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
                <img
                  src={nodejsIcon}
                  className="icon skill_icon"
                  alt="NODEJS"
                />
                <p>NODEJS</p>
              </div>
              <div className="skill">
                <img
                  src={mysqlIcon}
                  className="icon skill_icon"
                  alt="MySQL"
                />
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
                <img
                  src={portIcon}
                  className="icon skill_icon"
                  alt="PORTUGAL"
                />
                <p>HISZPAŃSKI B1/B2</p>
              </div>
              <div className="skill">
                <img
                  src={cppIcon}
                  className="icon skill_icon"
                  alt="C++ LANGUAGE"
                />
                <p>C++</p>
              </div>
              <div className="skill">
                <img
                  src={cIcon}
                  className="icon skill_icon"
                  alt="C LANGUAGE"
                />
                <p>C</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- PORTFOLIO SECTION  --> */}
        <section id="portfolio" className="portfolio-section">
          <div className="top">
            <div className="heading">
              <h2>PORTFOLIO</h2>
            </div>
          </div>
          <div className="portfolios">
            <div className="portfolio-btns">
              <button type="button" className="btn-opt">
                ALL
              </button>
              <button type="button" className="btn-opt">
                CODED
              </button>
              <button type="button" className="btn-opt">
                DESIGN
              </button>
            </div>
            <div className="gallery">
              <div className="pic pic-1">
                <div className="info">
                  <p>
                    <i>coded, designed</i>
                  </p>
                  <h3>eatsome.</h3>
                  <p>Restaurant browsing in React.js (Using Yelp API)</p>
                  <div className="buttons">
                    <button type="button" className="btn">
                      DEMO
                    </button>
                    <button type="button" className="btn">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="pic pic-2">
                <div className="info">
                  <p>
                    <i>coded, designed</i>
                  </p>
                  <h3>eatsome.</h3>
                  <p>Restaurant browsing in React.js (Using Yelp API)</p>
                  <div className="buttons">
                    <button type="button" className="btn">
                      DEMO
                    </button>
                    <button type="button" className="btn">
                      MORE
                    </button>
                  </div>
                </div>
              </div>
              <div className="pic pic-3"></div>
              <div className="pic pic-4"></div>
              <div className="pic pic-5"></div>
              <div className="pic pic-6"></div>
            </div>
          </div>
          <div className="bottom">
            <p>And many more to come!</p>
          </div>
        </section>

        {/* <!-- CONTACT SECTION --> */}
        <section id="contact" className="contact-section">
          <div className="heading">
            <h2>CONTACT</h2>
          </div>
          <p>
            My name is Tomasz Gajda, I’m a third year Applied Computer Science
            student at AGH University of Science and Technology in Cracow,
            Poland.
          </p>
          <img
            src={bseparator}
            className="separator"
            alt=""
          />

          <form action="">
            <input type="text" value="" placeholder="ENTER YOUR NAME*" />
            <input type="text" value="" placeholder="ENTER YOUR EMAIL*" />
            <input type="text" value="" placeholder="PHONE NUMBER*" />
            <textarea name="" value="" id="" cols="30" rows="10">
              YOUR MESSAGE*
            </textarea>
            <button type="button" className="btn btn-submit">
              SUBMIT
            </button>
          </form>
        </section>
      </main>

      {/* <!-- FOOTER SECTION --> */}
      <footer className="footer-section">
        <a href="#top">
          <img
            src={arrowUp}
            alt="arrow-up"
          />
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
    </>
  );
}

export default App;
