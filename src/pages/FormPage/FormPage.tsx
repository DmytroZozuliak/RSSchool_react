import { Component } from 'react';
import Form from '../../components/Form';
import FormCards from '../../components/FormCards/FormCards';
import { FormCard } from '../../types/formTypes';
import styles from './FormPage.module.scss';

interface State {
  formCards: FormCard[];
  isVisibleMessage: boolean;
}

export default class FormPage extends Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      formCards: [],
      isVisibleMessage: false,
    };
  }

  addCard = (card: FormCard) => {
    this.setState((prevState) => {
      return { formCards: [...prevState.formCards, card], isVisibleMessage: true };
    });

    setTimeout(() => {
      this.setState({ isVisibleMessage: false });
    }, 3000);
  };

  render() {
    return (
      <>
        <Form addCard={this.addCard} />
        {this.state.isVisibleMessage && <p className={styles.message}>Card created successfully</p>}
        <FormCards cards={this.state.formCards} />
      </>
    );
  }
}
