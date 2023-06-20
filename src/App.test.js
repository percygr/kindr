import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import App from "./App";
import Navbar from "./components/Navbar/Navbar";

test("check 'Home' is in the nav bar", () => {
  render(<App />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("check 'Post a Task' is on the home page", () => {
  render(<App />);

  const buttons = screen.getByRole("button", { name: /Post a Task/i });
});

test('clicking "Post a Task" button navigates to the correct page', () => {
 render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  // Find the "Post a Task" button
  const postTaskButton = screen.getByText('Post a Task');

  // Simulate a button click
  fireEvent.click(postTaskButton);

  // Assert that the correct page has been navigated to
  expect(window.location.pathname).toBe('/categories');
});

test('clicking "Volunteer" button navigates to the correct page', () => {
 render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const volunteerButton = screen.getByText('Volunteer');
  fireEvent.click(volunteerButton);

  // Assert that the correct page has been navigated to
  expect(window.location.pathname).toBe('/browse');
});

test('clicking logo takes user to home page', () => {
render(<BrowserRouter>
  <Navbar />
</BrowserRouter>);

  // Find the logo image element by its alt text
  const logo = screen.getByAltText('logo');

  // Simulate a click on the logo
  fireEvent.click(logo);

  // Assert that the correct page has been navigated to
  expect(window.location.pathname).toBe('/');
});