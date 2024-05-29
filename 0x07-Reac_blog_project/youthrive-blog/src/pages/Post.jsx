/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
// import Featured from "../components/Featured";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import { useParams } from "react-router";

const Post = () => {

  const postId = useParams();

  return (
    <main className="container">
      <Header />
        <Articles dataId={postId}/>
      <Footer />
    </main>
  );
};

export default Post;
