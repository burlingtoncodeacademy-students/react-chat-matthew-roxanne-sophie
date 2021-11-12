// Necessary imports:
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/main.css";
import Header from "./Header";
import Instructions from "./Instructions";

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

  //evt handler for clickable nav links, refers to linkDisabled
  const navLinkClick = (evt) => {
    //check for if the user has input any text into username
    if (linkDisabled === true) {
      evt.preventDefault();
    }
  };
  //setting up intermediate path's with the username state variable for each navlink
  let navPathTikTok = `${username}/room/Tik-Tok-Dance-Crazes`;
  let navPathMongoose = `${username}/room/Mongoose`;
  let navPathUniversal = `${username}/room/Universal-Basic-Income`;
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
        {/* <input type="submit" /> */}
      </form>
      <p>
        <i>What do you want to chat about today?</i>
      </p>
      <div className="chatNav">
        <NavLink className="nav-link" to={navPathTikTok} onClick={navLinkClick}>
          TikTok Dance Crazes
        </NavLink>
        <NavLink to={navPathMongoose} onClick={navLinkClick}>
          Mongoose
        </NavLink>
        <NavLink to={navPathUniversal} onClick={navLinkClick}>
          Universal Basic Income
        </NavLink>
      </div>
    </>
  );
}

export default Homepage;
