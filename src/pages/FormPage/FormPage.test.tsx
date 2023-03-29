import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import FormPage from './FormPage';

describe('FormPage', () => {
  global.URL.createObjectURL = vi.fn();
  let file: File;
  beforeEach(() => {
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  });

  afterEach(async () => {
    const resetButton = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetButton);
  });

  test('renders with no cards', () => {
    render(<FormPage />);
    const cardsElement = screen.queryByRole('listitem');
    expect(cardsElement).toBeNull();
  });

  test('create 1 card', async () => {
    render(<FormPage />);

    const inputName = screen.getByLabelText(/^name/i);
    const inputSurname = screen.getByLabelText(/surname/i);
    const inputDate = screen.getByLabelText(/date/i);
    const inputFile = screen.getByLabelText(/avatar/i) as HTMLInputElement;
    const select = screen.getByLabelText(/country/i);
    const inputCheck = screen.getByLabelText(/processing/i);
    const submitButton = screen.getByRole('button', { name: /create/i });

    await userEvent.type(inputName, 'ddddd');
    await userEvent.click(submitButton);

    await userEvent.type(inputSurname, 'surname typing');
    await userEvent.type(inputDate, '2020-01-02');
    await userEvent.selectOptions(select, 'USA');
    await userEvent.click(inputCheck);
    await userEvent.upload(inputFile, file);

    await userEvent.click(submitButton);
    const li = await screen.findAllByRole('listitem');
    expect(li.length).toEqual(1);
  });
});
