import React, { useState, useEffect } from "react";
import Button from "./Button";
import LunchGroups from "./LunchGroups";
import NewHire from "./NewHire";
import { getEmployees } from "../functions/api";

export default function FamilyFriday() {
  const [employees, setEmployees] = useState();
  const [groups, setGroups] = useState();

  useEffect(() => {
    getEmployees().then(res => setEmployees(res));
  }, []);

  useEffect(() => {
    setGroups();
  }, [employees]);

  return (
    <div className="familyFriday">
      <h1>Family Friday Lunch Lottery</h1>
      {employees ? (
        <Button
          onClick={() => setGroups(getGroups(employees))}
          label={"Generate Groups"}
          title={"Generate Groups!"}
        />
      ) : (
        "Loading Employees..."
      )}

      <NewHire
        addEmployee={employee => setEmployees([...employees, employee])}
      />

      {groups && <LunchGroups groups={groups} />}
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
