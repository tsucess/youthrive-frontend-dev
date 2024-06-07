/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <header className="nav-section">
        {/* <!-- NAV SECTION  --> */}
        <Nav />
      </header>

      <main id="top">
        {/* <!-- HERO SECTION  --> */}
        <Hero />
        {/* <!-- INFO SECTION  --> */}
        <Info />

        {/* <!-- ABOUT SECTION  --> */}
        <About />

        {/* <!-- SKILLS SECTION  --> */}
        <Skills />
        {/* <!-- PORTFOLIO SECTION  --> */}
        <Portfolio />

        {/* <!-- CONTACT SECTION --> */}
        <Contact />
      </main>

      {/* <!-- FOOTER SECTION --> */}
      <Footer />
    </>
  );
}

export default App;
