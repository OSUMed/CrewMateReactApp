import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../client";

const AddCrewMate = () => {
  const [newMate, setNewMate] = useState({
    name: "",
    speed: "",
    color: "",
    isHat: false,
  });
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "isHat") {
      setNewMate((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setNewMate((prev) => ({ ...prev, [name]: value }));

    // console.log(post);
  };
  const handleSubmit = async (event) => {
    event?.preventDefault();
    console.log("What is the current newMate?: ", newMate);

    const { error } = await supabase
      .from("crewmates")
      .insert({
        name: newMate.name,
        speed: newMate.speed,
        color: newMate.color,
        hat: newMate.isHat,
      })
      .select();
    console.log("error is: ", error);
    return;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={newMate.name}
        />
        <br />
        <label htmlFor="speed">Speed</label>
        <br />
        <input
          onChange={onChange}
          type="text"
          name="speed"
          value={newMate.speed}
        />
        <br />
        <label htmlFor="color">Color</label>
        <br />
        <input
          onChange={onChange}
          type="text"
          name="color"
          value={newMate.color}
        ></input>
        <br />
        <br />
        <label htmlFor="hat">Hat?</label>
        <br />
        <input
          onChange={onChange}
          name="isHat"
          type="checkbox"
          checked={newMate.isHat}
        ></input>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddCrewMate;
