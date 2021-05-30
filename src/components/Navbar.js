import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="nav-controler">
      <div className="nav-bar">
        <h2>
          Myparenting<span>Care</span>
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
      <div className={`mobile-nav ${show ? "on" : "off"}`}>
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
        <Link className="item" to="/disclaimer" onClick={() => setShow(false)}>
          FTC Disclosure
        </Link>
        <Link
          className="item"
          to="/privacypolicy"
          onClick={() => setShow(false)}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
