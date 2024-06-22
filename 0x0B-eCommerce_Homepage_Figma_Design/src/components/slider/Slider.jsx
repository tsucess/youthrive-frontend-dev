/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const sliderData = [
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle1.png",
  },
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle2.png",
  },
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle3.png",
  },
  {
    title: "Inner Peace",
    sub_title: "01 --- Bed Room",
    img: "http://localhost:5173/src/assets/images/rectangle4.png",
  },
];

const slideContainerStyle = {
  width: "404px",
  height: "582px",
  position: "relative",
  // background: 'red',
};
const slideContainerStyle2 = {
  width: "372px",
  height: "486px",
  position: "relative",
  overflow: "hidden"
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const sliderStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${sliderData[0].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const sliderStyle2 = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${sliderData[currentIndex].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const sliderStyle3 = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${sliderData[2].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="container-fluid container_slider">
      <div className="row m-0">
        <div className="col-12 col-md-4 slider_info">
          <h2 className="title">50+ Beautiful rooms inspiration</h2>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button type="button" className="btn">
            Explore More
          </button>
        </div>
        <div className="col-12 col-md-4" style={slideContainerStyle}>
          <div style={sliderStyle} className="show-image">
            <div>
              <p>
                01 <BsDashLg /> Bed Room
              </p>
              <h4>Inner Peace</h4>
            </div>
            <button className="btn">
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-4 p-0 slideswrap">
          <div className="row p-0 m-0 bg-light" style={slideContainerStyle2}>
            <div style={sliderStyle2} className=" slide"></div>
            <div style={sliderStyle3} className=" slide"></div>
          </div>
            <div className="slideIndicators">
              <span className="slideIndicator active"><GoDotFill /></span>
              <span className="slideIndicator"><GoDotFill /></span>
              <span className="slideIndicator"><GoDotFill /></span>
              <span className="slideIndicator"><GoDotFill /></span>
            </div>
            <div className="controls">
              <button type="button"className="arrow left"><PiLessThan /></button>
              <button type="button" className="arrow right"><PiGreaterThan /></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
