import React from "react";
import "../styles/outro.css";
import FadeInView, { Space, Space2 } from "../fadein";
import {
  Github,
  Spotify,
  Linkedin,
  File,
  Email
} from "../../assets/svg";

class Outro extends React.Component {
  render() {
    const links = [
    { description: 'email me', icon: Email},
      { description: "my Github", icon: Github },
      { description: "my Linkedin", icon: Linkedin },
      { description: "my spotify", icon: Spotify },
      { description: "my resume", icon: File },
    ];
    const one = (
      <FadeInView>
        <p>
          When I'm not coding, 'which is not often', I like to read books📖 and
          workout💪... Weekends are movie-time🍿 so I go to the movies with
          friends and sometimes, most times alone.
        </p>
      </FadeInView>
    );
    const two = (
      <FadeInView delay={`0.5s`}>
        <p>
          🎧I genuinely can't say what my favourite song is, I have one or two
          for every specific mood of the time, But when i think{" "}
          <i>favourite artist,</i> I think <span>Ruth B</span>
        </p>
      </FadeInView>
    );
    const three = (
      <FadeInView delay={`1s`}>
        <p>Here's a few ways you can get in touch with me...</p>
      </FadeInView>
    );
    return (
        <>
            <Space/>
        {[one]}
        {[two]}
        {[three]}
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
      </>
    );
  }
}

export default Outro;
