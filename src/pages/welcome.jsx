import React, { useState } from "react";
import { Link } from "react-router-dom";
import clickSound from "../click_sound.mp3";
import '../index.css'


function Welcome() {
  function play() {
    new Audio(clickSound).play();
  }


  return (
    <div
    className="welcome-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height:'100%',
      }}
    >
      <h1>Hi there, Welcome</h1>
      <h4>Senior Front-End Developer.</h4>
      <br />
      <br />
      <div style={{width: '15%', display: 'flex', justifyContent: 'space-around'}}>
      <Link to="/home" onClick={play}>
        <button>Proceed</button>
      </Link>
      <Link to="/home" onClick={play}>
        <button>MyApp</button>
      </Link>
      </div>
    </div>
  );
}

export default Welcome;
