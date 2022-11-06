import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

//TODO: Implementar tests
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/film catalogue/i);
  expect(linkElement).toBeInTheDocument();
});
