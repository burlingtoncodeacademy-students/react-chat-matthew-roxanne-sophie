/*-------------------------Imports */
import React from "react";
import { useState, useEffect } from "react";
import "../styles/main.css";
import NavBar from "./NavBar";

/*-------------------------Function for Room */
function Room() {
  // use URL to get room name
  const roomName = window.location.pathname.split("/")[3];
  const roomNameCorrect = roomName.replace(/-/g, " ");
  const username = window.location.pathname.split("/")[1];

  //setting up state variables
  const [messages, setMessages] = useState([]);
  const [getMessages, setGetMessages] = useState(0);
  const [currentRoom, setCurrentRoom] = useState(roomNameCorrect);
  // const [updateTimer, setUpdateTimer] = useState(0);

  //evt handler for form submission of new message
  const updateMsgField = (evt) => {
    //incrementing getMessages to re-fire the fetch
    setGetMessages(getMessages + 1);
    console.log("evt.target.msg.value: ", evt.target.msg.value);
    // evt.target.msg.value = ''
  };

  // This useEffect fires on URL-change (which happens when a user navigates to a chat room). It populates previous messages for that room.
  useEffect(() => {
    // fetching data from the database:
    let correctedRoomName = roomName.toLowerCase();
    fetch(`/allmessages/${correctedRoomName}`)
      .then((res) => res.json())
      .then((chatArray) => {
        setMessages(chatArray);
        console.log(chatArray);
      }); // END fetch
    //useEffect only fires on room change
  }, [roomName]); // END useEffect

  // This useEffect is initiated on URL-change, but due to setInterval, the fetch is delayed by 10 seconds due to the setInterval, then data is fetched every 10 seconds.
  useEffect(() => {
    let correctedRoomName = roomName.toLowerCase();
    const interval = setInterval(() => {
      fetch(`/allmessages/${correctedRoomName}`)
        .then((res) => res.json())
        .then((chatArray) => {
          setMessages(chatArray);
          console.log(chatArray);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, [roomName]);

  let submitPath = `/submit/${roomName.toLowerCase()}`;

  return (
    // Room Name, form to enter their message, and a place where messages show up. Do we want to make a chatbox component to bring in??
    <>
      <div id="room-wrapper">
        <div className="room-item">
          <h1>{roomNameCorrect}</h1>
        </div>
        <div className="message-area">
          {messages.map(function (msg, index) {
            if (index % 2 === 0) {
              return (
                <div className="even-message">
                  {msg.author} @ ({msg.date}): {msg.msg}
                </div>
              );
            } else {
              return (
                <div className="odd-message">
                  {msg.author} @ ({msg.date}): {msg.msg}
                </div>
              );
            }
          })}
        </div>
        <div class-name="submit-message">
          <h3>Submit a Message</h3>
          <h4>You are signed in as: {username}</h4>
          <form method="POST" action={submitPath} onSubmit={updateMsgField}>
            <input type="hidden" name="author" value={username} />
            <label for="msg">Message:</label>
            <input
              type="text"
              name="msg"
              placeholder="Enter a message"
              className="userInput"
            />
            <input type="submit" value="Submit" className="submitButton" />
          </form>
        </div>
        <div className="room-item">
          <NavBar username={username} setCurrentRoom={setCurrentRoom} />
          <a href="/">Back to Home Page</a>
        </div>
      </div>
    </>
  );
}

export default Room;
