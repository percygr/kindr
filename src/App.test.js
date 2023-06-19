import { render, screen } from "@testing-library/react";
import App from "./App";

test("check 'Home' is in the nav bar", () => {
  render(<App />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("check 'Post a Task' is on the home page", () => {
  render(<App />);

  const buttons = screen.getByRole("button", { name: /Post a Task/i });
});
