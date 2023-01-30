import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';
import Booking from './Booking';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

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


test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
render(<BrowserRouter><App /></BrowserRouter>);
const reserveButton = screen.getByRole("button");
fireEvent.click(reserveButton);

const testTime = "17:00"
userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


})