// Necessary imports:
import React from "react";
import { useState } from "react";
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

  //evt handler for preventing the user from hitting the enter key to submit their username, this was causing the username query to be entered into the url path and not actually enabling the links
  const preventSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    // Static stuff like header, instructions, etc
    // Interactive stuff like username input and choose room
    <>
    {/* Rendering Header component to the page*/}
      <Header />
      <div id="home-wrapper">
        <div className="home-item">
      <img src="https://i2.wp.com/clipartportal.com/wp-content/uploads/2018/12/people-talking-face-to-face-clipart-1-300x200.png?zoom=2" width="300px" alt="cartoon chatting faces" />
      {/* Rednering Instructions component to the page */}
      <Instructions />
      </div>
      <div>
        {/* Form for creating a username */}
      <form className="enterUserName" onSubmit={preventSubmit}>
        <input className="userInput"
          type="text"
          name="username"
          placeholder="Make a username"
          onChange={submitHandler}
        />
      </form>
      </div>
      <div className="home-item">
      <p>
        <i>What do you want to chat about today?</i>
      </p>
      </div>
      <div className="home-item">
        {/* Rendering NavBar component to the page. Chatroom links are disabled until username is created*/}
      <NavBar linkDisabled={linkDisabled} username={username} />
      </div>
      </div>
    </>
  );
}

export default Homepage;
