import {
  Email2,
  CPlusPlus,
  Javascript,
  Java,
  Python,
  ReactJs,
  TailwindCss,
  Github,
  Spotify,
  Letterboxd,
  Instagram,
  TwitterX,
  Linkedin,
} from "./components/svg";
import FadeInView from "./components/fadein";
import man from "./assets/giphy.gif";
import stewie from "./assets/feyd.png"
import garden from "./assets/garden.gif";
import smart from "./assets/smart.gif";
import bidding from "./assets/bidding.gif";
export default function App() {
  const stack = [
    {
      name: "Javascript Es6+",
      icon: Javascript,
    },
    {
      name: "React js",
      icon: ReactJs,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "Python",
      icon: Python,
    },
    ,
    {
      name: "Tailwind Css",
      icon: TailwindCss,
    },
    ,
    {
      name: "C++",
      icon: CPlusPlus,
    },
  ];
  const links = [
    { description: "my spotify", icon: Spotify },
    { description: "my letterboxed", icon: Letterboxd },
    { description: "follow my X", icon: TwitterX },
    { description: "my Instagram", icon: Instagram },
    { description: 'my Github', icon: Github}
  ];
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div className="topbar">
        <div
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>@ChelangatMarshMansur</p>
          <Github />
        </div>
      </div>
      <div
        style={{
          width: "80%",
          padding: "0 10%",
        }}
      >
        <img
          style={{ height: "20rem", marginTop: "4rem", borderRadius: "10px" }}
          src={man}
          alt="myGif"
        />
        <br />
        <div className="typist-container">
          <h1 className="typist-text">
            Hey! I'm <span>Marsh...</span>🍃
          </h1>
        </div>
        <div>
          <FadeInView>
            <p>
              I'm <span>Chelangat Marsh Mansur</span>, a 21 year old a
              full-stack developer. I create dynamic and user-friendly software.
              I love tackling complex problems and turning them into sleek,
              effecient applications. I have a proven track record of delivering
              robust code for high-volume businesses. Eager to bring top-notch
              applications to life.
            </p>
          </FadeInView>
          <FadeInView delay={`0.5s`}>
            <p>
              In progress: Bachelor's Degree of Science in Software Engineering
              (Graduating: October, 2025). <br />
            </p>
          </FadeInView>
          <FadeInView delay={`1s`}>
            <p>
              I've had experience in collaborating with diverse teams and
              fostering open communication and public speaking engagements. What
              I'm looking for is to obtain a challenging position where I can
              utilize my skills and contribute to the overral success of my team
              or company.
            </p>
          </FadeInView>
          <FadeInView delay={`1.5s`}>
            <div
              style={{
                textAlign: "end",
                height: "10rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p>The World is But a Canvas to our Imagination.</p>
              <p>~Henry David Thoreau</p>
            </div>
          </FadeInView>
        </div>
        <div>
          <a
            href="mailto:forevermarsh004@gmail.com"
            style={{
              textDecoration: "none",
              color: "#a8cd9f",
              alignSelf: "center",
            }}
          >
            <Email2 />
            <p>say hello...</p>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p>
              As a software engineer, these are some of my majorly used
              tech-stack🖥️
            </p>
            <div className="stack-container">
              {stack.map((item, i) => {
                return (
                  <FadeInView delay={`${i + 1}00ms`}>
                    <li className="stack-name">{item.name}</li>
                  </FadeInView>
                );
              })}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <p>
              <b>Currently building </b>
              <li className="project-name">
                A real-time bidding system for online auctions. Using Reactfor
                front End, Flask for the backend and MongoDb
              </li>
              <li className="project-name">
                A smart garden system to monitor soil moisture, light levels,
                temperature and more to maintain plants. built using Raspberry
                Pi, Google cloud IoT and Java.
              </li>
              <li className="project-name">
                A blockchain smart contract for Ethereum built using solidity
                and Truffle to compile, deploy and interract with
              </li>
            </p>
            <div className="projects-container">
              <FadeInView>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#a8cd9f",
                  }}
                  href="https://github.com/imarshdev/Bid-war.git"
                >
                  <button className="bidwar">
                    <p>Github - imarshdev/Bid-war</p>
                    <img
                      style={{ height: "13rem" }}
                      src={bidding}
                      alt="myGif"
                    />
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        color: "#a8cd9f",
                      }}
                    >
                      <Github />
                      https://github.com/imarshdev/Bid-wa...
                    </p>
                  </button>
                </a>
              </FadeInView>
              <FadeInView>
                <a
                  style={{ textDecoration: "none", color: "#a8cd9f" }}
                  href="https://github.com/imarshdev/Bid-war.git"
                >
                  <button className="bidwar">
                    <p>Github - imarshdev/GreenThumb</p>
                    <img style={{ height: "13rem" }} src={garden} alt="myGif" />
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        color: "#a8cd9f",
                      }}
                    >
                      <Github />
                      https://github.com/imarshdev/GreenT...
                    </p>
                  </button>
                </a>
              </FadeInView>
              <FadeInView>
                <a
                  style={{ textDecoration: "none", color: "#a8cd9f" }}
                  href="https://github.com/imarshdev/Bid-war.git"
                >
                  <button className="bidwar">
                    <p>Github - imarshdev/SmartContract</p>
                    <img style={{ height: "13rem" }} src={smart} alt="myGif" />
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        color: "#a8cd9f",
                      }}
                    >
                      <Github />
                      https://github.com/imarshdev/SmartC...
                    </p>
                  </button>
                </a>
              </FadeInView>
            </div>
          </div>
        </div>
        <div style={{ height: "2rem" }}></div>
        <hr style={{ color: "#a8cd9f" }} />
        <div style={{ height: "2rem" }}></div>
        <FadeInView>
          <p>
            When I'm not coding, 'which is not often', I like to read books📖
            and workout💪... Weekends are movie-time🍿 so I go to the movies
            with friends and sometimes, most times alone.
          </p>
        </FadeInView>
        <FadeInView delay={`0.5s`}>
          <p>
            🎧I genuinely can't say what my favourite song is, I have one or two
            for every specific mood of the time, But when i think{" "}
            <i>favourite artist,</i> I think <span>Ruth B</span>
          </p>
        </FadeInView>
        <div>
          {links.map((link, i) => {
            return (
              <FadeInView delay={`${i + 1}00ms`}>
                <button className="stack-name2">
                  {link.description} <link.icon />
                </button>
              </FadeInView>
            );
          })}
        </div>
        <div style={{ height: "2rem" }}></div>
        <div>
          <p>
            Built and designed by Marsh <br />
            All rights not reserved. ©
          </p>
          <br />
          <p>Hi @gazijarin</p>
        </div>
        <div style={{ height: "20rem" }}></div>
      </div>
    </div>
  );
}
