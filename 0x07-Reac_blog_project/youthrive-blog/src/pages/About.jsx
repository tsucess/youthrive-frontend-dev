/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function App() {
  const title = "About Page";
  const info = "Who are we ?";

  return (
    <main className="container">
      <Header />
      <Hero title={title} info={info}/>
      <Footer />
    </main>
  );
}

export default App;
