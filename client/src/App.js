import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Room from "./components/Room.jsx";

function App() {
  return (
    <div className="App">
      {/* Setting up browser router from react-router-dom */}
      <BrowserRouter>
        <Routes>
          {/* Setting up two routes, one for homepage, and another to function for any room (using :roomId) and username (:username) */}
          <Route path="/" element={<Homepage />} />
          <Route path="/:username/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
