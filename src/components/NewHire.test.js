import React from "react";
import { render } from "@testing-library/react";
import NewHire from "./NewHire";

describe("NewHire Component", () => {
  test("Matches snapshot", () => {
    const component = render(<NewHire addEmployee={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
