import React from "react";
import "../styles/main.css";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  //evt handler for clickable nav links, refers to linkDisabled
  const navLinkClick = (evt) => {
    //check for if the user has input any text into username
    if (props.linkDisabled === true) {
      evt.preventDefault();
    }
    props.setCurrentRoom(evt.target.id)
  };
  //setting up intermediate path's with the username state variable for each navlink
  let navPathTikTok = `/${props.username}/room/Tik-Tok-Dance-Crazes`;
  let navPathMongoose = `/${props.username}/room/Mongoose`;
  let navPathUniversal = `/${props.username}/room/Universal-Basic-Income`;
  return (
    <>
      <div className="chatNav">
        <NavLink className="nav-link" id="TikTok" to={navPathTikTok} onClick={navLinkClick}>
          TikTok Dance Crazes
        </NavLink>
        <NavLink to={navPathMongoose} id="Mongoose" onClick={navLinkClick}>
          Mongoose
        </NavLink>
        <NavLink to={navPathUniversal} id="Universal" onClick={navLinkClick}>
          Universal Basic Income
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
