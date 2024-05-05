import React from "react";
import "../styles/outro.css";
import FadeInView, { Space, Space2 } from "../fadein";
import {
  Github,
  Spotify,
  Letterboxd,
  Instagram,
  TwitterX,
  Linkedin,
} from "../../assets/svg";

class Outro extends React.Component {
  render() {
    const links = [
      { description: "my Github", icon: Github },
      { description: "my Linkedin", icon: Linkedin },
      { description: "follow my X", icon: TwitterX },
      { description: "my letterboxed", icon: Letterboxd },
      { description: "my Instagram", icon: Instagram },
      { description: "my spotify", icon: Spotify },
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
    return (
        <>
            <Space/>
        {[one]}
        {[two]}
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
