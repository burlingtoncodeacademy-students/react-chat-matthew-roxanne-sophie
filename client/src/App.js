import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Room from "./components/Room.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello, Chat!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
