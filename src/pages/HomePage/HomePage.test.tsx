import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { goods } from '../../constants/data';

describe('CardsList component', () => {
  test('should render', () => {
    render(<HomePage />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });
  test('should render total amount', () => {
    render(<HomePage />);

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(goods.length);
  });
});
