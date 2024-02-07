import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Play() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[]);
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
      <h1>Here's What I love</h1>
    </div>
  );
}

export default Play;
