import React from "react";
import { render } from "@testing-library/react";
import LunchGroup from "./LunchGroup";

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

describe("LunchGroup Component", () => {
  test("Matches snapshot", () => {
    const component = render(<LunchGroup group={group} />);
    expect(component).toMatchSnapshot();
  });
});
