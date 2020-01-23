import React, { useState, useEffect } from "react";
import Button from "./Button";
import LunchGroups from "./LunchGroups";
import NewHire from "./NewHire";
import { getEmployees, resetEmployees } from "../functions/api";
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

  const reset = () => {
    resetEmployees().then(res => setEmployees(res));
  };

  return (
    <div className="familyFriday">
      <h1>Family Friday Lunch Lottery</h1>
      {employees ? (
        <React.Fragment>
          <Button
            onClick={() => setGroups(getGroups(employees))}
            label={"Generate Groups"}
            title={"Generate Groups!"}
          />
          <Button
            onClick={reset}
            label={"Reset Employees"}
            title={"Reset Employees"}
          />
        </React.Fragment>
      ) : (
        "Loading Employees..."
      )}
      <div>
        {employees && employees.map(employee => employee.name).join(", ")}
      </div>

      <NewHire
        addEmployee={employee => setEmployees([...employees, employee])}
      />

      {groups && <LunchGroups groups={groups} />}
    </div>
  );
}
