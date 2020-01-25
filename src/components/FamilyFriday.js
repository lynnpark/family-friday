import React, { useState, useEffect } from "react";
import Button from "./Button";
import LunchGroups from "./LunchGroups";
import Roster from "./Roster";
import { getEmployees } from "../functions/api";
import { getGroups } from "../functions/groups";

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
      <Roster employees={employees} setEmployees={setEmployees} />

      <Button
        onClick={() => setGroups(getGroups(employees))}
        label={"Generate Groups"}
        title={"Generate Groups!"}
      />

      {groups && <LunchGroups groups={groups} />}
    </div>
  );
}
