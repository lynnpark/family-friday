import React from "react";
import { render } from "@testing-library/react";
import Roster from "./Roster";

const emps = [
  { name: "Happy" },
  { name: "Dopey" },
  { name: "Grumpy" },
  { name: "Sneezy" },
  { name: "Lynn" },
  { name: "Bashful" }
];

describe("Roster Component", () => {
  test("Matches snapshot", () => {
    const component = render(<Roster employees={emps} setEmployees={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
