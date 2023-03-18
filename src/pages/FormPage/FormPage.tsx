import { Component } from 'react';
import Form from '../../components/Form';
import { Gender } from '../../components/Form/Form';
import FormCards from '../../components/FormCards/FormCards';
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
  genderMale: Gender;
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
