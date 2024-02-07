import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import "../index.css";
import {
  Spotify,
  Linkedin,
  Discord,
  Github,
  Instagram,
  TwitterX,
  Snapchat,
  Email,
} from "../components/svg";

function Home() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  function play() {
    new Audio(clickSound).play();
  }

  const all = () => {
    play();
    toggleMode();
  };

  return (
    <div
      className={isDarkMode ? "dark-mode" : "light-mode"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flex: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1>EternallyMarsh</h1>
      </div>

      <div className="topper">
        <div style={{width: '65%'}}>
          <h4 style={{ padding: "20px" }}>Senior Front-End Developer.</h4>
          <p style={{ padding: "0 20px" }}>
            Hi I'm Marsh, a software developer, I build SAAS things <br />
          </p>
        </div>
      </div>

      <div
        className={isDarkMode ? "dark" : "light"}
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "start",
          padding: "20px",
        }}
      >
        <div onClick={play} className="link-div">
          <Link
            to="/about"
            className="main-link"
          >
            <button
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              <em style={{ fontSize: "20px" }}>About</em>
              <p style={{ fontSize: "16px" }}>
                My background, skills, and experience as a
                front-end developer.
              </p>
            </button>
          </Link>
        </div>

        <div onClick={play} className="link-div">
          <Link
            to="/projects"
            className="main-link"
          >
            <button
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              <em style={{ fontSize: "20px" }}>Projects</em>
              <p style={{ fontSize: "16px" }}>
                My projects with descriptions,
                screenshots, and links to GitHub repositories.
              </p>
            </button>
          </Link>
        </div>

        <div onClick={play} className="link-div">
          <Link
            to="/notes"
            className="main-link"
          >
            <button
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              <em style={{ fontSize: "20px" }}>Blog</em>
              <p style={{ fontSize: "16px" }}>
                Blog posts, articles, notes and PDF
                books related to front-end development, 
              </p>
            </button>
          </Link>
        </div>


        <div onClick={play} className="link-div">
          <Link
            to="/play"
            className="main-link"
          >
            <button
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              <em style={{ fontSize: "20px" }}>Play</em>
              <p style={{ fontSize: "16px" }}>
                Shakira is my go-to companion, her music is
                simply amazing.
              </p>
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          height: "50dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "end",
        }}
      >
        <div style={{ textAlign: "end" }}>
          <h4>"THE WORLD IS BUT A CANVAS TO OUR IMAGINATION."</h4>
          <p>~Henry David Thoreau</p>
        </div>
      </div>
      <h1>Contacts</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <span className="skill-span">
          <a className="Link" href="https://open.spotify.com/user/sgw331agtxe12j35fd5jrjfwb?si=lraPTE8-RJiXJ5EnHntdbA">
          <Spotify />
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://github.com/forevermarsh">
          <Github />
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://x.com/eternallyMarsh">
          <TwitterX />
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://instagram.com/forever.marsh">
          <Instagram />
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://instagram.com/forever.marsh">
          <Email />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
