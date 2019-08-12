import React, { useState } from "react";
import Button from "./Button";
import { postEmployee } from "../functions/api";

export default function NewHire(props) {
  const [newHireInfo, setNewHireInfo] = useState({ name: "" });

  const handleInputChange = e =>
    setNewHireInfo({ ...newHireInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    postEmployee(newHireInfo);
    props.addEmployee(newHireInfo);
  };

  return (
    <div className="newHire">
      <h2>Add a new hire!</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="newHire-name"
          aria-label="Name of New Hire"
          placeholder="ex. Lynn"
          type="text"
          name="name"
          value={newHireInfo.name}
          onChange={handleInputChange}
        />
        <Button label={"Add New Hire"} title={"Add"} />
      </form>
    </div>
  );
}
