import React from "react";
import "../styles/intro.css";
import FadeInView, { Space } from "../fadein";
import { Email2, File } from "../../assets/svg";
import me2 from "../../assets/me2.jpg";
import resume from "../../assets/resume.pdf";


export function TopBar() {
  const openResume = () => {
    window.open(resume, '_blank')
  }
  return (
    <div className="topbar">
      <div className="topbar-container">
        <p>@iMarshDev</p>
          <div onClick={openResume} className="resume">
            resume
            <File />
          </div>
      </div>
    </div>
  );
}

class Intro extends React.Component {
  render() {
    const details = (
      <p>
        <span>Chelangat Marsh Mansur</span>,<br />
        <p>21 year old full-stack software engineer.</p>
      </p>
    );
    const one = (
      <p className="about-me">
        I create dynamic and user-friendly software. I love tackling complex
        problems and turning them into sleek, efficient applications. I have a
        track record of delivering robust code for high-volume businesses. Eager
        to bring top-notch applications to life.
      </p>
    );
    const three = (
      <p className="about-me">
        I've had a fair share of experience in collaborating with diverse teams
        and fostering open communication and public speaking engagements. What
        I'm looking for is to obtain a challenging position where I can utilize
        my skills and contribute to the overall success of my team and, or
        company.
      </p>
    );

    return (
      <>
        <div className="name-intro">
          <img className="project-img" src={me2} />
        </div>
        <div>
          <FadeInView>{[details]}</FadeInView>
          <FadeInView delay={`0.2s`}>{[one]}</FadeInView>
          <FadeInView delay={`0.5s`}>{[three]}</FadeInView>
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
