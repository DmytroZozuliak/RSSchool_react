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
    const resetButton = screen.getByTestId('button-reset');
    await userEvent.click(resetButton);
  });

  test('renders with no cards', () => {
    render(<FormPage />);

    const cardsElement = screen.queryByTestId('form-card');
    expect(cardsElement).toBeNull;
  });

  test('create 1 card', async () => {
    render(<FormPage />);

    const inputName = screen.getByTestId('input-name');
    const inputSurname = screen.getByTestId('input-surname');
    const inputDate = screen.getByTestId('input-date');
    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
    const select = screen.getByTestId('select-country');
    const inputCheck = screen.getByTestId('input-dataProcessing') as HTMLInputElement;
    const submitButton = screen.getByTestId('button-submit');

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
