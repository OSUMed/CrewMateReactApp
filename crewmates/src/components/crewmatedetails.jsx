import React from "react";
import { Link, useLocation } from "react-router-dom";

const CrewMateDetails = () => {
  const { state } = useLocation();
  console.log("what is state: ", state);
  const { id, name, color, speed, hat } = state.data;
  const isHat = hat ? "Yes" : "No";
  return (
    <>
      <p>{name}</p>
      <p>
        <strong>Crew Member Color:</strong> {color}
      </p>
      <p>
        <strong>Crew Member Speed:</strong> {speed}
      </p>
      <p>
        <strong>Crew Member Hat:</strong> {isHat}
      </p>
    </>
  );
};

export default CrewMateDetails;
