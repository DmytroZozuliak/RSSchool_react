import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';

describe('CardsForm component', () => {
  global.URL.createObjectURL = jest.fn();
  let file: File;
  beforeEach(() => {
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  });

  test('renders with no cards', () => {
    render(<FormPage />);

    const cardsElement = screen.queryByTestId('form-card');
    expect(cardsElement).toBeNull;
  });

  test('create 1 card', () => {
    render(<FormPage />);

    const inputName = screen.getByTestId('input-name');
    const inputSurname = screen.getByTestId('input-surname');
    const inputDate = screen.getByTestId('input-date');
    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;
    const select = screen.getByTestId('select-country');
    const inputCheck = screen.getByTestId('input-dataProcessing') as HTMLInputElement;
    const submitButton = screen.getByTestId('button-submit');

    userEvent.type(inputName, '123');
    userEvent.click(submitButton);

    userEvent.type(inputSurname, 'surname typing');
    userEvent.type(inputDate, '2020-01-02');
    userEvent.selectOptions(select, 'USA');
    userEvent.click(inputCheck);
    userEvent.upload(inputFile, file);

    userEvent.click(submitButton);
    const li = screen.getAllByRole('listitem');
    expect(li.length).toEqual(1);

    // screen.debug();
  });
});
