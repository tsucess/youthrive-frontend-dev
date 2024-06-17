/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <header className="nav-section">
        <Nav />
        <Hero />
      </header>
      <Gallery />
      <Products />
      <Footer />
    </>
  );
}

export default App;
