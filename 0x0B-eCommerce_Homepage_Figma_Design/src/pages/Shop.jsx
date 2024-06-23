/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";


function Shop() {
  return (
    <>
      <header className="nav-section">
        <Nav />
      </header>
      <Products />
      <Footer />
    </>
  );
}

export default Shop;
