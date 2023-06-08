import { render, screen } from "@testing-library/react";
import App from "./App";

test("checks temporary text is in the nav bar", () => {
  render(<App />);

  const linkElement = screen.getByText(/TopNavBar/i);
  expect(linkElement).toBeInTheDocument();
});
