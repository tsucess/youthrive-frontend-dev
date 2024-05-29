/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Portfolio = () => {

  const title = "Portfolio";
  const info = "Our Strength, Our Goal..";

  return (
    <main className="container">
      <Header />
      <Hero title={title} info={info} />
      <Footer />
    </main>
  );
};

export default Portfolio;
