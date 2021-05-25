import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav-controler">
      <div className="nav-bar">
        <h2>
          Kithen<span>Smith</span>
          <a href="#">.com</a>
        </h2>
        <ul>
          <li>
            <Link className="routes" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="routes" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="routes" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" href="#" onClick={() => setShow(true)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <div className={show ? "mobile-nav on" : "mobile-nav off"}>
        <button onClick={() => setShow(false)}>
          <h3>X</h3>
        </button>
        <Link className="item" to="/" onClick={() => setShow(false)}>
          Home
        </Link>
        <Link className="item" to="/about" onClick={() => setShow(false)}>
          About
        </Link>
        <Link className="item" to="/contact" onClick={() => setShow(false)}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
