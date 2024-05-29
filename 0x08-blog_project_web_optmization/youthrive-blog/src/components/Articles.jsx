/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
  }, [dataId]);

  return (
    <div className="row ">
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">From Post</h3>
        <article className="blog-post">
          <h2 className="blog-post-title mb-1">{postData && postData.title}</h2>
          <p className="blog-post-meta">
            January 1, 2021 by <Link to="#">Mark</Link>
          </p>

          <p>{postData && postData.body}</p>
          <hr />
        </article>

        <nav className="blog-pagination" aria-label="Pagination">
          <Link className="btn btn-outline-primary rounded-pill" to="../blog">
            back to blog page
          </Link>
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
                <Link to="#">March 2024</Link>
              </li>
              <li>
                <Link to="#">February 2024</Link>
              </li>
              <li>
                <Link to="#">January 2024</Link>
              </li>
              <li>
                <Link to="#">December 2023</Link>
              </li>
              <li>
                <Link to="#">November 2023</Link>
              </li>
              <li>
                <Link to="#">October 2023</Link>
              </li>
            </ol>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">Social Media Page</h4>
            <ol className="list-unstyled">
              <li>
                <Link to="#">GitHub</Link>
              </li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
