import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  test('renders NotFoundPage', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const shopName = screen.getByText(/404/i);
    expect(shopName).toBeInTheDocument();
  });
});
