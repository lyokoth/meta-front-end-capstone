import React from "react";
import { render, screen,  } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter as Router } from "react-router-dom";

// tests if the booking form is working as intended and if the form is rendered

test("form is there and working as expected", () => {
  render(
    <Router>
  <BookingForm />
  </Router>
  );



  // Check if form components are rendered
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /confirm reservation/i }))
    .toBeInTheDocument();
}); // <-- This closing parenthesis was missing



