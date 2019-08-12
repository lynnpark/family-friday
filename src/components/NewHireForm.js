import React, { useState } from "react";
import Button from "./Button";

export default function NewHire(props) {
  const [newHireInfo, setNewHireInfo] = useState({ name: "" });

  return (
    <form>
      <Button
        onClick={props.setEmployees}
        label={"Add New Hire"}
        title={"Add"}
      />
    </form>
  );
}
