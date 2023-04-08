import { useState } from 'react';
import Form from '../../components/Form';
import FormCards from '../../components/FormCards/FormCards';
import { FormCard } from '../../types/formTypes';
import styles from './FormPage.module.scss';

const TIME_DELAY = 3000;

const FormPage = () => {
  const [isVisibleMessage, setIsVisibleMessage] = useState(false);
  const [formCards, setFormCards] = useState<FormCard[]>([]);

  const addCard = (newCard: FormCard) => {
    setFormCards((prevState) => [...prevState, newCard]);
    setIsVisibleMessage(true);

    setTimeout(() => {
      setIsVisibleMessage(false);
    }, TIME_DELAY);
  };

  return (
    <>
      <Form addCard={addCard} />
      {isVisibleMessage && <p className={styles.message}>Card created successfully</p>}
      <FormCards cards={formCards} />
    </>
  );
};

export default FormPage;
