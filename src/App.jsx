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
import FadeInView from "./components/fadein";
import man from "./assets/man.gif";
import emoji from "./assets/emoji.gif";
import bidding from "./assets/bidding.gif";
import social from "./assets/social.gif";
import shop from "./assets/shop.gif";
import smart from "./assets/smart.gif";
import garden from "./assets/garden.gif";
import { useEffect, useRef, useState } from "react";

// hi, this is my personnal site in react
function App() {
  // navigation
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  // active navigation
  const [activeSection, setActiveSection] = useState('')

  // projects
  const projects = [
    {
      title: "Chirpy",
      description:
        "A social media application built in Vue.js for front-end, Node.js for the back-end, MongoDb and Django Rest Framework.",
      gifUri: social,
    },
    {
      title: "BidWar",
      description:
        "A real-time bidding system for online auctions using React for front End, Flask for the backend and MongoDb",
      gifUri: bidding,
    },
    {
      title: "GreenThumb Guardian",
      description:
        "A smart garden system to monitor soil moisture, light levels, temperature and more to maintain plants. built using Raspberry Pi, Google cloud IoT and Java/Swift",
      gifUri: garden,
    },
    {
      title: "SmartContract",
      description:
        "A blockchain smart contract for Ethereum built using solidity and Truffle to compile, deploy and interract with",
      gifUri: smart,
    },
    {
      title: "Browser Extentions",
      description:
        "Several browser extensions built for productivity and utility",
      gifUri: emoji,
    },
    {
      title: "Carts",
      description: "An e-commerce website with shopping cart functionality",
      gifUri: shop,
    },
  ];

  const scrollToDiv = (ref) => {
    const offsetTop = ref.current.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        })
      },
      { rootMargin: '0px', threshold: 0.6 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current)
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }if (blogRef.current) {
      observer.observe(blogRef.current);
    }
    return () => {
      observer.disconnect()
    }
  }, []);

  return (
    <div className="main-page">
      <div className="top-bar">
        <div className="link-to-section-container">
          <div onClick={() => scrollToDiv(homeRef)} className="link-to-section">
            <span className="section-name">
              <span className="number">0.1</span>
              <p className={activeSection === "home" ? "active" : ""}>Home</p>
            </span>
          </div>
          <div
            onClick={() => scrollToDiv(aboutRef)}
            className="link-to-section"
          >
            <span className="section-name">
              <span className="number">0.2</span>
              <p className={activeSection === "about" ? "active" : ""}>About</p>
            </span>
          </div>
          <div
            onClick={() => scrollToDiv(projectsRef)}
            className="link-to-section"
          >
            <span className="section-name">
              <span className="number">0.3</span>
              <p className={activeSection === "project" ? "active" : ""}>
                Projects
              </p>
            </span>
          </div>
          <div onClick={() => scrollToDiv(blogRef)} className="link-to-section">
            <span className="section-name">
              <span className="number">0.4</span>
              <p className={activeSection === "experience" ? "active" : ""}>
                Experience
              </p>
            </span>
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
      </div>

      <div className="home">
        <section className="sections" id="home" ref={homeRef}>
          <div className="intro">
            <FadeInView>
              <img className="gif-image" src={man} alt="myGif" />
            </FadeInView>
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
        </section>

        <section className="sections" id="about" ref={aboutRef}>
          <h1 className="about-me-head">
            / About Me<div className="line"></div>
          </h1>
          <p className="full-bio">
            I am undertaking a part-time Bachelors Degree of Science in Software
            Engineering at University of Oxford. I've had experience in
            collaborating with diverse teams and fostering open communication
            and public speaking engagements.
          </p>
          <p className="full-bio">
            What I'm looking for is to obtain a challenging position where I can
            utilize my skills and contribute to the overral success of my team
            or company.
          </p>
          <p className="full-bio">
            As a software engineer, these are some of my majorly used tech-stack
          </p>
          <div className="stack-container">
            <div className="stack-wrapper">
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">Javascript Es6+</p>
                  </div>
                  <Javascript />
                </div>
              </FadeInView>
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">React js</p>
                  </div>
                  <ReactJs />
                </div>
              </FadeInView>
            </div>
            <div className="stack-wrapper">
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">Java</p>
                  </div>
                  <Java />
                </div>
              </FadeInView>
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">Python</p>
                  </div>
                  <Python />
                </div>
              </FadeInView>
            </div>
            <div className="stack-wrapper">
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">Tailwind Css</p>
                  </div>
                  <TailwindCss />
                </div>
              </FadeInView>
              <FadeInView>
                <div className="tech-stack">
                  <div className="bullet">
                    <p className="stack-name">C++</p>
                  </div>
                  <CPlusPlus />
                </div>
              </FadeInView>
            </div>
          </div>
          <p className="full-bio">
            When I'm not coding, 'which is not often', I like to read books and
            workout... Weekends are movie-time so I go to the movies with
            friends and sometimes, most times alone.
          </p>
          <p className="full-bio">
            I genuinely can't say what my favourite song is, I have one or two
            for every specific mood of the time, But when i think{" "}
            <b>"favourite + artist,"</b> I think <b>Ruth B</b>
          </p>
          <p className="full-bio">
            I write alot too, I have a blog where i write anything and
            everything i think of.... you should check it out
          </p>
        </section>

        <section className="sections" id="project" ref={projectsRef}></section>
        <h1 className="about-me-head">
          / Projects<div className="line"></div>
        </h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <FadeInView>
              <div className="project-card" key={index}>
                <img className="project-gif" src={project.gifUri} />
                <h4 className="project-content">{project.title}</h4>
                <h5 className="project-content2">{project.description}</h5>
              </div>
            </FadeInView>
          ))}
        </div>
        <section className="sections" id="experience" ref={blogRef}>
          <div style={{width: '100%', height: '120vh'}}></div>
        </section>
        <FadeInView>
          <div className="credits-part">
            <h4>
              Built and designed by Marsh <br />
              All rights not reserved. ©
            </h4>
            <h4>Hi @gazijarin</h4>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}

export default App;
