import { render, screen } from '@testing-library/react';
import InputSearch from './InputSearch';
import userEvent from '@testing-library/user-event';

describe('InputSearch component', () => {
  test('renders InputSearch', () => {
    render(<InputSearch />);

    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });

  test('InputSearch typed text', async () => {
    render(<InputSearch />);
    const input = screen.getByRole('searchbox');

    const text = 'React';
    await userEvent.type(input, text);

    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
  });
});
