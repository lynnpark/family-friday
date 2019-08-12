import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("Matches Snapshot", () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  });
});
