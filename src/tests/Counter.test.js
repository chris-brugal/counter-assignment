// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText("Counter");
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByTestId("count");
  expect(countVal.textContent).toEqual("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByText("+");
  fireEvent.click(addButton);
  const value = screen.getByTestId("count");
  expect(value.textContent).toEqual("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const subButton = screen.getByText("-");
  fireEvent.click(subButton);
  const value = screen.getByTestId("count");
  expect(value.textContent).toEqual("-1");
});
