import React from "react";
import "../styles/main.css";

//------------------------------3 STEP INSTRUCTIONS------------------------------
function Instructions() {
  return (
    <>
      
      <div className="instructions">
      <h4 id="instructTitle">3 Easy Steps:</h4>
        <ol id="instructList">
          <li>Create Username</li>
          <li>Click on a chatroom</li>
          <li>Begin Chatting</li>
        </ol>
      </div>
    </>
  );
}

export default Instructions;
