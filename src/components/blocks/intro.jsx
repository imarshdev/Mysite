import React from "react";
import "../styles/intro.css";
import FadeInView, { Space } from "../fadein";
import { Email2, File } from "../../assets/svg";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <p>@ChelangatMarshMansur</p>
        <div className="resume">
          resume
          <File />
        </div>
      </div>
    </div>
  );
}

class Intro extends React.Component {
  render() {
    const one = (
      <p className="about-me">
        I'm <span>Chelangat Marsh Mansur</span>, a 21 year old a full-stack
        developer. I create dynamic and user-friendly software. I love tackling
        complex problems and turning them into sleek, effecient applications. I
        have a proven track record of delivering robust code for high-volume
        businesses. Eager to bring top-notch applications to life.
      </p>
    );
    const two = (
      <p className="about-me">
        In progress: Bachelor's Degree of Science in Software Engineering
        (Graduating: October, 2025). <br />
      </p>
    );
    const three = (
      <p className="about-me">
        I've had experience in collaborating with diverse teams and fostering
        open communication and public speaking engagements. What I'm looking for
        is to obtain a challenging position where I can utilize my skills and
        contribute to the overral success of my team and, or company.
      </p>
    );

    return (
      <>
        <div className="name-intro">
          <div className="typist-container">
            <h1 className="typist-text">
              Hey! I'm <span>Marsh...</span>🍃
            </h1>
          </div>
        </div>
        <div>
          <FadeInView>{[one]}</FadeInView>
          <FadeInView delay={`0.5s`}>{[two]}</FadeInView>
          <FadeInView delay={`1s`}>{[three]}</FadeInView>
          <FadeInView delay={`0.5s`}>
            <div className="quote-container">
              <p>The World is But a Canvas to our Imagination.</p>
              <p>~Henry David Thoreau</p>
            </div>
          </FadeInView>
        </div>
        <div>
          <a href="mailto:forevermarsh004@gmail.com" className="mailto">
            <Email2 />
            <p>say hello...</p>
          </a>
        </div>
        <Space />
      </>
    );
  }
}
export default Intro;
