import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  const addCard = vi.fn();
  global.URL.createObjectURL = vi.fn();

  test('type input name', async () => {
    render(<Form addCard={addCard} />);
    const inputName = screen.getByTestId('input-name');
    expect(inputName).toBeInTheDocument();

    await userEvent.type(inputName, '12');
    expect(inputName).toHaveValue('12');
  });

  test('type input surname', async () => {
    render(<Form addCard={addCard} />);
    const inputSurname = screen.getByTestId('input-surname');
    await userEvent.type(inputSurname, 'surname typing');
    expect(inputSurname).toHaveValue('surname typing');
  });

  test('type input date', async () => {
    render(<Form addCard={addCard} />);
    const inputDate = screen.getByTestId('input-date');
    await userEvent.type(inputDate, '2020-01-02');
    expect(inputDate).toHaveValue('2020-01-02');
  });

  test('type input dataProcessing', async () => {
    render(<Form addCard={addCard} />);
    const inputCheck = screen.getByTestId('input-dataProcessing');
    await userEvent.click(inputCheck);
    expect(inputCheck).toBeChecked;
  });

  test('check after type input name submit - disable', async () => {
    render(<Form addCard={addCard} />);
    const submitButton = screen.getByTestId('button-submit');

    await userEvent.type(screen.getByTestId('input-name'), 'na');
    await userEvent.click(submitButton);
    screen.debug();
    const classes = submitButton.getAttribute('class');
    expect(classes).toMatch(/disable/i);
  });

  test('check after type input name submit - enable', async () => {
    render(<Form addCard={addCard} />);
    const submitButton = screen.getByTestId('button-submit');

    await userEvent.type(screen.getByTestId('input-name'), 'na');
    expect(submitButton).toBeEnabled();
  });

  test('check after type input name submit - not disable', async () => {
    render(<Form addCard={addCard} />);
    const submitButton = screen.getByTestId('button-submit');

    await userEvent.type(screen.getByTestId('input-name'), 'na');
    await userEvent.click(submitButton);
    await userEvent.type(screen.getByTestId('input-name'), 'nav');

    const classes = submitButton.getAttribute('class');
    expect(classes).toMatch(/disable/i);
  });

  test('file upload', async () => {
    render(<Form addCard={addCard} />);

    const file = new File(['img'], 'chucknorris.png', { type: 'image/png' });
    const submitButton = screen.getByTestId('button-submit');
    const input = screen.getByTestId('input-file') as HTMLInputElement;
    await userEvent.upload(input, file);

    expect(submitButton).toBeEnabled();
  });
});
