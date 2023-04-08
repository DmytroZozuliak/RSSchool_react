import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import renderWithRouter from '../../helper/renderWithRouter';
import Header from './Header';

describe('Header component', () => {
  test('should renders', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const navigation = screen.getByRole('navigation');
    expect(navigation).toBeInTheDocument();
  });

  test('should renders links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
  });

  test('should active link includes active class', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const classes = homeLink.getAttribute('class');

    expect(classes).toMatch(/active/i);
  });

  test('should non-active link doesnt include active class', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    const classes = aboutLink.getAttribute('class');
    expect(classes).not.toMatch(/active/i);
  });

  it('switches to about page', async () => {
    renderWithRouter();

    const user = userEvent.setup();

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();

    user.click(aboutLink).then(async () => {
      const text = await screen.findByText(/About us/i);
      screen.debug();
      expect(text).toBeInTheDocument();
    });
  });
});
