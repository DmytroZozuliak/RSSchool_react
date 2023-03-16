import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Product } from '../../constants/data';

const card: Product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};

describe('Card component', () => {
  test('renders Card', () => {
    // render(<Card card={card} />);
    // const linkElement = screen.getByRole('listitem');
    // expect(linkElement).toBeInTheDocument();
    // const linkText = screen.getByText('ball');
    // expect(linkText).toBeInTheDocument();
  });
});
