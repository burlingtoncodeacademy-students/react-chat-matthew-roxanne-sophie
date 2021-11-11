require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//middleware functions
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));

//------------------------------MONGOOSE SETUP------------------------------
//creating mongoose Schema for messages
const MessageSchema = new mongoose.Schema({
  date: Date,
  author: String,
  msg: String,
  room: String,
});

//creating the initial connection to the database using url for mongoAtlas and .env secured password
mongoose.connect(
  `mongodb+srv://roxanne-matthew-sophie:${process.env.PASSWORD}@cluster0.ileis.mongodb.net/react-chat?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//initializing database using connection and storing in variable database
const database = mongoose.connection;

//setting up Messages model using the Message schema and the main collection (for the main chat room)
const Messages = mongoose.model("all-messages", MessageSchema);

//binds error message to the connection variable to print if an error occurs with database connection
database.on("error", console.error.bind(console, "connection error"));

//-------------------------------ROUTES----------------------------------------
//NOTE: USERNAME IS SET ON HOMEPAGE AND PASSED AS PROP, THE RETURNED HTML SHOULD STILL HAVE A INPUT FIELD IN THE FORM WITH NAME=PROPS.USERNAME THAT IS NOT EDITABLE, TO ALLOW FOR REQ.BODY.USERNAME TO BE USED

//---------FETCH---------------
//API endpoint for receiving all messages across any chat room
app.get("/allmessages", async (req, res) => {
  //setting up intermediate variable to store find result
  let allMessages = await Messages.find({});
  //responding with a json of the find
  res.json(allMessages);
});

//API endpoint to get the messages from a specifc room
app.get("/allmessages/:room", async (req, res) => {
  //setting up a intermediate variable for the current room from the params
  let currentRoom = req.params.room;

  //setting up variable to store res of .find with the currentRoom being used as a filter
  let roomMessages = await Messages.find({ room: currentRoom });

  //sending messages for the current room as json
  res.json(roomMessages);
});

//-----------CREATE--------------
//creating functionality for submitting a post
app.post("/submit/:room", async (req, res) => {
  //setting up a intermediate variable for the current room from the params
  let currentRoom = req.params.room;
  //variable to store the current date and time
  let newMessageDate = new Date().toISOString();
  //creation of new message
  const newMessage = new Messages({
    date: newMessageDate,
    author: req.body.author,
    msg: req.body.msg,
    room: currentRoom,
  });
  //saving the newly created message to the database
  await newMessage.save();

  //sending status code 204, keeps them on current page without reload
  res.status(204).send('Success!');
});

//routing * to handle any non-set routes to a 404 page
app.get("*", (req, res) => {
  res.send(`<h3>404: Whoops, something went wrong...</h3>`);
});

//listening on port 5000 and console logging a message to ensure it is listening
app.listen(port, () => console.log(`React Chat app listening port ${port}!`));
