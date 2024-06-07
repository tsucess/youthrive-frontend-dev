/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Login from './components/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

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
    path: "/login",
    element: <Login />
  },
 
  {
    path: "*",
    element: <ErrorPage />
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
