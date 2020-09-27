import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});
