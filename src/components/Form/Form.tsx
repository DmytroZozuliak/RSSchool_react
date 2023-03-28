import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { COUNTRIES, SUPPORTED_FORMATS } from '../../constants/constants';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import MySelect from '../UI/MySelect';
import MyToggle from '../UI/MyToggle';
import MyCheckbox from '../UI/MyCheckbox';
import useValidation from './useFormWithValidation';
import classes from './Form.module.scss';
import { FormCard, FormValues } from '../../types/formTypes';

const defaultValues: FormValues = {
  name: '',
  surname: '',
  gender: 'male',
  country: 'default',
  dataProcessing: false,
  date: '',
  file: null,
};
interface FormProps {
  addCard: (card: FormCard) => void;
}

const Form = ({ addCard }: FormProps) => {
  const [logo, setLogo] = useState<null | string>(null);
  const [submitDisable, setSubmitDisable] = useState(true);
  const {
    handleSubmit,
    reset,
    errors,
    clearErrors,
    register,
    registerValidation: {
      countryRegister,
      dataProcessingRegister,
      dateRegister,
      fileRegister,
      nameRegister,
      surnameRegister,
    },
  } = useValidation(defaultValues);

  const resetForm = () => {
    reset(defaultValues);
    setLogo(null);
    setSubmitDisable(true);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, surname, country, dataProcessing, date, gender } = data;
    const dateResult = date instanceof Date ? date.toLocaleDateString() : '';
    const newCard: FormCard = {
      name,
      surname,
      date: dateResult,
      country,
      dataProcessing,
      gender,
      img: logo,
    };
    addCard(newCard);
    resetForm();
  };

  const onChangeInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name as keyof FormValues;
      if (errors[name]) {
        clearErrors(name);
      }
      if (name !== 'file') {
        return;
      }
      const file = e.target.files?.[0];
      if (!file || !SUPPORTED_FORMATS.includes(file.type)) {
        setLogo(null);
        return;
      }
      setLogo(URL.createObjectURL(file));
    },
    [setLogo, clearErrors, errors]
  );

  const onChangeSelectHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const name = e.target.name as keyof FormValues;
      if (errors[name]) {
        clearErrors(name);
      }
    },
    [clearErrors, errors]
  );

  useEffect(() => {
    return () => {
      if (logo) {
        URL.revokeObjectURL(logo);
      }
    };
  }, [logo]);

  const submitButtonDisabled = () => {
    return submitDisable || Object.values(errors).some((error) => Boolean(error));
  };

  return (
    <form
      className={classes.cardForm}
      onChange={() => setSubmitDisable(false)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <MyInput
        {...nameRegister}
        onChange={onChangeInputHandler}
        label="Name"
        errorMessage={errors.name?.message}
      />
      <MyInput
        {...surnameRegister}
        onChange={onChangeInputHandler}
        label="Surname"
        errorMessage={errors.surname?.message}
      />
      <MyToggle {...register('gender')} option1="male" option2="female" label="Gender" />

      <MyInput
        {...dateRegister}
        type="date"
        label="Birth date"
        onChange={onChangeInputHandler}
        errorMessage={errors.date?.message}
      />
      <MyInput
        type="file"
        {...fileRegister}
        image={logo}
        label="Avatar"
        errorMessage={errors.file?.message}
        onChange={onChangeInputHandler}
      />
      <MySelect
        errorMessage={errors.country?.message}
        defaultOption="--select a country--"
        {...countryRegister}
        onChange={onChangeSelectHandler}
        label="Choose your country"
        values={COUNTRIES}
      />
      <MyCheckbox
        {...dataProcessingRegister}
        label="Agree to data processing"
        errorMessage={errors.dataProcessing?.message}
      />
      <div className={classes.cardForm__buttons}>
        <MyButton type="submit" disabled={submitButtonDisabled()}>
          Create card
        </MyButton>
        <MyButton type="reset" onClick={resetForm}>
          Reset
        </MyButton>
      </div>
    </form>
  );
};

export default Form;
