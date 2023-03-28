import React, { useCallback, useEffect, useState } from 'react';
import MyButton from '../UI/MyButton';
import MyInput from '../UI/MyInput';
import MySelect from '../UI/MySelect';
import MyToggle from '../UI/MyToggle';
import MyCheckbox from '../UI/MyCheckbox';
import classes from './Form.module.scss';
import { countriesType, FormCard, Gender } from '../../types/formTypes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { COUNTRIES, SUPPORTED_FORMATS } from '../../constants/constants';
interface FormProps {
  addCard: (card: FormCard) => void;
}

export interface FormValues {
  name: string;
  surname: string;
  gender: Gender;
  date: Date | string;
  country: countriesType;
  dataProcessing: boolean;
  file: FileList | null;
}

const defaultValues: FormValues = {
  name: '',
  surname: '',
  gender: 'male',
  country: 'default',
  dataProcessing: false,
  date: '',
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

  const nameRegister = register('name', {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name should have at least 3 characters',
    },
  });
  const surnameRegister = register('surname', {
    required: 'Surname is required',
    minLength: {
      value: 3,
      message: 'Surname should have at least 3 characters',
    },
  });

  const fileRegister = register('file', {
    required: 'You need to provide a file',
    validate: {
      fileType: (files) =>
        (files && SUPPORTED_FORMATS.includes(files[0].type)) || 'Unsupported File Format',
      fileSize: (files) => (files && files[0].size <= 1000000) || 'File size too large',
    },
  });

  const dateRegister = register('date', {
    valueAsDate: true,
    required: 'Date is required',
    validate: {
      maxDate: (date) => date < new Date() || 'Pick correct birth date',
    },
  });

  const countryRegister = register('country', {
    validate: {
      notDefault: (country) => country !== 'default' || 'Field required',
    },
  });

  const dataProcessingRegister = register('dataProcessing', {
    required: 'Data processing is required',
  });

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
