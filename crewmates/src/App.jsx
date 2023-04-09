import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import Navigation from "./components/navigation";
import CrewMates from "./components/crewmates";
import AddCrewMates from "./components/addcrewmate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crewmates" element={<CrewMates />} />
          <Route path="/addcrewmate" element={<AddCrewMates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
