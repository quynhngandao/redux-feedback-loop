import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" >
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <Button variant="outlined" sx={{color: "#2979ff", fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Home
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/feeling"
                className="nav-links"
                
                onClick={closeMobileMenu}
              >
                <Button variant="outlined" sx={{color: "#2979ff" ,fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Feeling
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/understanding"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Button variant="outlined"sx={{color: "#2979ff", fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Understanding
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Button variant="outlined" sx={{color: "#2979ff", fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Support
                </Button>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/comments"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Button variant="outlined" sx={{color: "#2979ff", fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Comments
                </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/review"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <Button variant="outlined" sx={{color: "#2979ff", fontFamily: 'Rubik Bubbles'}} href="#outlined-buttons">
                  Review
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
