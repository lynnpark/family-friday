import React from "react";
import Button from "./Button";
import NewHire from "./NewHire";
import { resetEmployees } from "../functions/api";

export default function Roster(props) {
  const reset = () => {
    resetEmployees().then(res => props.setEmployees(res));
  };

  return (
    <React.Fragment>
      {props.employees ? (
        <React.Fragment>
          <NewHire
            addEmployee={employee => props.setEmployees([...props.employees, employee])}
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
        {props.employees && props.employees.map(employee => employee.name).join(", ")}
      </div>
    </React.Fragment>
  );
}
