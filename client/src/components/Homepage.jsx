// Necessary imports:
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/main.css";
import Header from "./Header";
import Instructions from "./Instructions";
import NavBar from "./NavBar"

function Homepage() {
  // Setting up useStates
  const [username, setUsername] = useState("");
  const [linkDisabled, setLinkDisabled] = useState(true);

  // Function for when user submits their username
  const submitHandler = (evt) => {
    //prevent page refresh
    evt.preventDefault();
    // sets username to their input:
    setUsername(evt.target.value);
    console.log(username);
    // enables the room links (not quite working yet!):
    setLinkDisabled(false);
  };

  return (
    // Static stuff like header, instructions, etc
    // Interactive stuff like username input and choose room
    <>
      <Header />
      <Instructions />
      <form className="enterUserName">
        <input
          type="text"
          name="username"
          placeholder="Make a username"
          onChange={submitHandler}
        />
      </form>
      <p>
        <i>What do you want to chat about today?</i>
      </p>
      <NavBar linkDisabled={linkDisabled} username={username} />
    </>
  );
}

export default Homepage;
