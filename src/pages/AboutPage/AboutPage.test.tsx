import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage component', () => {
  test('should render title', () => {
    render(<AboutPage />);

    const title = screen.getByText(/about us/i);
    expect(title).toBeInTheDocument();
  });

  test('should render p', () => {
    render(<AboutPage />);

    const describe = screen.getByText(/Lorem ipsum/i);
    expect(describe).toBeInTheDocument();
  });
});
