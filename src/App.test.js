import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import Booking from './Booking';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Booking");
  expect(headingElement).toBeInTheDocument();
})



test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("BookingForm");
    expect(headingElement).toBeInTheDocument();
})