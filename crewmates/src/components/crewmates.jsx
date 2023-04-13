import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../client";
import { Link } from "react-router-dom";

const Crewmates = () => {
  const [crewMates, setCrewMates] = useState([]);
  const [updateCrewMate, setUpdateCrewMate] = useState([]);
  const [updateCrewMemberPopup, setUpdateCrewMemberPopup] = useState(false);

  useEffect(() => {
    const getCrewMates = async () => {
      const response = await supabase.from("crewmates").select();
      setCrewMates(response.data);
    };
    getCrewMates();
  }, []);
  const deleteCrewMember = async (member) => {
    await supabase.from("crewmates").delete().eq("id", member.id);
    window.alert("Crewmate deleted!");
    setCrewMates(crewMates.filter((crewmate) => crewmate.id != member.id));
    window.location.reload();
  };
  const updateCrewMateToggle = (member) => {
    setUpdateCrewMemberPopup(!updateCrewMemberPopup);
    setUpdateCrewMate(member);
  };
  return (
    <>
      From crew mates
      {updateCrewMemberPopup && <UpdateForm member={updateCrewMate} />}
      {crewMates.map((member) => (
        <div
          style={{
            margin: "10px",
          }}
        >
          <li>Crew Name: {member.name}</li>
          <li style={{ listStyleType: "none" }}>
            <Link to={`/crewmates/${member.id}`} state={{ data: member }}>
              Crewmate Details
            </Link>
          </li>
          <li>
            <button onClick={() => updateCrewMateToggle(member)}>Update</button>
          </li>
          <li>
            <button onClick={() => deleteCrewMember(member)}>Delete</button>
          </li>
        </div>
      ))}
    </>
  );
};

const UpdateForm = (props) => {
  const [newMate, setNewMate] = useState({
    id: props.member.id,
    name: "",
    speed: "",
    color: "",
    isHat: false,
  });
  const { member } = props;

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "isHat") {
      setNewMate((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setNewMate((prev) => ({ ...prev, [name]: value }));
    console.log("what is the newMate info? ", newMate);
  };
  const handleSubmit = async (event) => {
    event?.preventDefault();
    console.log("What is the current newMate?: ", newMate);
    await supabase
      .from("crewmates")
      .update({
        name: newMate.name,
        speed: newMate.speed,
        color: newMate.color,
        hat: newMate.isHat,
      })
      .eq("id", newMate.id);
    window.alert("Crewmate updated!");
    window.location.reload();
    return;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Current Values:</p>
        <p>Name: {member.name}</p>
        <p>Color: {member.color}</p>
        <p>Speed: {member.speed}</p>
        <p>Hat: {member.isHat ? "Hate" : "No hat"}</p>
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

export default Crewmates;
