import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../assests/images/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "./Header.scss";

const Header = () => {
  const history = useHistory();

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 992 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__content__logo">
            <img src={logo} />
          </Link>
          <nav
            className={`${"header__content__nav"} ${
              menuOpen && size.width < 992 ? "isMenu" : ""
            }`}
          >
            <ul>
              <li>
                <Link to="/page-one" onClick={menuToggleHandler}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/page-two" onClick={menuToggleHandler}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="/page-three" onClick={menuToggleHandler}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/page-three" onClick={menuToggleHandler}>
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/page-three" onClick={menuToggleHandler}>
                  CONTACT
                </Link>
              </li>
            </ul>
            <Button>Login</Button>
          </nav>
          <div className="header__content__toggle">
            {!menuOpen ? (
              <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
              <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
