import React from "react";
import "../styles/stack.css";
import FadeInView, { Space } from "../fadein";
import garden from "../../assets/garden.gif";
import smart from "../../assets/smart.gif";
import bidding from "../../assets/bidding.gif";
import { Github } from "../../assets/svg";

class StackAndProjects extends React.Component {
  render() {
    const stacktitle = (
      <p>
        As a software engineer, these are some of my majorly used tech-stack🖥️
      </p>
    );
    const one = (
      <li className="project-name">
        A real-time bidding system for online auctions. Using React for front
        End, Flask for the backend and MongoDb
      </li>
    );
    const two = (
      <li className="project-name">
        A smart garden system to monitor soil moisture, light levels and
        temperature. Using Raspberry Pi, Google cloud IoT and Java.
      </li>
    );
    const three = (
      <li className="project-name">
        A blockchain smart contract for Ethereum built using solidity and
        Truffle to compile, deploy and interract with
      </li>
    );
    const stack = [
      "Javascript Es6+",
      "React js",
      "Java",
      "Python",
      "Tailwind Css",
      "C++",
    ];

    return (
      <>
        {" "}
        <div className="stack-projects-container">
          <div>
            {[stacktitle]}
            {/* rendering tech stack */}
            <div className="stack-container">
              {stack.map((item, i) => {
                return (
                  <FadeInView delay={`${i + 1}00ms`}>
                    <li className="stack-name">{item}</li>
                  </FadeInView>
                );
              })}
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <p>
              <b>Currently building </b>
            </p>
            <div className="projects-container">
              <div className="project-item">
                {[one]}
                <FadeInView>
                  <a href="https://github.com/imarshdev/Bid-war.git">
                    <button className="bidwar">
                      <p>Github - imarshdev/Bid-war</p>
                      <img className="project-img" src={bidding} />
                      <p className="project-link">
                        <Github />
                        https://github.com/imarshdev/Bid-wa...
                      </p>
                    </button>
                  </a>
                </FadeInView>
              </div>
              <div className="project-item">
                {[two]}
                <FadeInView>
                  <a href="https://github.com/imarshdev/Bid-war.git">
                    <button className="bidwar">
                      <p>Github - imarshdev/GreenThumb</p>
                      <img className="project-img" src={garden} />
                      <p className="project-link">
                        <Github />
                        https://github.com/imarshdev/GreenT...
                      </p>
                    </button>
                  </a>
                </FadeInView>
              </div>
              <div className="project-item">
                {[three]}
                <FadeInView>
                  <a href="https://github.com/imarshdev/Bid-war.git">
                    <button className="bidwar">
                      <p>Github - imarshdev/SmartContract</p>
                      <img className="project-img" src={smart} />
                      <p className="project-link">
                        <Github />
                        https://github.com/imarshdev/SmartC...
                      </p>
                    </button>
                  </a>
                </FadeInView>
              </div>
            </div>
          </div>
        </div>
        <Space />
        <hr style={{ color: "#a8cd9f" }} />
      </>
    );
  }
}
export default StackAndProjects;
