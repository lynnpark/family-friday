import React from "react";

export default function LunchGroup(props) {
  return (
    <div className="card">
      <h3>Group #{props.groupNum + 1}</h3>
      {props.group.map((employee, i) => (
        <p key={"lunch-group-member-" + i}>{employee.name}</p>
      ))}
    </div>
  );
}
