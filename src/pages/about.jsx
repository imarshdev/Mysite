import React, { SVGProps, useEffect } from "react";
import Navbar from "../components/navbar";
import "../index.css";
import Paypal, {
  Github,
  Html,
  Spotify,
  Css,
  Discord,
  Imdb,
  Instagram,
  Javascript,
  ReactJs,
  Python,
  Vuejs,
  TailwindCss,
  Angular,
  Git,
  Java,
  CPlusPlus,
  TwitterX,
  Linkedin,
  VscodeIcon,
} from "../components/svg";
import {} from "../components/svg";

function About() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "start",
        width: "100%",
        textAlign: "start",
      }}
    >
      <Navbar />
      <h1 style={{ padding: "0 5%" }}>About Me</h1>
      <p className="about-me">
        I'm Marsh Mansur, I'm 21 years old and I'm a front-end developer. I
        create dynamic and user-friendly websites. Specializing in React.js,
      </p>
      <p className="about-me">
        When I'm not coding, 'which is not often', I like to read books,
        expecially Greek mythology fantasies, "The Percy Jackson Series, The
        Song of Achilles, Adriadne and more". I also workout... psych!!.
        Weekends for me are movie-time so I go to the movies with friends and
        sometimes alone.
      </p>
      <p className="about-me">
        From a young age, music has always been a major part of my life, it has
        helped me overcome tough situations and put me in tough situations as
        well. I feel like proper music can be a tune that puts us in proper flow
        with life and existance in general. When I started coding it was a bit
        challenging but with the right song playing, I can accomplish anything.
      </p>
      <p className="about-me">
        As a software engineer, some of my major skills include programming
        languages (such as Java, Javascript, Python, or C++), problem-solving,
        algorithm design, and software development methodologies. Skills include
        version control (e.g., Git), debugging, unit testing, and data
        structures.
      </p>

      <h1 style={{ padding: "0 5%" }}>Skills & Tools</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <button className="skill-button">
          <Html />
          <em className="language">Html</em>
        </button>

        <button className="skill-button">
          <Css />
          <em className="language">Css</em>
        </button>

        <button className="skill-button">
          <Javascript />
          <em className="language">JavaScript</em>
        </button>

        <button className="skill-button">
          <Java />
          <em className="language">Java</em>
        </button>

        <button className="skill-button">
          <Python />
          <em className="language">Python</em>
        </button>

        <button className="skill-button">
          <CPlusPlus />
          <em className="language">C++</em>
        </button>

        <button className="skill-button">
          <ReactJs />
          <em className="language">React Js</em>
        </button>

        <button className="skill-button">
          <Vuejs />
          <em className="language">Vue Js</em>
        </button>

        <button className="skill-button">
          <TailwindCss />
          <em className="language">TailwindCss</em>
        </button>

        <button className="skill-button">
          <Angular />
          <em className="language">Angular</em>
        </button>

        <button className="skill-button">
          <Git />
          <em className="language">Git</em>
        </button>

        <button className="skill-button">
          <VscodeIcon />
          <em className="language">Visual Studio Code</em>
        </button>
      </div>

      <h1 style={{ padding: "0 5%" }}>Experience</h1>
    </div>
  );
}

export default About;
