import React from "react";
import { render } from "@testing-library/react";
import FamilyFriday, { getGroups } from "./FamilyFriday";

const emps = [
  { name: "Happy" },
  { name: "Dopey" },
  { name: "Grumpy" },
  { name: "Sneezy" },
  { name: "Lynn" },
  { name: "Bashful" }
];

describe("FamilyFriday Component", () => {
  test("Matches snapshot", () => {
    const component = render(<FamilyFriday />);
    expect(component).toMatchSnapshot();
  });

  test("getEmployees function", () => {
    let i = 100;
    while (i--) {
      emps.push({ name: "Test" });
      getGroups(emps).forEach(group => {
        expect(group.length).toBeGreaterThanOrEqual(3);
        expect(group.length).toBeLessThanOrEqual(5);
      });
    }
  });
});
