import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from '../../types/itemType';
import Card from './ItemCard';

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
  test('should render', () => {
    render(<Card card={card} />);
    const element = screen.getByRole('listitem');
    expect(element).toBeInTheDocument();
    const text = screen.getByText('iPhone 9');
    expect(text).toBeInTheDocument();
  });

  test('should render img', () => {
    render(<Card card={card} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  test('should modal show', async () => {
    render(<Card card={card} />);
    const element = screen.getByRole('listitem');

    await userEvent.click(element);
    const text = screen.getByText(card.description);
    expect(text).toBeInTheDocument();
  });

  test('should modal show and close', async () => {
    render(<Card card={card} />);
    const element = screen.getByRole('listitem');
    await userEvent.click(element);
    const text = screen.getByText(card.description);
    expect(text).toBeInTheDocument();
    const closeButton = screen.getByText('✕');
    await userEvent.click(closeButton);
    expect(text).not.toBeInTheDocument();
  });
});
