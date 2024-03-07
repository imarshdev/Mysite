// this i sthe main page and evidently the only page
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import "../index.css";
// i use svg icons because they are easier and don't slow your site
import {
  Spotify,
  Linkedin,
  Discord,
  Github,
  Instagram,
  TwitterX,
  Snapchat,
  Email,
  Html,
  Css,
  Javascript,
  Java,
  Python,
  CPlusPlus,
  ReactJs,
  Vuejs,
  TailwindCss,
  Angular,
  Git,
  VscodeIcon,
  Letterboxd,
  Menu,
  Close,
} from "../components/svg";

// main component "home"
function Home() {
  // not entirely usefull but whatever
  const [isDarkMode, setIsDarkMode] = useState(false);

  // opening and closing navigation panel
  const [isOpen, setIsOpen] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  // the click sound you hear
  function play() {
    new Audio(clickSound).play();
  }

  const all = () => {
    play();
    toggleMode();
  };
  // navigating to sections, i simply don't like uaing the <a> tag!!!
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const meRef = useRef(null);
  const topRef = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
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
        {/* the topper with my name */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flex: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <h1
            style={{ fontWeight: "bolder", color: "#152b42", fontSize: "3rem" }}
          >
            <em>marsh</em>
          </h1>
        </div>

        {/* topper with description */}
        <div className="topper">
          <div className="picture"></div>
          <div style={{ width: "65%" }}>
            <h4 style={{ padding: "20px" }}>Senior software Engineer.</h4>
            <p style={{ padding: "0 20px" }}>
              Hi I'm Marsh🍃, a software developer, I build anything and
              everything <br />
            </p>
          </div>
        </div>

        {/* this are links to sections */}
        <div
          ref={topRef}
          className="light"
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
          <div className="link-div">
            <Link onClick={() => scrollToDiv(aboutRef)} className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>About🕊️</em>
                <p style={{ fontSize: "14px" }}>
                  My background, skills, and experience as a front-end
                  developer.
                </p>
              </button>
            </Link>
          </div>

          <div className="link-div">
            <Link
              onClick={() => scrollToDiv(projectsRef)}
              className="main-link"
            >
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Projects🛠</em>
                <p style={{ fontSize: "14px" }}>
                  Projects with descriptions, screenshots, and links to GitHub
                  repositories.
                </p>
              </button>
            </Link>
          </div>

          <div className="link-div">
            <Link onClick={() => scrollToDiv(meRef)} className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Me🥷🏾</em>
                <p style={{ fontSize: "14px" }}>
                  What I love, from music I listen to, to the books I read and
                  stuff
                </p>
              </button>
            </Link>
          </div>

          <div className="link-div">
            <Link onClick={() => scrollToDiv(blogRef)} className="main-link">
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Blog📚</em>
                <p style={{ fontSize: "14px" }}>
                  Posts, articles, notes and PDF books related to front-end
                  development,
                </p>
              </button>
            </Link>
          </div>
        </div>

        {/* random quote */}
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

        {/* new section for my About content */}
        <div
          ref={aboutRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "start",
            width: "100%",
            textAlign: "start",
          }}
        >
          <h1 style={{ padding: "0 5%" }}>About Me</h1>
          <p className="about-me">
            I'm Chelangat Marsh Mansur, 21 and a full-stack developer. I create
            dynamic and user-friendly software. Specializing mainly in React.js.{" "}
            <br /> I'm not good at fancy talk but I definitely know how to get
            things done. I have excellent verbal and written communication
            skills, with the ability to express ideas clearly and concisely. I
            also have strong listening skills and the ability to understand and
            respond effectively to others. I've had experience in collaborating
            with diverse teams and fostering open communication and public
            speaking engagements. I have a{" "}
            <b>Bachelor's degree in Computer Science</b> from the{" "}
            <b>Sai Pali Institute of Technology</b>
          </p>
          <p className="about-me">
            What I'm looking for is to obtain a challenging position where I can
            utilize my skills and contribute to the overral success of my team
            or company.
          </p>
          <p className="about-me">
            As a software engineer, some of my major skills include programming
            languages (such as Java, Javascript, Python, and C++),
            problem-solving, algorithm design, and software development
            methodologies. Other skills include version control (e.g., Git),
            debugging, unit testing, and data structures.
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
              <em className="language">VS Code</em>
            </button>
          </div>
        </div>

        {/* new section for my projects */}
        <div
          ref={projectsRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Projects</h1>
          <p style={{ padding: "0 10%", textAlign: "center" }}>
            The way I keep my skills upto date is by doing stuff, building
            stuff. I get basic ideas like To-do lists and put a little fun in
            it. I also work on random projects on Github repositories and
            instagram reels. Out of all the stuff I've built, here are my top
            20... feel free to check them out
          </p>
          <ul className="project-names">
            <p>
              <b>Front-End</b>
            </p>
            <li className="project-name">Real Time Chat App</li>
            <li className="project-name">Music Player</li>
            <li className="project-name">
              Single page application (SPA) using Angular
            </li>
            <li className="project-name">
              Movie Library App (PWA with offline mode)
            </li>
            <li className="project-name">
              Custom theme for Contant Management
            </li>
            <li className="project-name">Browser extension (Grammarly)</li>
            <li className="project-name">Blockchain smart contract</li>
            <li className="project-name">E-commerce shopping site</li>
            <li className="project-name">
              Interactive data visualization dashboard using D3.js
            </li>
            <li className="project-name">ToDoList WebApp... obviously</li>
            <p>
              <b>Front-End</b>
            </p>
            <li className="project-name">
              A RESTful API for a social media application
            </li>
            <li className="project-name">
              An authentication service with OAuth integration
            </li>
            <li className="project-name">
              A real-time bidding system for auctions
            </li>
            <li className="project-name">
              A content aggregation service (news feed)
            </li>
            <li className="project-name">
              A microservices architecture-based application
            </li>
            <li className="project-name">
              A cloud-based file storage and sharing service
            </li>
            <li className="project-name">
              A chatbot with natural language processing
            </li>
            <li className="project-name">
              A search engine with a custom algorithm
            </li>
            <li className="project-name">
              An IoT system backend for device management
            </li>
            <li className="project-name">
              A recommendation engine based on user behavior
            </li>
          </ul>
        </div>

        {/* new section for more about me */}
        <div
          ref={meRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Here's What I love</h1>
          <p className="about-me">
            When I'm not coding, 'which is not often', I like to read books,
            expecially Greek mythology fantasies, "The Percy Jackson Series, The
            Song of Achilles, Adriadne and more". I also workout... psych!!.
            <br />
            Weekends for me are movie-time so I go to the movies with friends
            and sometimes, most times alone.
          </p>
          <p className="about-me">
            I just watched Dune part 2, the first movie was amazing but this one
            is just something else entirely. I bought the six Og dune books and
            I'm gonna be binge reading. Denis Villeneuve just made my top three
            movie directors of all time and Dune part two just become my secon
            favourite movie of all time.
          </p>
          <p className="about-me">
            From a young age, music has always been a major part of my life, it
            has helped me overcome tough situations and put me in tough
            situations as well. I feel like proper music can be a tune that puts
            us in proper flow with life and existance in general. When I started
            coding it was a bit challenging but with the right song playing, I
            can accomplish anything.
          </p>
          <p style={{ padding: "0 10%", textAlign: "center" }}>
            I genuinely can't say what my favourite song is, I have one or two
            for every specific mood of the time. <br />
            But when i think <em>"favourite + artist,"</em> I think{" "}
            <b>Ruth B</b> I listen to the Safe Heaven Album atleast five times a
            day.
          </p>

          <p style={{ padding: "0 10%", textAlign: "center" }}>
            Other artists I listen to are
            <b>
              Kanye West, Doja Cat, Shakira, Megan Washington and Billie Eilish
            </b>
          </p>

          <span style={{ width: "40%" }}>
            <a
              className="Link"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                textDecoration: "none",
              }}
              href="https://open.spotify.com/playlist/7vwApBAR0SqbXmqxrFmrk9?si=vpz1JtYKSzOLeKq46kLMPQ"
            >
              <Spotify />
              <em style={{ paddingLeft: "5%" }}>My Coding Playlist</em>
            </a>
          </span>

          <p style={{ padding: "0 10%", textAlign: "center" }}>
            <b>"Cinema,"</b> a creation by Auguste and Luis Lumiere. I love
            movies and tv, people say it's an escape from reality but it's a
            visit to the limits of reality. <br />
            Over my young life, I've come to appreciate the work of directors{" "}
            <b>
              David Fincher, Denis Villeneuve, Christopher Nolan and Quentin
              Tarantino.
            </b>
          </p>

          <span style={{ width: "40%" }}>
            <a
              className="Link"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                textDecoration: "none",
              }}
              href="https://boxd.it/8LFkD"
            >
              <Letterboxd />
              <em style={{ paddingLeft: "5%" }}>My Letterboxd</em>
            </a>
          </span>

          <p style={{ padding: "0 10%" }}>
            I also love reading books, Cooking & Eating, Lucid dreaming and
            Writing.
          </p>

          <p style={{ padding: "0 10%" }}>
            My Favourite movies are; <br />
            <ul>
              <li>Intersteller</li>
              <li>Dune Part 2</li>
              <li>Gone Girl</li>
              <li>Fight Club</li>
              <li>Beetlejuice</li>
            </ul>
          </p>

          <p style={{ padding: "0 10%" }}>
            My Favourite Animations are; <br />
            <ul>
              <li>Rick & Morty</li>
              <li>Avatar the last Airbender</li>
              <li>One Piece</li>
              <li>Death Note</li>
              <li>Attack on Titan</li>
            </ul>
          </p>

          <p style={{ padding: "0 10%" }}>
            These are the books I read <br />
            <ul>
              <li>
                Dune Series <br /> ~Frank Herbert
              </li>
              <li>
                Percy Jackson Series (on repeat) <br /> ~Rick Riordan
              </li>
              <li>
                Ms Dalloway <br /> ~Virginia Woolf
              </li>
              <li>
                Twilight <br /> ~Stephanie Meyer
              </li>
              <li>
                Warm Bodies <br /> ~Isaac Marion
              </li>
              <li>
                The Haunting of Hill House <br /> ~Shirly Jackson
              </li>
            </ul>
          </p>
        </div>

        {/* links to my social media */}
        <div style={{ height: "30vh" }}>
          <p style={{ padding: "0 10%", textAlign: "center" }}>
            Check me out...
          </p>
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

            <span className="skill-span">
              <a className="Link" href="eternallymarsh04@gmail.com">
                <Discord />
              </a>
            </span>
          </div>
        </div>

        {/* new section for my blog content */}
        <div
          ref={blogRef}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1 style={{ color: "black" }}>Blog</h1>
          <p style={{ padding: "0 10%", textAlign: "center" }}>
            welcome to my blog, I'm not entirely sure what the purpose of a blog
            is but I for sure know its to say things I like, do and to give
            programming tips
          </p>
        </div>
        <span
          onClick={openNav}
          style={{
            display: isOpen ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
            position: "fixed",
            bottom: 0,
            right: 0,
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
          }}
        >
          <Menu />
        </span>
      </div>

      <div
        className="navigation-panel"
        style={{ display: isOpen ? "initial" : "none" }}
      >
        {/* this are links to sections */}
        <div
          ref={topRef}
          className="light"
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
          <div className="link-div" onClick={closeNav}>
            <Link onClick={() => scrollToDiv(aboutRef)} className="main-link">
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

          <div className="link-div" onClick={closeNav}>
            <Link
              onClick={() => scrollToDiv(projectsRef)}
              className="main-link"
            >
              <button
                className="main-buttons"
                style={{
                  textAlign: "end",
                }}
              >
                <em style={{ fontSize: "20px" }}>Projects</em>
                <p style={{ fontSize: "14px" }}>
                  Projects with descriptions, screenshots, and links to GitHub
                  repositories.
                </p>
              </button>
            </Link>
          </div>

          <div className="link-div" onClick={closeNav}>
            <Link onClick={() => scrollToDiv(meRef)} className="main-link">
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

          <div className="link-div" onClick={closeNav}>
            <Link onClick={() => scrollToDiv(blogRef)} className="main-link">
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
        </div>
        <span
          onClick={closeNav}
          style={{
            display: isOpen ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
            position: "fixed",
            bottom: 0,
            right: 0,
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
          }}
        >
          <Close />
        </span>
      </div>
    </div>
  );
}

export default Home;
