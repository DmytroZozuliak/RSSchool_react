import { render, screen } from '@testing-library/react';
import { Product } from '../../types/itemType';
import { vi } from 'vitest';
import DetailedItemCard from './DetailedItemCard';

const mockFn = vi.fn();

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
    render(<DetailedItemCard card={card} activeModal={true} hideModal={mockFn} />);
    const text = screen.getByText('iPhone 9');
    expect(text).toBeInTheDocument();
  });

  test('should render img', () => {
    render(<DetailedItemCard card={card} activeModal={true} hideModal={mockFn} />);
    const img = screen.getAllByRole('img');
    expect(img.length).toBe(card.images.length);
  });
  test('should be unmount', () => {
    const { getByText, queryByText, unmount } = render(
      <DetailedItemCard card={card} activeModal={true} hideModal={mockFn} />
    );
    const title = 'iPhone 9';

    expect(getByText(title)).toBeInTheDocument();
    unmount();
    expect(queryByText(title)).not.toBeInTheDocument();
  });
});
