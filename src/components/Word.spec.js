import React from "react";
import { render } from "@testing-library/react";
import Word from "./Word";

test("renders hello text", () => {
  const { getByText } = render(<Word />);
  const textElement = getByText(/Word/i);
  expect(textElement).toBeInTheDocument();
});
