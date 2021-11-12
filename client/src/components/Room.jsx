/*-------------------------Imports */
import React from "react";
import { useState, useEffect } from "react";
import "../styles/main.css";

/*-------------------------Function for Room */
function Room() {
  // use URL to get room name
  console.log("window.location.pathname: ", window.location.pathname);
  console.log(
    "(window.location.pathname).split('/'): ",
    window.location.pathname.split("/")
  );
  let roomName = window.location.pathname.split("/").slice(2);

  // fetch in useEffect to get username
  useEffect( () => {
      fetch(``)

  }, [])

  return (
      // Room Name, form to enter their message, and a place where messages show up. Do we want to make a chatbox component to bring in??
    <>
      <h1>{roomName}</h1>
      {/* Hello, {username}! */}
    </>
  );
}

export default Room;
