import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="content">
        <div className="logo">
          <h3>About Kitchensmith.com</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            atque ipsam nemo numquam unde possimus temporibus quo blanditiis
            culpa quibusdam.
          </p>
        </div>
        <div className="pages">
          <h3>Site links</h3>

          <Link className="footer-link" to="/">
            Home
          </Link>

          <Link className="footer-link" to="/about">
            About
          </Link>

          <Link className="footer-link" to="/contact">
            Contact
          </Link>

          <Link className="footer-link" to="/disclaimer">
            FTC Disclosure
          </Link>

          <Link className="footer-link" to="/privacypolicy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
