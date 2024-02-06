import React, { useState } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import "../components/navbar.css";
import { Close, Menu } from "./svg";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDivVisible(!isDivVisible);
    play();
  };

  function play() {
    new Audio(clickSound).play();
  }

  return (
    <>
      <div className="main">
        <div className="main1">
          <Link to="/home" className="link">
            <button onClick={play}>Home</button>
          </Link>
          <Link to="/about" className="link">
            <button onClick={play}>About</button>
          </Link>
          <Link to="/projects" className="link">
            <button onClick={play}>Projects</button>
          </Link>
          <Link to="/notes" className="link">
            <button onClick={play}>Blog</button>
          </Link>
          <Link to="/contacts" className="link">
            <button onClick={play}>Contact</button>
          </Link>
        </div>
      </div>


        <div className="top-nav">
          <button style={{backdropFilter:"blur(100px)"}} onClick={handleClick}>
            {isMenuOpen ? <Menu /> : <Close />}
          </button>
        </div>
        {isDivVisible && (
          <div className="lower1">
            <Link to="/home" className="link">
              <span className="link-button" onClick={play}>
                Home
              </span>
            </Link>
            <Link to="/about" className="link">
              <span className="link-button" onClick={play}>
                About
              </span>
            </Link>
            <Link to="/projects" className="link">
              <span className="link-button" onClick={play}>
                Projects
              </span>
            </Link>
            <Link to="/notes" className="link">
              <span className="link-button" onClick={play}>
                Blog
              </span>
            </Link>
            <Link to="/contacts" className="link">
              <span className="link-button" onClick={play}>
                Contact
              </span>
            </Link>
          </div>
        )}

        <div className="bottom-nav"></div>
    </>
  );
}

export default Navbar;
