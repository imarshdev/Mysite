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

    </div>
  );
}

export default Contacts;
