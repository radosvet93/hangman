import React from "react";
import { render } from "@testing-library/react";
import Keyboard from "./Keyboard";

test("renders hello text", () => {
  const { getByText } = render(<Keyboard />);
  const textElement = getByText(/Keyboard/i);
  expect(textElement).toBeInTheDocument();
});
