/** @jsx jsx */

import { useState } from "react";
import { css, jsx } from "@emotion/core";
import Button from "./Button";
import { postEmployee } from "../functions/api";

export default function NewHire(props) {
  const [newHireInfo, setNewHireInfo] = useState({ name: "" });

  const handleInputChange = e =>
    setNewHireInfo({ ...newHireInfo, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!newHireInfo.name.length) return;
    postEmployee(newHireInfo);
    props.addEmployee(newHireInfo);
  };

  return (
    <div className="newHire">
      <h3>Add a new hire!</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="newHire-name"
          aria-label="Name of New Hire"
          placeholder="ex. Lynn"
          type="text"
          name="name"
          value={newHireInfo.name}
          onChange={handleInputChange}
          css={css`
            height: 24px;
            margin-right: 8px;
          `}
        />
        <Button label={"Add New Hire"} title={"Add"} />
      </form>
    </div>
  );
}
