import React from "react";
import { render } from "@testing-library/react";
import NewHire from "./NewHire";

const group = [
  {
    id: 4,
    name: "Sneezy"
  },
  {
    id: 1,
    name: "Happy"
  },
  {
    id: 10,
    name: "Jeff"
  },
  {
    id: 7,
    name: "Doc"
  }
];

describe("NewHire Component", () => {
  test("Matches snapshot", () => {
    const component = render(<NewHire addEmployee={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
