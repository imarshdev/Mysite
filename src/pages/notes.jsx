import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

function Notes() {
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
      <h1 style={{ color: "black" }}>Blog</h1>
    </div>
  );
}

export default Notes;
