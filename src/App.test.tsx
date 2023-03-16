import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('renders App', () => {
    render(<App />);

    const title = screen.getAllByText(/home/i)[0];
    expect(title).toBeInTheDocument();
  });

  test('switches to about page', async () => {
    render(<App />);
    const user = userEvent.setup();

    const about = screen.getAllByText(/about/i)[0];
    expect(about).toBeInTheDocument();

    // await user.click(about);
    user.click(about).then(() => {
      expect(screen.getByText(/About us/i)).toBeInTheDocument();
    });
  });
});
