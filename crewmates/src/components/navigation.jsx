import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h2>CrewMate Creator</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">Crew Mates</Link>
        <Link to="/addcrewmate">Add Crew Mate</Link>
        <Link to="/crewmates">View Crew Mates</Link>
      </div>

      <div style={{ height: "50px" }}></div>
    </>
  );
};
export default Navigation;
