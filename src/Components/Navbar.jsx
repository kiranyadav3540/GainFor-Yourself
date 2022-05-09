import React from "react";

import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbrand">
            <NavLink exact className="navbar-brand" to="/">
              GAIN FOR YOURSELF
            </NavLink>
          </div>
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
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>

              <li class="navbar navbar-light bg-light">
                <NavLink className="nav-link" to="#">
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    type="button"
                  >
                    SignUp
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//<input>,<hr>,<img>,<li> self close
//class  =  className
//href = to path set karna hota hai

//ad css in jsx::: <div className="name1" style={{width: "14rem"}}>
//a anchar link ko navlink me convert kar de for page ko redirect karne ka work karti hn
//activeClassName='menu_active' for which page are active //css .menu_active{font-weight:bold; border-bottom: 1px solid #565387;}
