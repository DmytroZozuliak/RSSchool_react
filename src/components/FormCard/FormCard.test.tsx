import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsForm from './CardsForm';
import { PersonCard } from '../FormPage';

describe('CardsForm component', () => {
  let cards: PersonCard[];

  beforeAll(() => {
    cards = [
      {
        name: 'Dima',
        surname: 'Zoz',
        date: '2022-01-01',
        country: 'UA',
        img: './logo.img',
        dataProcessing: true,
      },
      {
        name: 'Sasha',
        surname: 'Last name',
        date: '2002-01-01',
        country: 'PL',
        img: './avatar.img',
        dataProcessing: true,
      },
    ];
  });

  test('renders CardsForm', () => {
    render(<CardsForm cards={cards} />);

    const name = screen.getByText(/dima/i);
    expect(name).toBeInTheDocument();
  });

  test('renders CardsForm', () => {
    render(<CardsForm cards={cards} />);

    const cardsElement = screen.queryAllByTestId('form-card');
    expect(cardsElement.length).toBe(2);
  });
});
