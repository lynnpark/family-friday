import React, { useState } from "react";
import Button from "./Button";

export default function NewHire(props) {
  const [newHireInfo, setNewHireInfo] = useState({ name: "" });

  const handleInputChange = e =>
    setNewHireInfo({ ...newHireInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    props.addEmployee(newHireInfo);
  };

  return (
    <div className="newHire">
      <h2>Add a new hire!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newHireInfo.name}
            onChange={handleInputChange}
          />
        </label>
        <Button label={"Add New Hire"} title={"Add"} />
      </form>
    </div>
  );
}
