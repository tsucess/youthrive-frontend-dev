/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Axios from "axios"
const Blog = () => {
  const [isLoading, setLoader] = useState(false);
  const [blog, setData] = useState();

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setData(posts))
      .catch((err) => {
        console.error(err);
      })
      .finally(
        setLoader(false)
      );
    // Axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(response =>  {
    //   setData(response.data)
    // });
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const title = "All News";
  const info = "We keep you informed?";

  return (
    <main className="container">
      <Header />
      <Hero title={title} info={info} />
      <Featured posts={blog} />
      <Footer />
    </main>
  );
};

export default Blog;
