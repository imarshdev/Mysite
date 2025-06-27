import React from "react";
import "../styles/outro.css";
import FadeInView, { Space, Space2 } from "../fadein";
import { Github, Spotify, Linkedin, File, Email, Link } from "../../assets/svg";

class Outro extends React.Component {
  render() {
    const links = [
      {
        description: "email me",
        icon: Email,
        link: "mailto:forevermarsh004@gmail.com",
      },
      {
        description: "my Github",
        icon: Github,
        link: "https://github.com/imarshdev",
      },
      {
        description: "my Linkedin",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/marshmansur",
      },
      {
        description: "my spotify",
        icon: Spotify,
        link: "https://open.spotify.com/user/sgw331agtxe12j35fd5jrjfwb?si=vEdJVhtNRVOocTS0IqGX7w",
      },
    ];
    const one = (
      <FadeInView>
        <p>
          When I'm not coding, 'which is not often', I like to read books📖 and
          workout💪... Weekends are movie-time🍿 so I go to the movies with
          friends and sometimes, most times alone. <br />
          Plus i love music.... who doesn't???
        </p>
      </FadeInView>
    );
    const two = (
      <FadeInView delay={`0.5s`}>
        <p>Here's a few ways you can get in touch with me...</p>
      </FadeInView>
    );
    return (
      <div className="outro">
        <Space />
        {[one]}
        {[two]}
        <div>
          {links.map((link, i) => {
            return (
              <FadeInView delay={`${i + 1}00ms`}>
                <a href={link.link}>
                  <button className="stack-name2">
                    {link.description} <link.icon />
                  </button>
                </a>
              </FadeInView>
            );
          })}
        </div>
        <Space />
        <div>
          <p>
            Built and designed by Marsh <br />
            All rights not reserved. ©
          </p>
          <br />
          <p>Hi @gazijarin</p>
        </div>
        <Space2 />
      </div>
    );
  }
}

export default Outro;
