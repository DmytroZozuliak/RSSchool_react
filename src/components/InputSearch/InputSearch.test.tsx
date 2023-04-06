import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import InputSearch from './InputSearch';

const mockFn = vi.fn();
const mockFn2 = vi.fn();

describe('InputSearch component', () => {
  test('renders InputSearch', () => {
    render(<InputSearch onChange={mockFn} onSubmit={mockFn2} term="" />);

    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });

  test('onCHange function called when typing text', async () => {
    render(<InputSearch onChange={mockFn} onSubmit={mockFn2} term="" />);
    const input = screen.getByRole('searchbox');

    const text = 'React';
    await userEvent.type(input, text);

    expect(mockFn).toBeCalledTimes(text.length);
  });
});
