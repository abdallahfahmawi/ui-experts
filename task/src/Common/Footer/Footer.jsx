import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="footerLogo">
              <h5>
                <span>Web</span>
                UiExpert
              </h5>
              <p>
                The full-stack design team who focuses on digital products
                whatever they are.
              </p>
              <ul className="socilamediaList d-flex p-0">
                <li>
                  <Link>
                    <span>
                      <i className="fa-brands fa-facebook-f"></i>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link>
                    <span>
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link>
                    <span>
                      <i className="fa-brands fa-google-plus-g"></i>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link>
                    <span>
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="ListTitleHolder">
              <h5>About Us</h5>
              <ul className="aboutusList p-0">
                <li>
                  <Link>
                    <a href="#">
                      <p>We're Hiring</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Our Customer</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Blog Post</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Help & Support</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="ListTitleHolder">
              <h5>Community</h5>
              <ul className="aboutusList p-0">
                <li>
                  <Link>
                    <a href="#">
                      <p>We're Hiring</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Our clients</p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Legal notic</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="ListTitleHolder">
              <h5>Contact</h5>
              <ul className="aboutusList p-0">
                <li>
                  <Link>
                    <a href="#">
                      <p>
                        <span>
                          <i className="fa-solid fa-phone-volume"></i>
                        </span>
                        +123 456 789 00
                      </p>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link>
                    <a href="#">
                      <p>Contact Us</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
