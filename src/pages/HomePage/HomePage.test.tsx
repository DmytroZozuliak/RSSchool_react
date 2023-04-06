import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import HomePage from './HomePage';
import { ProductsResponse } from '../../types/itemType';

describe('CardsList component', () => {
  const response: ProductsResponse = {
    limit: 5,
    skip: 0,
    total: 10,
    products: [
      {
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
      },
    ],
  };

  const server = setupServer(
    rest.get('https://dummyjson.com/products/search', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  test('should render', async () => {
    render(<HomePage />);
    const list = await screen.findByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('should render total amount', async () => {
    render(<HomePage />);
    const items = await screen.findAllByRole('listitem');
    expect(items.length).toBe(1);
  });
});
