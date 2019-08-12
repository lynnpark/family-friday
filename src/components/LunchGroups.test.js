import React from "react";
import { render } from "@testing-library/react";
import LunchGroups from "./LunchGroups";

const groups = [
  [
    {
      id: 2,
      name: "Dopey"
    },
    {
      id: 20,
      name: "Hermione"
    },
    {
      id: 16,
      name: "Linda"
    },
    {
      id: 4,
      name: "Sneezy"
    }
  ],
  [
    {
      id: 6,
      name: "Sleepy"
    },
    {
      id: 11,
      name: "Selena Gomez"
    },
    {
      id: 1,
      name: "Happy"
    }
  ]
];

describe("LunchGroups Component", () => {
  test("Matches snapshot", () => {
    const component = render(<LunchGroups groups={groups} />);
    expect(component).toMatchSnapshot();
  });
});
