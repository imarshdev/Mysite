import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { Letterboxd, Spotify } from "../components/svg";

function Play() {
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
      <h1>Here's What I love</h1>
      <p style={{ padding: "0 10%", textAlign: 'center' }}>
        Music has been very necessary in almost all aspects of my life. I listen
        to music no matter the situation or emotional state. <br />I genuinely
        can't say what my favourite song is, I have one or two for every
        specific mood at the time. <br />
        When i think <em>"favourite + artist"</em> I think <b>Ruth B</b> I listen
        to the Safe Heaven Album atleast once a day.
      </p>


      <p style={{ padding: "0 10%", textAlign: 'center' }}>
        Other artists I listen to are Shakira, Kanye West, Megan Washington,
        Rosa Linn and the one and only Billie Eilish
      </p>


      <span style={{ width: "40%" }}>
        <a
          className="Link"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            textDecoration: 'none'
          }}
          href="https://open.spotify.com/playlist/7vwApBAR0SqbXmqxrFmrk9?si=vpz1JtYKSzOLeKq46kLMPQ"
        >
          <Spotify />
          <em style={{ paddingLeft: "5%" }}>My Coding Playlist</em>
        </a>
      </span>

      <p style={{ padding: "0 10%", textAlign: 'center' }}>
        "Cinema," a creation by Auguste and Luis Lumiere. I love movies and tv,
        people say it's an escape from reality but it's a visit to the limits of
        reality. <br />
        Over my young life, I've come to appreciate the work of directors{" "}
        <b>
          Quentin Tarantino, Martin Scorsese, David Fincher and Christopher
          Nolan
        </b>
      </p>

      <span style={{ width: "40%" }}>
        <a
          className="Link"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "start",
            textDecoration: 'none'
          }}
          href="https://boxd.it/8LFkD"
        >
          <Letterboxd />
          <em style={{ paddingLeft: "5%" }}>My Letterboxd</em>
        </a>
      </span>

      <p style={{ padding: "0 10%" }}>
        I also love reading books, Cooking & Eating, Lucid dreaming and Writing.  
      </p>


      <p style={{ padding: "0 10%" }}>My Favourite movies are; <br />
      <ul>
        <li>Gone Girl</li>
        <li>Fight Club</li>
        <li>Intersteller</li>
        <li>Kill Bill 1&2</li>
        <li>Beetlejuice</li>
      </ul>
      </p>



      <p style={{ padding: "0 10%" }}>My Favourite Animations are; <br />
      <ul>
        <li>Rick & Morty</li>
        <li>Avatar the last Airbender</li>
        <li>One Piece</li>
        <li>Death Note</li>
        <li>Attack on Titan</li>
      </ul>
      </p>


      <p style={{ padding: "0 10%" }}>These are the books I read <br />
      <ul>
        <li>Percy Jackson Series (on repeat) <br /> ~Rick Riordan</li>
        <li>Ms Dalloway <br /> ~Virginia Woolf</li>
        <li>Twilight <br /> ~Stephanie Meyer</li>
        <li>Warm Bodies <br /> ~Isaac Marion</li>
        <li>The Haunting of Hill House <br /> ~Shirly Jackson</li>
      </ul>
      </p>
    </div>
  );
}

export default Play;
