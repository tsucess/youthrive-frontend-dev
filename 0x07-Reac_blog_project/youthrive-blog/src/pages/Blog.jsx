/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Axios from "axios"
const Blog = () => {

let [blog, setData] = useState();


 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>  response.json())
.then(posts=> setData(posts))
.catch((err) => {
    console.error(err);
  });
  // Axios.get('https://jsonplaceholder.typicode.com/posts')
  // .then(response =>  {
  //   setData(response.data)
  // });

 },[])

  const title = "All News";
  const info = "We keep you informed?";

  return (
    <main className="container">
      <Header />
      <Hero title={title} info={info}/>
      <Featured posts={blog} />
      <Footer />
    </main>
  );
};

export default Blog;
