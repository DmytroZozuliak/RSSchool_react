import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('CardsList component', () => {
  test('should render', () => {
    render(<HomePage />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
  test('should render total amount', async () => {
    render(<HomePage />);

    const items = await screen.findAllByRole('listitem');
    expect(items.length).toBe(5);
  });
});
