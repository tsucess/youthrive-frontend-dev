/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Hero = ({ title, info }) => {
  return (
    <div className="p-4 p-md-5 mb-4 rounded bg-dark text-white">
      <div className="col-md-12 px-0 ">
        {title && <h1 className="display-4 fst-italic text-white">{title}</h1>}
        {info && <p className="lead my-3 text-white">{info}</p>}
        <p className="lead mb-0">
          <a href="#" className="text-white fw-bold">
            Read More...
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
