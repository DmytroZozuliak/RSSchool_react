import React, { useState } from 'react';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import MySelect from '../UI/MySelect';
import MyToggle from '../UI/MyToggle';
import MyCheckbox from '../UI/MyCheckbox';
import classes from './Form.module.scss';
import { FormCard, Gender } from '../../types/formTypes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../utils/validationSchema';
import { SUPPORTED_FORMATS } from '../../constants/constants';

interface FormProps {
  addCard: (card: FormCard) => void;
}

interface FormValues {
  name: string;
  surname: string;
  gender: Gender;
  date: Date | null;
  country: string;
  dataProcessing: boolean;
  file: FileList | null;
}

const defaultValues: FormValues = {
  name: '',
  surname: '',
  gender: 'male',
  country: 'UA',
  dataProcessing: false,
  date: null,
  file: null,
};

const Form = ({ addCard }: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  const [logo, setLogo] = useState<null | string>(null);
  const [submitDisable, setSubmitDisable] = useState(true);

  const resetForm = () => {
    reset(defaultValues);
    setLogo(null);
    setSubmitDisable(true);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, surname, country, dataProcessing, date, gender } = data;
    const newCard: FormCard = {
      name,
      surname,
      date: (date && date.toLocaleDateString()) || '',
      country,
      dataProcessing,
      gender,
      img: logo,
    };
    addCard(newCard);
    resetForm();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof FormValues;
    if (
      name === 'file' &&
      e.target.files?.length &&
      SUPPORTED_FORMATS.includes(e.target.files[0].type)
    ) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    } else if (name === 'file' && e.target.files?.length === 0) {
      setLogo(null);
    }
    if (errors[name]) {
      clearErrors(name);
    }
  };

  const submitButtonDisabled = () => {
    if (
      submitDisable ||
      errors.dataProcessing ||
      errors.date ||
      errors.file ||
      errors.name ||
      errors.surname
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form
      className={classes.cardForm}
      onChange={() => setSubmitDisable(false)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <MyInput
        {...register('name')}
        onChange={onChangeHandler}
        label="Name"
        errorMessage={errors.name?.message}
      />
      <MyInput
        {...register('surname')}
        onChange={onChangeHandler}
        label="Surname"
        errorMessage={errors.surname?.message}
      />
      <MyToggle {...register('gender')} option1="male" option2="female" label="Gender" />

      <MyInput
        {...register('date')}
        type="date"
        label="Birth date"
        onChange={onChangeHandler}
        errorMessage={errors.date?.message}
      />
      <MyInput
        type="file"
        {...register('file')}
        image={logo}
        label="Avatar"
        errorMessage={errors.file?.message}
        onChange={onChangeHandler}
      />
      <MySelect
        {...register('country')}
        label="Choose your country"
        values={['UA', 'USA', 'PL', 'D', 'SP']}
      />
      <MyCheckbox
        {...register('dataProcessing')}
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
