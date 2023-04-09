import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../client";
import { Link } from "react-router-dom";

const Crewmates = () => {
  const [crewMates, setCrewMates] = useState([]);

  useEffect(() => {
    const getCrewMates = async () => {
      const response = await supabase.from("crewmates").select();
      setCrewMates(response.data);
    };
    getCrewMates();
  }, []);
  return (
    <>
      From crew mates
      {crewMates.map((member) => (
        <div key={member.id}>
          <li>Crew Name: {member.name}</li>
          <li style={{ listStyleType: "none" }}>
            <Link to={`/crewmates/${member.id}`} state={{ data: member }}>
              Crewmate Details
            </Link>
          </li>
        </div>
      ))}
    </>
  );
};

export default Crewmates;
