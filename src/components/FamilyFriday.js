import React, { useState, useEffect } from "react";
import Button from "./Button";
import LunchGroups from "./LunchGroups";
import NewHire from "./NewHire";
import { getEmployees } from "../data";

export default function FamilyFriday() {
  const [employees, setEmployees] = useState();
  const [groups, setGroups] = useState();

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  return (
    <div className="familyFriday">
      <Button
        onClick={() => {
          setGroups(getGroups(employees));
        }}
        label={"Generate Groups"}
        title={"Generate Groups!"}
      />
      {groups && <LunchGroups groups={groups} />}
      <NewHire
        addEmployee={employee => {
          setEmployees([...employees, employee]);
        }}
      />
    </div>
  );
}

export function getGroups(employees) {
  if (!employees) return null;
  const employeesArr = shuffle(employees.slice(0));
  const groups = [];

  while (employeesArr.length) {
    let group = [];
    if (employeesArr.length === 5) group = employeesArr.splice(0, 5);
    else if (employeesArr.length === 2)
      group = [...employeesArr.splice(0, 2), groups[groups.length - 1].pop()];
    else group = employeesArr.splice(0, 4);
    groups.push(group);
  }

  return groups;
}

// shuffles employees using Fisher-Yates algorithm
function shuffle(data) {
  let i = data.length;
  while (i--) {
    let j = Math.floor(Math.random() * i);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}
