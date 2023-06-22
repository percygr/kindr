import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import App from "./App";
import Navbar from "./components/Navbar/Navbar";


// Jest unit testing --->

describe('Navbar component', () => {
test("check 'Home' is in the nav bar", () => {
  render(<App />);

  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
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

test('clicking "New Task" button in the navbar navigates to the categories', () => {
  render(
     <BrowserRouter>
       <Navbar />
     </BrowserRouter>
   );
   const newTaskNav = screen.getByText('New Task');
   fireEvent.click(newTaskNav);
 
   // Assert that the correct page has been navigated to
   expect(window.location.pathname).toBe('/categories');
 });

test('clicking "Browse Tasks" button in the navbar navigates to the browse page', () => {
  render(
     <BrowserRouter>
       <Navbar />
     </BrowserRouter>
   );
   const browseNav = screen.getByText('Browse Tasks');
   fireEvent.click(browseNav);
 
   // Assert that the correct page has been navigated to
   expect(window.location.pathname).toBe('/browse');
 });

 test('clicking "My Tasks" button in the navbar navigates to the browse page', () => {
  render(
     <BrowserRouter>
       <Navbar />
     </BrowserRouter>
   );
   const myTasksNav = screen.getByText('My Tasks');
   fireEvent.click(myTasksNav);
 
   // Assert that the correct page has been navigated to
   expect(window.location.pathname).toBe('/mytasks');
 });

 test('clicking "FAQ Page" button in the navbar navigates to the browse page', () => {
  render(
     <BrowserRouter>
       <Navbar />
     </BrowserRouter>
   );
   const faqNav = screen.getByText('FAQ Page');
   fireEvent.click(faqNav);
 
   // Assert that the correct page has been navigated to
   expect(window.location.pathname).toBe('/FAQpage');
 });

 test('clicking "My Profile" button in the navbar navigates to the browse page', () => {
  render(
     <BrowserRouter>
       <Navbar />
     </BrowserRouter>
   );
   const myTasksNav = screen.getByText('My Profile');
   fireEvent.click(myTasksNav);
 
   // Assert that the correct page has been navigated to
   expect(window.location.pathname).toBe('/my-profile');
 });
});



describe('Homepage', () => {
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


test("check 'Post a Task' is on the home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const PostATaskButton = screen.getByText('Post a Task')
  expect(PostATaskButton).toBeInTheDocument();
});

});