// Necessary imports:
import React from "react";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/main.css";

function Homepage() {
  // Setting up useStates
  const [username, setUsername] = useState("");
  const [linkDisabled, setLinkDisabled] = useState(true)

  // Function for when user submits their username
  const submitHandler = (evt) => {
    //prevent page refresh
    evt.preventDefault()
      // sets username to their input:
    setUsername(evt.target.value)
    console.log(username)
    // enables the room links (not quite working yet!):
    setLinkDisabled(false)
  }
  
  //evt handler for clickable nav links, refers to linkDisabled
  const navLinkClick = (evt) => {
    //check for if the user has input any text into username
    if (linkDisabled === true) {
      evt.preventDefault()
    }
  }

  return (
    // Static stuff like header, instructions, etc
    // Interactive stuff like username input and choose room
    <>
      <form>
        <input type="text" name="username" placeholder="Make a username" onChange={submitHandler} />
        <input type="submit" />
      </form>

      <NavLink className="nav-link" to="/room/Dogs" onClick={navLinkClick}>
        Dogs
      </NavLink>
      <NavLink to="/room/Cats" onClick={navLinkClick}>Cats</NavLink>
      <NavLink to="/room/Mongoose" onClick={navLinkClick}>Mongoose</NavLink>
    </>
  );
}

export default Homepage;
