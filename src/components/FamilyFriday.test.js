import React from "react";
import { render } from "@testing-library/react";
import FamilyFriday from "./FamilyFriday";

describe("FamilyFriday Component", () => {
  test("Matches snapshot", () => {
    const component = render(<FamilyFriday />);
    expect(component).toMatchSnapshot();
  });
});
