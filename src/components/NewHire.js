import React from "react";
import Button from "./Button";

export default function NewHire(props) {
  return (
    <div>
      <h2>Add new hires!</h2>
      <Button
        onClick={props.setEmployees}
        label={"Add New Hire"}
        title={"Add"}
      />
    </div>
  );
}
