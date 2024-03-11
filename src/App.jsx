import {
  Bullet,
  CPlusPlus,
  Email,
  Email2,
  Github,
  Java,
  Javascript,
  Menu,
  Python,
  ReactJs,
  Spotify,
  TailwindCss,
  TwitterX,
} from "./components/svg";
import gif from './assets/giphy.gif'
import { useRef } from "react";

// hi, this is my personnal site in react
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToDiv = (ref) => {
    const offsetTop = ref.current.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="main-page"
    >
      <div className="top-bar">
        <div className="link-to-section-container">
          <div onClick={() => scrollToDiv(homeRef)} className="link-to-section">
            <p>Home</p>
          </div>
          <div
            onClick={() => scrollToDiv(aboutRef)}
            className="link-to-section"
          >
            <p>About</p>
          </div>
          <div
            onClick={() => scrollToDiv(projectsRef)}
            className="link-to-section"
          >
            <p>Projects</p>
          </div>
        </div>
        <div className="links-to-socials">
          <div className="social-icon">
            <Github />
          </div>
          <div className="social-icon">
            <TwitterX />
          </div>
          <div className="social-icon">
            <Email />
          </div>
          <div className="social-icon">
            <Spotify />
          </div>
        </div>
        <div id="menu-icon" className="social-icon">
          <Menu />
        </div>
      </div>

      <div
        className="home"
        ref={homeRef}
      >
        <div className="intro">
          <div>
            <img className="gif-image" src={gif} alt="myGif" />
          </div>
          <h1>
            Sup! I'm <span>Marsh...</span>🍃
          </h1>
          <div>
            <div className="typist-container">
              <p className="typist-text">I build anything and everything</p>
            </div>
          </div>
        </div>
        <p className="quick-bio">
          I'm <b>Chelangat Marsh Mansur</b>, a 21 year old a full-stack
          developer. I create dynamic and user-friendly software. Specializing
          mainly in React.js. I have an{" "}
          <b>Advanced Diploma in Computer Science</b> from the{" "}
          <b>Sai Pali Institute of Technology Uganda</b>
        </p>
        <div className="dm-me">
          <Email2 />
          <p>say hello...</p>
        </div>
        <div className="quote">
          <div style={{ textAlign: "end" }}>
            <p className="quote-text">
              The World is But a Canvas to our Imagination.
            </p>
            <p className="quote-name">~Henry David Thoreau</p>
          </div>
        </div>
        <h1 ref={aboutRef} className="about-me-head">
          / About Me<div className="line"></div>
        </h1>
        <p className="full-bio">
          I am undertaking a part-time Bachelors Degree of Science in Software
          Engineering at University of Oxford. I've had experience in
          collaborating with diverse teams and fostering open communication and
          public speaking engagements.
        </p>
        <p className="full-bio">
          What I'm looking for is to obtain a challenging position where I can
          utilize my skills and contribute to the overral success of my team or
          company.
        </p>
        <p className="full-bio">
          As a software engineer, these are some of my majorly used tech-stack
        </p>
        <div className="stack-container">
          <div className="stack-wrapper">
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">Javascript Es6+</p>
              </div>
              <Javascript />
            </div>
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">React js</p>
              </div>
              <ReactJs />
            </div>
          </div>
          <div className="stack-wrapper">
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">Java</p>
              </div>
              <Java />
            </div>
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">Python</p>
              </div>
              <Python />
            </div>
          </div>
          <div className="stack-wrapper">
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">Tailwind Css</p>
              </div>
              <TailwindCss />
            </div>
            <div className="tech-stack">
              <div className="bullet">
                <Bullet />
                <p className="stack-name">C++</p>
              </div>
              <CPlusPlus />
            </div>
          </div>
        </div>
        <p className="full-bio">
          When I'm not coding, 'which is not often', I like to read books and workout...
          Weekends are movie-time so I go to the movies with friends and
          sometimes, most times alone.
        </p>
        <p className="full-bio">
          I genuinely can't say what my favourite song is, I have one or two for
          every specific mood of the time, But when i think{" "}
          <b>"favourite + artist,"</b> I think <b>Ruth B</b>
        </p>
        <h1 ref={projectsRef} className="about-me-head">
          / Projects<div className="line"></div>
        </h1>
        <div className="projects-container"></div>
      </div>
    </div>
  );
}

export default App;
