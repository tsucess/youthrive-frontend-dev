/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Axios from "axios"
const Blog = () => {

let [id, setId] = useState(null);
let [titl, setTitle] = useState(null);
let [data, setData] = useState(null);

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>  response.json())
// .then(posts=> console.log(posts))
// .catch((err) => {
//   console.error(err);
  // fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>  response.json())
// .then(posts=> console.log(posts))
// });

 useEffect(() => {
  Axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response =>  {
    setId(response.data.id);
    setData(response.data);

  });


 },[])

  const title = "All News";
  const info = "We keep you informed?";

  return (
    <main className="container">
      <Header />
      <Hero title={title} info={info}/>
      <Featured data={data} id = {id} titl = {titl} />
      <Footer />
    </main>
  );
};

export default Blog;
