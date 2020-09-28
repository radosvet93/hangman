import React from "react";
import { render } from "@testing-library/react";
import Game from "./Game";

test("renders hello text", () => {
  const { getByText } = render(<Game />);
  const textElement = getByText(/Hangman/i);
  expect(textElement).toBeInTheDocument();
});
