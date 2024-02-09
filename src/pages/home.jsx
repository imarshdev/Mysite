import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import "../index.css";
import About from "./about";
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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
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
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#fff",
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
          <h1 style={{fontWeight: 'bolder', color:'#152b42', fontSize: '3rem'}}>Eternally <em style={{}}>Marsh</em></h1>
        </div>

        <div className="topper">
          <div className="picture">

          </div>
          <div style={{ width: "65%" }}>
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
            <Link to="/about" className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>About</em>
                <p style={{ fontSize: "14px" }}>
                  My background, skills, and experience as a front-end
                  developer.
                </p>
              </button>
            </Link>
          </div>

          <div onClick={play} className="link-div">
            <Link to="/projects" className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Projects</em>
                <p style={{ fontSize: "14px" }}>
                  Projects with descriptions, screenshots, and links to
                  GitHub repositories.
                </p>
              </button>
            </Link>
          </div>

          <div onClick={play} className="link-div">
            <Link to="/notes" className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Blog</em>
                <p style={{ fontSize: "14px" }}>
                  Posts, articles, notes and PDF books related to front-end
                  development,
                </p>
              </button>
            </Link>
          </div>

          <div onClick={play} className="link-div">
            <Link to="/play" className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Me</em>
                <p style={{ fontSize: "14px" }}>
                  Shakira, Kanye, R. Riordan, Shirly Jackson and Christopher
                  Nolan
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

        <div style={{ height: "30vh" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <span className="skill-span">
              <a
                className="Link"
                href="https://open.spotify.com/user/sgw331agtxe12j35fd5jrjfwb?si=lraPTE8-RJiXJ5EnHntdbA"
              >
                <Spotify />
              </a>
            </span>

            <span className="skill-span">
              <a className="Link" href="https://github.com/forevermarsh">
                <Github />
              </a>
            </span>

            <span className="skill-span">
              <a
                className="Link"
                href="https://x.com/eternallyMarsh?t=xcnqLKgEzIopgvV4e59AnA&s=09"
              >
                <TwitterX />
              </a>
            </span>

            <span className="skill-span">
              <a className="Link" href="https://instagram.com/forever.marsh">
                <Instagram />
              </a>
            </span>

            <span className="skill-span">
              <a className="Link" href="eternallymarsh04@gmail.com">
                <Email />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
