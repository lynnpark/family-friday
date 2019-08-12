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

/**
 * Takes an array of employee objects and returns an array of groups.
 * A group has 3-5 employee objects
 *
 * @param {Object[]} employees
 */
export function getGroups(employees) {
  if (!employees) return null;
  const employeesArr = shuffle(employees.slice(0));
  const groups = [];

  // Loops through and places the first 4 employee objects to a group.
  while (employeesArr.length) {
    let group = [];
    if (employeesArr.length === 5) group = employeesArr.splice(0, 5);
    //if there is 5 left, put all 5 in a group
    else if (employeesArr.length === 2)
      //if there is 2 left, take one from the previous group to create a group of 3
      group = [...employeesArr.splice(0, 2), groups[groups.length - 1].pop()];
    else group = employeesArr.splice(0, 4);
    groups.push(group);
  }

  return groups;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm
 *
 * @param {Array} data
 */
function shuffle(data) {
  let i = data.length;
  while (i--) {
    let j = Math.floor(Math.random() * i);
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}
