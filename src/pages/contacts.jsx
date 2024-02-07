import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "../index.css";
import {
  Spotify,
  Linkedin,
  Discord,
  Github,
  Imdb,
  Instagram,
  TwitterX,
  Snapchat,
} from "../components/svg";

function Contacts() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Navbar />
      <h1>Contacts</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <span className="skill-span">
          <a className="Link" href="https://open.spotify.com/user/sgw331agtxe12j35fd5jrjfwb?si=lraPTE8-RJiXJ5EnHntdbA">
          <Spotify />
          <em className="language">Spotify</em>
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="">
            <Linkedin />
            <em className="language">LinkedIn</em>
          </a>
        </span>


        <span className="skill-span">
        <a className="Link" href="https://discordapp.com/users/1137663822828683295">
          <Discord />
          <em className="language">Discord</em>
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://github.com/forevermarsh">
          <Github />
          <em className="language">Github</em>
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://x.com/eternallyMarsh">
          <TwitterX />
          <em className="language">Twitter</em>
          </a>
        </span>

        <span className="skill-span">
          <a className="Link" href="https://instagram.com/forever.marsh">
          <Instagram />
          <em className="language">Instagram</em>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Contacts;
