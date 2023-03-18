// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Form from './Form';
// import userEvent from '@testing-library/user-event';

// describe('Form component', () => {
//   const addCard = jest.fn();
//   global.URL.createObjectURL = jest.fn();

//   test('type input name', () => {
//     render(<Form addCard={addCard} />);
//     const inputName = screen.getByTestId('input-name');
//     userEvent.type(inputName, '12');
//     expect(inputName).toHaveValue('12');
//   });

//   test('type input surname', () => {
//     render(<Form addCard={addCard} />);
//     const inputSurname = screen.getByTestId('input-surname');
//     userEvent.type(inputSurname, 'surname typing');
//     expect(inputSurname).toHaveValue('surname typing');
//   });

//   test('type input date', () => {
//     render(<Form addCard={addCard} />);
//     const inputDate = screen.getByTestId('input-date');
//     userEvent.type(inputDate, '2020-01-02');
//     expect(inputDate).toHaveValue('2020-01-02');
//   });

//   test('type input dataProcessing', () => {
//     render(<Form addCard={addCard} />);
//     const inputCheck = screen.getByTestId('input-dataProcessing');
//     userEvent.click(inputCheck);
//     expect(inputCheck).toBeChecked;
//   });

//   test('check after type input name submit - disable', () => {
//     render(<Form addCard={addCard} />);
//     const submitButton = screen.getByTestId('button-submit');

//     userEvent.type(screen.getByTestId('input-name'), 'na');
//     userEvent.click(submitButton);
//     expect(submitButton).toBeDisabled();
//   });

//   test('check after type input name submit - enable', () => {
//     render(<Form addCard={addCard} />);
//     const submitButton = screen.getByTestId('button-submit');

//     userEvent.type(screen.getByTestId('input-name'), 'na');
//     expect(submitButton).toBeEnabled();
//   });

//   test('check after type input name submit - disable', () => {
//     render(<Form addCard={addCard} />);
//     const submitButton = screen.getByTestId('button-submit');

//     userEvent.type(screen.getByTestId('input-name'), 'na');
//     userEvent.click(submitButton);
//     userEvent.type(screen.getByTestId('input-name'), 'nav');

//     expect(submitButton).toBeDisabled();
//   });

//   test('file upload', () => {
//     render(<Form addCard={addCard} />);

//     const file = new File(['img'], 'chucknorris.png', { type: 'image/png' });
//     const submitButton = screen.getByTestId('button-submit');
//     const input = screen.getByTestId('input-file') as HTMLInputElement;
//     userEvent.upload(input, file);

//     expect(submitButton).toBeEnabled();
//   });
// });
