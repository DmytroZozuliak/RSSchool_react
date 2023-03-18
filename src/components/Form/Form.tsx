import React, { Component, createRef } from 'react';
import { FormCard } from '../../pages/FormPage/FormPage';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import MySelect from '../UI/MySelect';
import MyToggle from '../UI/MyToggle';
import classes from './Form.module.scss';

interface Props {
  addCard: (card: FormCard) => void;
}

interface State {
  firstChangeForm: boolean;
  buttonsDisable: boolean;
  name: boolean;
  surname: boolean;
  date: boolean;
  country: boolean;
  img: string | null;
  file: boolean;
  dataProcessing: boolean;
}

export default class Form extends Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  checkboxProcessing: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;

  constructor(props: Props) {
    super(props);
    this.nameInput = createRef();
    this.surnameInput = createRef();
    this.dateInput = createRef();
    this.fileInput = createRef();
    this.countrySelect = createRef();
    this.checkboxProcessing = createRef();

    this.state = {
      firstChangeForm: false,
      buttonsDisable: true,
      name: true,
      surname: true,
      date: true,
      country: true,
      file: true,
      img: null,
      dataProcessing: true,
    };
  }

  onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof State;
    const inputAvatar = this.fileInput.current;
    if (name === 'file' && inputAvatar && inputAvatar.files) {
      this.setState({ img: URL.createObjectURL(inputAvatar.files[0]), file: true });
    }
    this.setState((prevState) => {
      return { ...prevState, [name]: true };
    }, this.enableButton);

    if (!this.state.firstChangeForm) {
      this.setState({ buttonsDisable: false });
    }
  };

  onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name as keyof State;
    this.setState((prevState) => {
      return { ...prevState, [name]: true };
    }, this.enableButton);

    if (!this.state.firstChangeForm) {
      this.setState({ buttonsDisable: false });
    }
  };

  enableButton = () => {
    if (
      this.state.country &&
      this.state.dataProcessing &&
      this.state.date &&
      this.state.file &&
      this.state.name &&
      this.state.surname &&
      this.state.firstChangeForm
    ) {
      this.setState((prevState) => {
        return { ...prevState, buttonsDisable: false };
      });
    }
  };

  isValidComponent = (condition: boolean, stateKey: keyof State): boolean => {
    if (condition) {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: false };
      });
      return false;
    } else {
      this.setState((prevState) => {
        return { ...prevState, [stateKey]: true };
      });
      return true;
    }
  };

  validationAll = (): boolean => {
    const name = (this.nameInput.current as HTMLInputElement).value;
    const surname = (this.surnameInput.current as HTMLInputElement).value;
    const date = (this.dateInput.current as HTMLInputElement).value;
    const inputAvatar = this.fileInput.current as HTMLInputElement;
    const inputDataProcessing = this.checkboxProcessing.current as HTMLInputElement;

    let isValid = true;
    isValid = this.isValidComponent(name.trim().length < 3, 'name') && isValid;
    isValid = this.isValidComponent(surname.trim().length < 3, 'surname') && isValid;
    const dataValue = new Date(date);
    const currentDay = new Date();
    isValid = this.isValidComponent(!date || dataValue > currentDay, 'date') && isValid;

    isValid =
      this.isValidComponent(!!inputAvatar.files && !inputAvatar.files.length, 'file') && isValid;
    isValid =
      this.isValidComponent(inputDataProcessing.checked === false, 'dataProcessing') && isValid;

    return isValid;
  };

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputName = this.nameInput.current as HTMLInputElement;
    const inputSurname = this.surnameInput.current as HTMLInputElement;
    const inputDate = this.dateInput.current as HTMLInputElement;
    const inputAvatar = this.fileInput.current as HTMLInputElement;
    const countrySelect = this.countrySelect.current as HTMLSelectElement;
    const checkboxProcessing = this.checkboxProcessing.current as HTMLInputElement;

    this.setState({ firstChangeForm: true });

    if (!this.validationAll()) {
      this.setState({ buttonsDisable: true });
      return;
    }

    let imgValue: string | null;
    if (inputAvatar && inputAvatar.files) {
      imgValue = URL.createObjectURL(inputAvatar.files[0]);
    } else {
      imgValue = null;
    }

    const newCard: FormCard = {
      name: inputName.value,
      surname: inputSurname.value,
      date: inputDate.value,
      country: countrySelect.value,
      img: imgValue,
      dataProcessing: checkboxProcessing.checked,
    };

    this.props.addCard(newCard);
    this.resetStateInputs();
  };

  resetStateInputs = () => {
    const inputName = this.nameInput.current as HTMLInputElement;
    const inputSurname = this.surnameInput.current as HTMLInputElement;
    const inputDate = this.dateInput.current as HTMLInputElement;
    const inputAvatar = this.fileInput.current as HTMLInputElement;
    const countrySelect = this.countrySelect.current as HTMLSelectElement;
    const checkboxProcessing = this.checkboxProcessing.current as HTMLInputElement;

    inputName.value = '';
    inputSurname.value = '';
    inputDate.value = '';
    countrySelect.value = 'UA';
    checkboxProcessing.checked = false;
    inputAvatar.value = '';

    this.setState({
      name: true,
      surname: true,
      date: true,
      img: null,
      country: true,
      file: true,
      dataProcessing: true,
      buttonsDisable: true,
    });
  };

  render() {
    return (
      <form className={classes.cardForm} onSubmit={this.onFormSubmit}>
        <MyInput
          label="Name"
          name="name"
          valid={this.state.name}
          errorMessage="Your name should contains at least 3 chars"
          reference={this.nameInput}
          onChange={this.onChangeInputHandler}
          data-testid="input-name"
        />
        <MyInput
          label="Surname"
          name="surname"
          valid={this.state.surname}
          errorMessage="Your surname should contains at least 3 chars"
          reference={this.surnameInput}
          onChange={this.onChangeInputHandler}
          data-testid="input-surname"
        />
        <MyInput
          type="date"
          label="Birth date"
          name="date"
          valid={this.state.date}
          errorMessage="Pick correct birth date"
          reference={this.dateInput}
          onChange={this.onChangeInputHandler}
          data-testid="input-date"
        />
        <MyInput
          type="file"
          label="Avatar"
          name="file"
          valid={this.state.file}
          image={this.state.img}
          errorMessage="You should download avatar"
          reference={this.fileInput}
          onChange={this.onChangeInputHandler}
          data-testid="input-file"
        />
        <MySelect
          label="Choose your country"
          values={['UA', 'USA', 'PL', 'D', 'SP']}
          reference={this.countrySelect}
          name="country"
          onChange={this.onChangeSelectHandler}
          data-testid="select-country"
        />
        <MyToggle
          name="dataProcessing"
          label="Agree to data processing"
          reference={this.checkboxProcessing}
          valid={this.state.dataProcessing}
          errorMessage="you should agree"
          onChange={this.onChangeInputHandler}
          data-testid="input-dataProcessing"
        />
        <div className={classes.cardForm__buttons}>
          <MyButton type="submit" disabled={this.state.buttonsDisable} data-testid="button-submit">
            Create card
          </MyButton>
          <MyButton type="reset" onClick={this.resetStateInputs}>
            Reset
          </MyButton>
        </div>
      </form>
    );
  }
}
