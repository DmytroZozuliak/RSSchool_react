import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('renders Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  test('renders links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const home = screen.getAllByText(/home/i)[0];
    const about = screen.getByText(/about/i);
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });

  test('active link class', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const home = screen.getAllByText(/home/i)[0];
    expect(home).not.toHaveClass('active');
  });
});
