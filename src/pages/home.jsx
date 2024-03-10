// this i sthe main page and evidently the only page
import React, { useState, useRef } from "react";
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
  // opening and closing navigation panel
  const [isOpen, setIsOpen] = useState(false);

  // opening navbar
  const openNav = () => {
    setIsOpen(true);
  };
  // closing navbar
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
          backgroundColor: "#112240",
          color: "#fff",
        }}
      >
        {/* this are links to sections */}
        <div
          style={{
            width: "100%",
            height: "4rem",
            backgroundColor: "#112240",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999999999,
          }}
        >
          <div
            ref={topRef}
            className="light"
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "start",
              padding: "20px",
            }}
          >
            <div style={{ width: "10rem", margin: "10px" }}>
              <Link onClick={() => scrollToDiv(aboutRef)}>
                <button
                  className="main-buttons"
                  style={{
                    textAlign: "end",
                  }}
                >
                  <em style={{ fontSize: "16px" }}>About 🕊️</em>
                </button>
              </Link>
            </div>

            <div style={{ width: "10rem", margin: "10px" }}>
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
                  <em style={{ fontSize: "16px" }}>Projects 🛠</em>
                </button>
              </Link>
            </div>

            <div style={{ width: "10rem", margin: "10px" }}>
              <Link onClick={() => scrollToDiv(meRef)} className="main-link">
                <button
                  className="main-buttons"
                  style={{
                    textAlign: "end",
                  }}
                >
                  <em style={{ fontSize: "16px" }}>Me 🥷🏾</em>
                </button>
              </Link>
            </div>

            <div style={{ width: "10rem", margin: "10px" }}>
              <Link onClick={() => scrollToDiv(blogRef)} className="main-link">
                <button
                  className="main-buttons"
                  style={{
                    textAlign: "end",
                  }}
                >
                  <em style={{ fontSize: "16px" }}>Blog 📚</em>
                </button>
              </Link>
            </div>
          </div>
          <div
            style={{
              width: "15rem",
              display: "flex",
              flex: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <h1
              style={{
                fontWeight: "bolder",
                color: "#152b42",
                fontSize: "3rem",
              }}
            >
              <em>marsh</em>
            </h1>
          </div>
        </div>

        {/* topper with description */}
        <div className="topper">
          <div style={{ width: "85%" }}>
            <h4 style={{ padding: "20px" }}>Full-Stack Dev. </h4>
            <p style={{ padding: "0 20px" }}>
              I'm Marsh🍃, I build anything and everything <br />
            </p>
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
            <span style={{ border: "solid 0" }} className="skill-span">
              <a
                className="Link"
                href="https://open.spotify.com/user/sgw331agtxe12j35fd5jrjfwb?si=lraPTE8-RJiXJ5EnHntdbA"
              >
                <Spotify />
              </a>
            </span>

            <span style={{ border: "solid 0" }} className="skill-span">
              <a className="Link" href="https://github.com/forevermarsh">
                <Github />
              </a>
            </span>

            <span style={{ border: "solid 0" }} className="skill-span">
              <a
                className="Link"
                href="https://x.com/eternallyMarsh?t=xcnqLKgEzIopgvV4e59AnA&s=09"
              >
                <TwitterX />
              </a>
            </span>

            <span style={{ border: "solid 0" }} className="skill-span">
              <a className="Link" href="https://instagram.com/forever.marsh">
                <Instagram />
              </a>
            </span>

            <span style={{ border: "solid 0" }} className="skill-span">
              <a className="Link" href="eternallymarsh04@gmail.com">
                <Email />
              </a>
            </span>

            <span style={{ border: "solid 0" }} className="skill-span">
              <a className="Link" href="eternallymarsh04@gmail.com">
                <Discord />
              </a>
            </span>
          </div>
        </div>

        {/* new section for my About content */}
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
          <p className="about-me">
            I'm Chelangat Marsh Mansur, 21 and a full-stack developer. I create
            dynamic and user-friendly software. Specializing mainly in React.js.{" "}
            <br /> I'm not good at fancy talk but I definitely know how to get
            things done. I have excellent verbal and written communication
            skills, with the ability to express ideas clearly and concisely. I
            also have strong listening skills and the ability to understand and
            respond effectively to others. I've had experience in collaborating
            with diverse teams and fostering open communication and public
            speaking engagements. I have an{" "}
            <b>Advanced Diploma in Computer Science</b> from the{" "}
            <b>Sai Pali Institute of Technology Uganda</b>
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
            I keep my skills upto date is by doing stuff, building stuff. I get
            basic ideas like To-do lists and put a little fun in it. I also work
            on random projects on Github repositories and instagram reels. Out
            of all the stuff I've built, here are my top 20... feel free to
            check them out.
          </p>
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

        {/* opning navigation icon */}
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

      {/* navigation panel */}
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

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 128 128"
>
  <path
    fill="#eee"
    d="M1827.42 49.04c-.01-2.6-.17-5.16-.47-7.62c-2-16.35-11.24-30.55-24.12-37.07c-6.06-3.06-12.39-4.29-18.93-3.66c-12.49 1.25-25.33 8.45-32.73 20.82c-17.74 29.67-6.38 65.56-3.38 71.66c15.34 31.17 40.12 33.83 52.62 32.82c13.58-1.1 29.43-6.61 31.69-12.81c.53-1.47.46-3.06-.2-4.48c-1.3-2.75-3.95-2.49-4.82-2.41l-.99.11l-.26.01c-3.78-.05-5.44-1.02-6.59-3.81c-1.75-4.27-.31-10.54 1.15-15.52c2.99-10.23 7.1-24.24 7.03-38.04"
  ></path>
  <path
    fill="#2f2f2f"
    d="M1589.43 43.38c2.03-.26 4.2-.43 6.25-.1c2.09.35 4.09 1.47 6.27 1.28c1.42-.12 3-1.04 3.88-2.14c1.88-2.32 2.21-5.45 1.37-8.24c-.61-2-1.82-3.82-3.52-5.06c-4.16-3.05-10.51-1.68-14.22 1.67c-2.8 2.52-6.88 7.72-5.29 11.87c.69 1.79 3.97.87 5.26.72m-31.29-1.95c1.63.58 3.39.03 4.96.14c1.46.1 2.8.62 3.99 1.16c.71.32 2.31 1.45 3.19.3c2.13-2.73 1.6-7.74.8-10.77c-1.21-4.59-5.47-8.92-10.14-7.24c-1.96.71-3.67 2.36-4.81 4.48c-1.53 2.85-1.94 6.31-.75 9.13c.52 1.23 1.62 2.39 2.76 2.8m32.56 9.21c-4.66.07-8.6 3.68-12.97 3.98c-4.29.31-6.55-.8-9.68-3.48c-4.84-4.14-10.49 0-9.32 6.26c.51 2.74 1.57 5.22 3.04 7.37c4.18 6.16 11.86 9.71 19.55 7.56c4.72-1.32 9.75-4.86 13.41-8.65c4.71-4.87 3.93-13.15-4.03-13.04"
  ></path>
  <path
    fill="#eee"
    d="M1825.74 71.94c7.12.71 16.13-2.71 20.21-7.53c3.31-3.92 5.83-9.63 5.78-15.4c-.02-2.31-.44-4.64-1.41-6.86c-1.11-2.53-2.77-4.3-4.83-5.09c-1.08-.41-2.7-.73-4.7-.15c-.38.12-.79.26-1.18.45c-2.93 1.3-4.42 3.46-5.75 5.38c-1.03 1.5-2.31 3.26-3.79 4.35c-.67.5-1.16.8-1.97 1.04c-.81.23-1.61.32-2.43.1c-.64-.15-1.23-.61-1.88-.68c-1.68-.2-2.19 1.4-1.4 2.65c.7 1.11 3.14 21.72 3.35 21.74m-76.02 0c-7.12.71-16.13-2.71-20.21-7.53c-3.31-3.92-5.83-9.63-5.78-15.4c.02-2.31.44-4.64 1.41-6.86c1.11-2.53 2.77-4.3 4.83-5.09c1.08-.41 2.7-.73 4.7-.15c.38.12.79.26 1.18.45c2.93 1.3 4.42 3.46 5.75 5.38c1.03 1.5 2.31 3.26 3.79 4.35c.67.5 1.16.8 1.97 1.04c.81.23 1.61.32 2.43.1c.64-.15 1.23-.61 1.88-.68c1.68-.2 2.19 1.4 1.4 2.65c-.7 1.11-3.14 21.72-3.35 21.74"
  ></path>
  <g fill="#2f2f2f">
    <path d="M1677.44 43.69c2.18-.37 4.52-.65 6.75-.42c2.28.24 4.5 1.26 6.85.96c1.53-.19 3.18-1.19 4.08-2.33c1.9-2.41 2.09-5.55 1.03-8.3c-.77-1.97-2.18-3.73-4.09-4.87c-4.67-2.83-11.35-1.04-15.27 2.4c-4.02 3.53-6.96 9.51-5.06 12.13c1.14 1.58 4.33.65 5.71.43m-27.22 0c-2.18-.37-4.52-.65-6.75-.42c-2.28.24-4.5 1.26-6.85.96c-1.53-.19-3.18-1.19-4.08-2.33c-1.9-2.41-2.09-5.55-1.03-8.3c.77-1.97 2.18-3.73 4.09-4.87c4.67-2.83 11.35-1.04 15.27 2.4c4.02 3.53 6.96 9.51 5.06 12.13c-1.14 1.58-4.33.65-5.71.43m27.79 6.95c-5.73.51-8.92 4.97-15.16 4.97v17.31c7.7 0 15.63-4.38 19.52-9.24c4.4-5.49 4.2-13.8-4.36-13.04"></path>
    <path d="M1647.69 50.64c5.73.51 8.92 4.97 15.16 4.97v17.31c-7.7 0-15.63-4.38-19.52-9.24c-4.4-5.49-4.2-13.8 4.36-13.04"></path>
  </g>
  <path
    fill="#2f2f2f"
    d="M1798.56 45.01c1.74-.29 3.59-.51 5.37-.34c1.81.19 3.58 1 5.45.76c1.22-.15 2.53-.95 3.24-1.86c1.51-1.92 1.66-4.42.82-6.6a7.904 7.904 0 0 0-3.25-3.87c-3.71-2.25-9.03-.83-12.15 1.91c-3.2 2.8-5.53 7.56-4.02 9.65c.9 1.26 3.44.52 4.54.35m-21.66 0c-1.74-.29-3.59-.51-5.37-.34c-1.81.19-3.58 1-5.45.76c-1.22-.15-2.53-.95-3.24-1.86c-1.51-1.92-1.66-4.42-.82-6.6a7.904 7.904 0 0 1 3.25-3.87c3.71-2.25 9.03-.83 12.15 1.91c3.2 2.8 5.53 7.56 4.02 9.65c-.9 1.26-3.44.52-4.54.35m22.11 5.52c-4.56.41-6.36 3.04-12.06 3.04v14.68c6.12 0 12.43-3.48 15.53-7.35c3.5-4.36 3.34-10.97-3.47-10.37m-24.12 0c4.56.41 6.36 3.04 12.06 3.04v14.68c-6.12 0-12.43-3.48-15.53-7.35c-3.49-4.36-3.33-10.97 3.47-10.37"
  ></path>
  <path
    fill="#eee"
    d="M1949.98 49.04c-.01-2.6-.17-5.16-.47-7.62c-2-16.35-11.24-30.55-24.12-37.07c-6.06-3.06-12.39-4.29-18.93-3.66c-12.49 1.25-25.33 8.45-32.73 20.82c-17.74 29.67-6.38 65.56-3.38 71.66c15.34 31.17 40.12 33.83 52.62 32.82c13.58-1.1 29.43-6.61 31.69-12.81c.53-1.47.46-3.06-.2-4.48c-1.3-2.75-3.95-2.49-4.82-2.41l-.99.11l-.26.01c-3.78-.05-5.44-1.02-6.59-3.81c-1.75-4.27-.31-10.54 1.15-15.52c2.99-10.23 7.1-24.24 7.03-38.04"
  ></path>
  <path
    fill="#2f2f2f"
    d="M1918.63 45.01c1.74-.29 3.59-.51 5.37-.34c1.81.19 3.58 1 5.45.76c1.22-.15 2.53-.95 3.24-1.86c1.51-1.92 1.66-4.42.82-6.6a7.904 7.904 0 0 0-3.25-3.87c-3.71-2.25-9.03-.83-12.15 1.91c-3.2 2.8-5.53 7.56-4.02 9.65c.91 1.26 3.44.52 4.54.35m-21.65 0c-1.74-.29-3.59-.51-5.37-.34c-1.81.19-3.58 1-5.45.76c-1.22-.15-2.53-.95-3.24-1.86c-1.51-1.92-1.66-4.42-.82-6.6a7.904 7.904 0 0 1 3.25-3.87c3.71-2.25 9.03-.83 12.15 1.91c3.2 2.8 5.53 7.56 4.02 9.65c-.9 1.26-3.44.52-4.54.35m-2.01 23.2c4.56-.41 6.36-3.04 12.06-3.04V50.49c-6.12 0-12.43 3.48-15.53 7.35c-3.49 4.37-3.33 10.98 3.47 10.37m24.12 0c-4.56-.41-6.36-3.04-12.06-3.04V50.49c6.12 0 12.43 3.48 15.53 7.35c3.5 4.37 3.34 10.98-3.47 10.37"
  ></path>
  <path
    fill="#eee"
    d="M1521.1 50.53c-.01-2.6-.17-5.16-.47-7.62c-2-16.35-11.24-30.55-24.12-37.07c-6.06-3.06-12.39-4.29-18.93-3.66c-12.49 1.25-25.33 8.45-32.73 20.82c-17.74 29.67-6.38 65.56-3.38 71.66c15.34 31.17 40.12 33.83 52.62 32.82c13.58-1.1 29.43-6.61 31.69-12.81c.53-1.47.46-3.06-.2-4.48c-1.3-2.75-3.95-2.49-4.82-2.41l-.99.11l-.26.01c-3.78-.05-5.44-1.02-6.59-3.81c-1.75-4.27-.31-10.54 1.15-15.52c3-10.23 7.11-24.25 7.03-38.04m-151.31 58.7c2.59-13.72 4.41-27.8 4.7-41.75c.25-12.21 1.22-24.62 5.55-36.04c4.33-11.42 12.44-21.87 23.68-26.66c4.59-1.96 9.56-2.79 14.53-2.63v116.37c-1.92.03-3.83.36-5.63 1.09c-4.62 1.87-8.32 4.16-13.28 4.54c-4.87.37-9.15-3.17-13.94-4.11c-2.9-.57-5.98-.14-8.61 1.19c-1.74.88-3.28 2.14-5.07 2.9c-1.79.76-4.04.94-5.56-.27c1.35-4.83 2.69-9.69 3.63-14.63"
  ></path>
  <path
    fill="#006ca2"
    d="M1349.74 59.6c-.21-3.16-.49-6.35-1.04-9.41c-1.58-9-7.61-18.28-17.19-20.2c-6.2-1.24-10.94 2.45-16.61 3.78c-.18.04-1.64-1.44-1.88-1.62c-.71-.54-1.46-1.03-2.24-1.47c-1.61-.93-3.34-1.65-5.11-2.22c-3.62-1.15-7.49-1.63-11.28-1.35c-3.07.22-6.19.96-8.85 2.55c-1.21.73-2.32 1.64-3.22 2.74c-1.19 1.45-1.6 3.05-2.24 4.79c-1.49 4.05-5.45 7.08-8.29 10.21c-3.32 3.67-6.72 7.27-10.42 10.56c-7.19 6.39-16.05 10.27-23.56 16.19c-8.52 6.71-16.59 18.65-14.31 30.06c1.07 5.39 5.97 9.31 10.89 11.25c15.38 6.07 30.93 5.97 47.02 2.69c8.41-1.72 16.55-4.42 24.65-7.25c7.73-2.7 15.59-5.02 23.21-8.04c6.55-2.59 20.82-7.34 20.79-16.22c-.04-9.04.3-18-.32-27.04"
  ></path>
  <path
    fill="#fff"
    d="M1334.86 45.8c1.06-1.03 2.07-2.29 2.69-3.64c.2-.43.21-.96.26-1.45c.04-.36.1-.71.26-.98c.13-.21 2.49 2.84 2.71 3.2c1.88 3.13 2.12 6.73 2.28 10.29c.1 2.3-1.09 2.02-2.91 1.85c-1.46-.13-2.94-.16-4.41-.22c-1.16-.05-2.32-.36-2.99-1.37c-.61-.91-.61-2.07-1.04-3.03c-1.06-2.29 1.74-3.28 3.15-4.65"
  ></path>
  <path
    fill="#40c0e7"
    d="M1286.94 36.86c5.28-6.3 19.79-3.5 24.17 2.74c.97 1.38 1.38 3.35 1.08 5c-.37 1.98-1.76 2.67-3.39 3.52c-.67.35-1.94 1.45-2.74 1.24c-.88-.24-1.26-1.67-1.89-2.26c-4.24-3.99-10.63-5.25-16.27-5.26c-.75 0-1.52.23-2.25.14c-.31-.04-.5-.2-.57-.45c-.39-1.16 1.4-4.14 1.86-4.67"
  ></path>
  <path
    fill="#fff"
    d="M1279.45 47.57c.34-.53.76-.96 1.26-1.33c.3-.22.65-.38 1.02-.49c4.15-1.2 9.11.36 13.13 1.5c2.59.73 10.46 3.23 7.69 7.38c-.72 1.07-2.17 1.79-3.45 1.72c-1.83-.1-3.16-1.48-4.71-2.29c-1.75-.91-3.46-1.76-5.34-2.4a56.29 56.29 0 0 0-4.63-1.42c-1.36-.35-2.56-.29-3.94-.45c-.35-.04-.64.04-.97-.13c-.73-.41-.41-1.53-.06-2.09m-7.45 6.85c1.07-1.33 2.57-1.63 4.14-1.7c.56-.03 1.14-.02 1.71-.02c3.44 0 6.85.79 9.95 2.3c2.07 1 4.34 2.04 5.83 3.84c.87 1.05 1.76 2.08 1.35 3.54c-1.33 4.67-7.24-.64-9.14-1.65c-1.65-.86-3.67-1.9-5.44-2.43c-.9-.27-1.84-.33-2.73-.58c-1.71-.47-3.34-.58-5.06-.84c-1.48-.21-1.36-1.51-.61-2.46m-7.7 7.34c.78-1.33 2.61-1.69 4.01-1.85h.08c2.92-.3 6.25.65 9.04 1.47c.97.29 2.1.57 3.03.97c2.02.87 4.27 2.07 5.77 3.68c2.28 2.44-.42 4.36-3.2 4.1c-.48-.04-.85-.25-1.3-.39c-.68-.21-1.39-.26-2.08-.44c-2.01-.56-3.86-1.41-5.67-2.41c-.92-.51-1.88-.83-2.87-1.22c-1.18-.48-2.32-.82-3.53-1.25c-.94-.34-2.47-.29-3.27-.94c-.46-.41-.31-1.22-.01-1.72m-25.88 20.32c1.84-1.79 3.85-3.4 5.91-4.92c2.42-1.77 4.92-3.41 7.44-5.04c1.28-.82 2.54-1.65 3.83-2.46c.86-.54 1.79-.87 2.76-1.04c3.15-.57 6.72.52 9.53 1.61c2.14.84 4.19 1.89 6.23 2.94c3.74 1.94 3.36 5.39 3.69 9.16c.24 2.74.37 5.5.37 8.25c0 1.38-.03 2.76-.1 4.13c-.1 2.06-.77 3.65-2.98 4.1c-1.2.24-2.43.42-3.64.6c-2.4.36-4.8.63-7.23.83c-5.45.45-11.08.2-16.48-.74c-3.44-.6-7-1.51-9.99-3.38c-2.2-1.37-4.2-3.71-4.14-6.43c.07-3.27 2.63-5.49 4.8-7.61"
  ></path>
  <path
    fill="#fff"
    d="M1341.43 88.37c-4.51 3.56-10.12 5.12-15.36 7.26c-5.81 2.38-11.47 4.88-17.46 6.8c-6.45 2.08-12.95 4.04-19.37 6.21c-9.43 3.18-19.51 4.99-29.46 4.68c-5.51-.17-10.98-.98-16.38-2.14c-3.43-.74-6.9-1.99-9.64-4.24c-1.79-1.47-3.32-3.46-4-5.69c-.34-1.14-.4-2.32-.17-3.48c.44-2.26 1.56-1.72 2.51-.14c1.15 1.92 2.86 3.15 4.75 4.27c2.09 1.22 4.36 2.09 6.68 2.76c1.73.51 3.5.9 5.28 1.22c5.99 1.08 12.1.95 18.14.39c11.36-1.05 22.24-4.78 32.74-9.04c3.17-1.28 6.3-2.62 9.45-3.96c5.42-2.31 10.74-4.83 16.12-7.25c4.97-2.24 10.37-3.85 15.14-6.48c.62-.34 1.18-.99 1.67-.33c.65.86.22 3.49.18 4.69v.14c0 1.31.34 3.42-.82 4.33"
  ></path>
  <path
    fill="#40c0e7"
    d="M1343.56 68.43c-.17 1.93-1.38 2.91-2.98 3.91c-1.94 1.2-3.77 2.51-5.82 3.51c-4.03 1.97-8.21 3.71-12.33 5.5c-5.3 2.31-10.69 4.44-16.11 6.42c-2.5.91-20.04 10.06-21.58 6.76c-.32-.71-.19-2.25-.18-3.03c.01-1.05.24-2.14.1-3.19c-.22-1.79-.36-3.62-.75-5.38c-.25-1.13-.48-2.26-.88-3.35c-.43-1.19-.84-2.77.47-3.58c.48-.3 1.28-.43 1.84-.5c.8-.1 1.55-.2 2.32-.5c2.26-.87 3.63-2.48 4.11-4.85c.22-1.11 1.43-.85 2.27-.88c.52-.02.88-.3 1.34-.47c1.36-.5 2.66-1.2 3.59-2.33c.48-.57.8-1.18 1.04-1.88c.31-.85 0-1.74.3-2.55c.4-1.12 2.82-.97 3.72-1.42c1.34-.67 2.49-1.8 3.02-3.2c.47-1.24-.01-3.12 1.21-3.98c.48-.34 1.29-.36 1.85-.56c1.25-.44 2.57-1.5 3.94-1.22c1.42.29 2.62.89 4.12.93c1.52.04 3.04-.19 4.52-.56c1.14-.28 2.15-.9 3.29-1.18c1.8-.44 1.79 2.18 1.81 3.37c.03 1.89 1.15 3.6 2.87 4.44c3.88 1.88 9.12.24 12.76 2.36c.1 2.47.35 4.96.14 7.41"
  ></path>
  <path fill="#e1f5fe" d="m1.66 10.5l42.51-8.72l-1.86 28.04z"></path>
  <path fill="#81d4fa" d="M20.78 68.9L1.66 10.5l40.65 19.32z"></path>
  <path fill="#64b5f6" d="M64.3 63.7L42.31 29.82L20.78 68.9z"></path>
  <path fill="#0288d1" d="m117.5 126.34l8.72-42.51l-28.04 1.86z"></path>
  <path fill="#81d4fa" d="m59.1 107.22l58.4 19.12l-19.32-40.65z"></path>
  <path fill="#e1f5fe" d="m64.3 63.7l33.88 21.99l-39.08 21.53z"></path>
  <path fill="#b2ebf2" d="m59.1 107.22l5.2-43.52l-43.52 5.2z"></path>
  <path
    fill="#b3e5fc"
    d="m75.95 11.57l40.48 40.48l9.79 31.78l-28.04 1.86L64.3 63.7L42.31 29.82l1.86-28.04z"
  ></path>
  <path fill="#1e88e5" d="M2.24 125.76L1.66 10.5l19.12 58.4z"></path>
  <path fill="#b3e5fc" d="m2.24 125.76l115.26.58l-58.4-19.12z"></path>
  <path fill="#e1f5fe" d="M59.1 107.22L2.24 125.76L20.78 68.9z"></path>
</svg>;
