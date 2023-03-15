import { render, screen } from '@testing-library/react';
import InputSearch from './InputSearch';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

describe('InputSearch component', () => {
  test('renders InputSearch', () => {
    render(<InputSearch />);

    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });

  test('onChange InputSearch', () => {
    render(<InputSearch />);

    const text = 'React';
    userEvent.type(screen.getByRole('searchbox'), text);
    expect(onChange).toHaveBeenCalledTimes(text.length);
  });
});
