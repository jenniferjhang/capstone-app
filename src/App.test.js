import { fireEvent, render, screen } from '@testing-library/react';
import Header from './components/Header'
import BookingPage from './components/BookingPage'
import BookingForm from './components/BookingForm'

test('renders static text', () => {
  render(<Header />);
  const headerText = screen.getByText("🥗 50% Off select specials this week! 🛒");
  expect(headerText).toBeInTheDocument();
});

test('renders static text', () => {
  render(
  <BookingPage>
    <BookingForm initializeTimes={initializeTimes} updateTimes={updateTimes}/>
  </BookingPage>
  );
  const headerText = screen.getByText("Reserve A Table");
  expect(headerText).toBeInTheDocument();
});

test('renders static text', () => {
  render(<BookingForm />);
  const headerText = screen.getByText("Reserve A Table");
  expect(headerText).toBeInTheDocument();
});
