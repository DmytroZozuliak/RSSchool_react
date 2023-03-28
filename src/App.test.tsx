import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders App', () => {
    render(<App />);

    const title = screen.getAllByText(/home/i)[0];
    expect(title).toBeInTheDocument();
  });
});
