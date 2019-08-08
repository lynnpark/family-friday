import React from "react";

export default function LunchGroup(props) {
  return (
    <div>
      <h3>Group #{props.groupNum}</h3>
      {props.group.map(employee => (
        <p>{employee.name}</p>
      ))}
    </div>
  );
}
