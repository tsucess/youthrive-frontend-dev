/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Axios from "axios";

const Articles = ({ dataId }) => {
  const [postData, getPost] = useState();

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${dataId.id}`)
    .then(
      (response) => {
        console.log(response.data);
        getPost(response.data);
      }
    ).catch(error => console.error(error));
  }, []);

  return (
    <div className="row ">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">From Post</h3>
        <article className="blog-post">
          <h2 className="blog-post-title mb-1">{postData && postData.title}</h2>
          <p className="blog-post-meta">
            January 1, 2021 by <a href="#">Mark</a>
          </p>

          <p>{postData && postData.body}</p>
          <hr />
        </article>

        <nav className="blog-pagination" aria-label="Pagination">
          <a className="btn btn-outline-primary rounded-pill" href="../blog">
            back to blog page
          </a>
        </nav>
      </div>

      <div className="col-md-4">
        <div className="position-sticky">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">About</h4>
            <p className="mb-0">
              Customize this section to tell your visitors a little bit about
              your publication, writers, content, or something else entirely.
              Totally up to you.
            </p>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li>
                <a href="#">March 2024</a>
              </li>
              <li>
                <a href="#">February 2024</a>
              </li>
              <li>
                <a href="#">January 2024</a>
              </li>
              <li>
                <a href="#">December 2023</a>
              </li>
              <li>
                <a href="#">November 2023</a>
              </li>
              <li>
                <a href="#">October 2023</a>
              </li>
            </ol>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">Social Media Page</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
