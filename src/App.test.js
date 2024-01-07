import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Reservations } from './Components';

test('renders Reservations component', () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );

  // Check if form elements are rendered
  expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeInTheDocument();
}
);