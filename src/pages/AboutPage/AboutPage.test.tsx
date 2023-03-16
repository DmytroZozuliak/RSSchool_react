import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage component', () => {
  test('renders AboutPage', () => {
    render(<AboutPage />);

    const shopName = screen.getByText(/about us/i);
    expect(shopName).toBeInTheDocument();
  });
});
