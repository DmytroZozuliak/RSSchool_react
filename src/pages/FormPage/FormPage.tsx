import { Component } from 'react';
import Form from '../../components/Form';
import FormCards from '../../components/FormCards/FormCards';
import { FormCard } from '../../types/formTypes';
interface State {
  formCards: FormCard[];
}

export default class FormPage extends Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
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
