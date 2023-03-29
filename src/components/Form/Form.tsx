import React, { Component, createRef } from 'react';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import MySelect from '../UI/MySelect';
import MyToggle from '../UI/MyToggle';
import MyCheckbox from '../UI/MyCheckbox';
import classes from './Form.module.scss';
import { FormCard, Gender } from '../../types/formTypes';

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
  genderMale: boolean;
}

export default class Form extends Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  checkboxProcessing: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  genderRadio1: React.RefObject<HTMLInputElement>;
  genderRadio2: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.nameInput = createRef();
    this.surnameInput = createRef();
    this.dateInput = createRef();
    this.fileInput = createRef();
    this.countrySelect = createRef();
    this.checkboxProcessing = createRef();
    this.genderRadio1 = createRef();
    this.genderRadio2 = createRef();

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
      genderMale: true,
    };
  }

  onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name as keyof State;
    const inputAvatar = this.fileInput.current;
    if (name === 'file' && inputAvatar && inputAvatar.files) {
      this.setState({ img: URL.createObjectURL(inputAvatar.files[0]), file: true });
    }
    this.handleInputANdSelect(name);
  };

  onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const name = e.target.name as keyof State;
    this.handleInputANdSelect(name);
  };

  handleInputANdSelect = (name: keyof State): void => {
    this.setState((prevState) => {
      return { ...prevState, [name]: true };
    }, this.enableButton);

    if (!this.state.firstChangeForm) {
      this.setState({ buttonsDisable: false });
    }
  };

  enableButton = (): void => {
    if (
      this.state.country &&
      this.state.dataProcessing &&
      this.state.date &&
      this.state.file &&
      this.state.name &&
      this.state.surname &&
      this.state.firstChangeForm &&
      this.state.genderMale
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
    const { checkboxProcessing, inputAvatar, inputDate, inputName, inputSurname, countrySelect } =
      this.getElementsFromRefs();

    let isValid = true;
    isValid = this.isValidComponent(inputName.value.trim().length < 3, 'name') && isValid;
    isValid = this.isValidComponent(inputSurname.value.trim().length < 3, 'surname') && isValid;
    const dataValue = new Date(inputDate.value);
    const currentDay = new Date();
    isValid = this.isValidComponent(!inputDate.value || dataValue > currentDay, 'date') && isValid;

    isValid =
      this.isValidComponent(!!inputAvatar.files && !inputAvatar.files.length, 'file') && isValid;
    isValid = this.isValidComponent(!checkboxProcessing.checked, 'dataProcessing') && isValid;
    isValid = this.isValidComponent(countrySelect.value === 'default', 'country') && isValid;
    return isValid;
  };

  getElementsFromRefs = () => {
    const inputName = this.nameInput.current as HTMLInputElement;
    const inputSurname = this.surnameInput.current as HTMLInputElement;
    const inputDate = this.dateInput.current as HTMLInputElement;
    const inputAvatar = this.fileInput.current as HTMLInputElement;
    const countrySelect = this.countrySelect.current as HTMLSelectElement;
    const checkboxProcessing = this.checkboxProcessing.current as HTMLInputElement;
    const radioGenderMale = this.genderRadio1.current as HTMLInputElement;
    const radioGenderFemale = this.genderRadio2.current as HTMLInputElement;
    return {
      inputName,
      inputSurname,
      inputDate,
      inputAvatar,
      countrySelect,
      checkboxProcessing,
      radioGenderMale,
      radioGenderFemale,
    };
  };

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const {
      checkboxProcessing,
      countrySelect,
      inputAvatar,
      inputDate,
      inputName,
      inputSurname,
      radioGenderFemale,
      radioGenderMale,
    } = this.getElementsFromRefs();

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
    const selectedGender = (
      radioGenderMale.checked ? radioGenderMale.value : radioGenderFemale.value
    ) as Gender;

    const newCard: FormCard = {
      name: inputName.value,
      surname: inputSurname.value,
      date: inputDate.value,
      country: countrySelect.value,
      img: imgValue,
      dataProcessing: checkboxProcessing.checked,
      genderMale: selectedGender,
    };

    this.props.addCard(newCard);
    this.resetStateInputs();
  };

  resetStateInputs = () => {
    const {
      checkboxProcessing,
      countrySelect,
      inputAvatar,
      inputDate,
      inputName,
      inputSurname,
      radioGenderFemale,
      radioGenderMale,
    } = this.getElementsFromRefs();

    inputName.value = '';
    inputSurname.value = '';
    inputDate.value = '';
    countrySelect.value = 'default';
    checkboxProcessing.checked = false;
    inputAvatar.value = '';
    radioGenderMale.checked = true;
    radioGenderFemale.checked = false;

    this.setState({
      name: true,
      surname: true,
      date: true,
      img: null,
      country: true,
      file: true,
      dataProcessing: true,
      buttonsDisable: true,
      genderMale: true,
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
        />
        <MyInput
          label="Surname"
          name="surname"
          valid={this.state.surname}
          errorMessage="Your surname should contains at least 3 chars"
          reference={this.surnameInput}
          onChange={this.onChangeInputHandler}
        />
        <MyToggle
          onChange={this.onChangeInputHandler}
          name="genderMale"
          reference1={this.genderRadio1}
          reference2={this.genderRadio2}
          option1="male"
          option2="female"
          label="Gender"
        />
        <MyInput
          type="date"
          label="Birth date"
          name="date"
          valid={this.state.date}
          errorMessage="Pick correct birth date"
          reference={this.dateInput}
          onChange={this.onChangeInputHandler}
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
        />
        <MySelect
          label="Choose your country"
          values={['UA', 'USA', 'PL', 'D', 'SP']}
          valid={this.state.country}
          errorMessage="Field required"
          reference={this.countrySelect}
          name="country"
          onChange={this.onChangeSelectHandler}
        />
        <MyCheckbox
          name="dataProcessing"
          label="Agree to data processing"
          reference={this.checkboxProcessing}
          valid={this.state.dataProcessing}
          errorMessage="you should agree"
          onChange={this.onChangeInputHandler}
        />

        <div className={classes.cardForm__buttons}>
          <MyButton type="submit" disabled={this.state.buttonsDisable}>
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
