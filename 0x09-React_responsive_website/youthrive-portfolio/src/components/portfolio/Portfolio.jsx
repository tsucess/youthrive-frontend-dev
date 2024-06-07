/* eslint-disable no-unused-vars */
import React from "react";

const Portfolio = () => {
  return (
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
  );
};

export default Portfolio;
