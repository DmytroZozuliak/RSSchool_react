import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import renderWithRouter from '../../helper/renderWithRouter';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  test('renders NotFoundPage', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const errorText = screen.getByText(/404/i);
    expect(errorText).toBeInTheDocument();
  });

  test('should return to home page after click inside 404 page', async () => {
    renderWithRouter('/404');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button).then(() => {
      const homeLink = screen.getByRole('link', { name: /home/i });
      expect(homeLink).toBeInTheDocument();
    });
  });
});
