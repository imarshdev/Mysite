import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import "../index.css";
import { Spotify, Linkedin, Discord, Github, Imdb, Instagram, TwitterX, Snapchat  } from "../components/svg";


function Contacts() {
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
      <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center'}}>
        <span className="skill-span">
        <Spotify />
        <em className="language">Spotify</em>
        </span>

        <span className="skill-span">
        <Linkedin />
        <em className="language">LinkedIn</em>
        </span>

        <span className="skill-span">
        <Discord />
        <em className="language">Discord</em>
        </span>

        <span className="skill-span">
        <Github />
        <em className="language">Github</em>
        </span>

        <span className="skill-span">
        <TwitterX />
        <em className="language">Twitter</em>
        </span>

        <span className="skill-span">
        <Instagram />
        <em className="language">Instagram</em>
        </span>

      </div>
    </div>
  );
}

export default Contacts;
