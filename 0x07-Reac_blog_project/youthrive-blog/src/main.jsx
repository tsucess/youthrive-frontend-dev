/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/singlepost/:id",
    element: <Post />
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
