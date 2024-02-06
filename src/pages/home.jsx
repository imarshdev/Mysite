import React, { useState } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import "../index.css";

function Home() {
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
        <h1>Hi I'm Mansur</h1>
      </div>

      <div className="topper">
        <div className="my-pic"></div>
        <div style={{width: '65%'}}>
          <h4 style={{ padding: "20px" }}>Senior Front-End Developer.</h4>
          <p style={{ padding: "0 20px" }}>
            Hi... I'm Marsh, a software developer,<br />
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
                A brief overview of my background, skills, and experience as a
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
                Showcasing a selection of my best projects with descriptions,
                screenshots, and links to live demos or GitHub repositories.
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
                I have written blog posts, articles and notes including PDF
                books related to front-end development, This is a section
                highlighting them.
              </p>
            </button>
          </Link>
        </div>

        <div onClick={play} className="link-div">
          <Link
            to="/contacts"
            className="main-link"
          >
            <button
              style={{
                width: "100%",
                textAlign: "end",
              }}
            >
              <em style={{ fontSize: "20px" }}>Contact</em>
              <p style={{ fontSize: "16px" }}>
                Providing my contact details, such as email or social media
                handles, for potential clients or collaborators to get in touch.
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
                When I'm coding, Shakira is my go-to companion, her music is
                simply amazing, and playful.
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
    </div>
  );
}

export default Home;
