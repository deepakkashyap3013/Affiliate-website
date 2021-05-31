import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="content">
          <div className="logo">
            <h3>About MyparentingCare</h3>
            <p>
              MyparentingCare is a resource provider for newly became parents or
              couples who want to become parents in the future . We share
              parenting tips and methods for you to become the best parent for
              your child .
            </p>
            <p>
              Follow us on :{" "}
              <a
                href="https://in.pinterest.com/myparentingcare/_created/"
                target="_blank"
              >
                <i class="fab fa-pinterest"></i>
              </a>
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
      <p className="copyright">
        &#169; {new Date().getFullYear()} MyparentingCare
      </p>
    </>
  );
};

export default Footer;
