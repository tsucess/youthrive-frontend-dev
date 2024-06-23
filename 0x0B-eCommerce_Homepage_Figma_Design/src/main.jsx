/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/shop.css'
import './assets/css/style.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx';
import Shop from './pages/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "*",
    element: <ErrorPage />
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
