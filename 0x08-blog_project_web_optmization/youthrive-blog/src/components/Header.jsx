/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="container">
      <header className="blog-header lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-12 text-end">
             <Link className="blog-header-logo text-dark" to="./">
              YouthriveBlog
             </Link>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex gap-3 justify-content-center">
           <Link className="p-2 link-secondary" to="../">
            Home
           </Link>
           <Link className="p-2 link-secondary" to="../blog">
            Blog
           </Link>
           <Link className="p-2 link-secondary" to="../about">
            About
           </Link>
           <Link className="p-2 link-secondary" to="../portfolio">
            Portfolio
           </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
