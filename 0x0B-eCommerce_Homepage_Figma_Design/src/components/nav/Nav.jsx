/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import brand from "../../assets/images/Meubel_House_Logos-05.svg";

const Nav = () => {
  // let [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={brand} alt="brand_logo" />
          FURNIRO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="top-icon">
            <IoIosHeartEmpty />
            <FiSearch />
            <FaRegUser />
            <BsCart3 />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
