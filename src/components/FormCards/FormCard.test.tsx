import { render, screen } from '@testing-library/react';
import { FormCard } from '../../types/formTypes';
import FormCards from './FormCards';

describe('CardsForm component', () => {
  let cards: FormCard[];

  beforeAll(() => {
    cards = [
      {
        name: 'Dima',
        surname: 'Zoz',
        date: '2022-01-01',
        country: 'UA',
        img: './logo.img',
        genderMale: 'male',
        dataProcessing: true,
      },
      {
        name: 'Sasha',
        surname: 'Last name',
        date: '2002-01-01',
        country: 'PL',
        img: './avatar.img',
        genderMale: 'female',
        dataProcessing: true,
      },
    ];
  });

  test('renders FormCards', () => {
    render(<FormCards cards={cards} />);

    const name = screen.getByText(/dima/i);
    expect(name).toBeInTheDocument();
  });

  test('renders 2 FormCards', () => {
    render(<FormCards cards={cards} />);

    const cardsElement = screen.queryAllByTestId('form-card');
    expect(cardsElement.length).toBe(2);
  });
});
