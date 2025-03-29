import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header content', () => {
  render(<App />);
  const headerElement = screen.getByText(/MET Bhujbal Knowledge City/i);
  expect(headerElement).toBeInTheDocument();
});
