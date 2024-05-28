/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const Post = () => {
  return (
    <main className="container">
      <Header />
      <Articles />
      <Footer />
    </main>
  );
};

export default Post;
