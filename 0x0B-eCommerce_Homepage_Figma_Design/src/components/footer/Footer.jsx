/* eslint-disable no-unused-vars */
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faArrowUp,
  faAt,
  faBars,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="container-fluid container_footer">
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <a
              href="/"
              className="mb-5 text-decoration-none"
            >
              <h5 className="mb-5">Funiro.</h5>
            </a>
            <p className="addr">400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5 className="mb-5">Links</h5>
            <ul className="p-0">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Shop
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="mb-5">Help</h5>
            <ul className="p-0">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Payment Options
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Returns
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 offset-md-1 mb-3">
            <form>
              <h5 className="mb-5">Newsletter</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter"
                  type="text"
                  className="form-control newsletter"
                  placeholder="Enter Your Email Address"
                />
                <button className="btn btn-primary newsletter-btn" type="button">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="py-4 my-4 border-top">
          <p>2023 furino. All rights reverved.</p>
        </div>
      </footer>
    </section>

    // <footer className="footer-section">
    //   <a href="#top">
    //     <FontAwesomeIcon icon={faAnglesUp} className="text-white" />
    //     <p>BACK TO TOP</p>
    //   </a>
    //   <div className="footer-socials">
    //     <span>
    //       <a href="">
    //       <FontAwesomeIcon icon={faFacebook} className="text-white fs-4" />
    //       </a>
    //     </span>
    //     <span>
    //       <a href="">
    //       <FontAwesomeIcon icon={faLinkedin} className="text-white fs-4" />
    //       </a>
    //     </span>
    //     <span>
    //       <a href="">
    //       <FontAwesomeIcon icon={faInstagram} className="text-white fs-4" />
    //       </a>
    //     </span>
    //     <span>
    //       <a href="">
    //       <FontAwesomeIcon icon={faEnvelope} className="text-white fs-4" />
    //       </a>
    //     </span>
    //   </div>
    //   <div className="copyright">
    //     <p>@2020 Tomasz Gajda All Rights Reserved.</p>
    //   </div>
    // </footer>
  );
};

export default Footer;
