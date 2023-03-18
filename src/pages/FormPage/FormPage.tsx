import { Component } from 'react';
import Form from '../../components/Form';
import FormCards from '../../components/FormCard/FormCard';
// import CardsForm from './cardsForm/CardsForm';
interface State {
  formCards: FormCard[];
}
export interface FormCard {
  name: string;
  surname: string;
  date: string;
  country: string;
  img: string | null;
  dataProcessing: boolean;
}

export default class FormPage extends Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown> | Readonly<Record<string, unknown>>) {
    super(props);
    this.state = {
      formCards: [],
    };
  }

  addCard = (card: FormCard) => {
    this.setState(({ formCards }) => {
      return { formCards: [...formCards, card] };
    });
  };

  render() {
    return (
      <>
        <Form addCard={this.addCard} />
        <FormCards cards={this.state.formCards} />
      </>
    );
  }
}
