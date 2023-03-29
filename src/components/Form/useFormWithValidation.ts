import { useForm } from 'react-hook-form';
import { SUPPORTED_FORMATS } from '../../constants/constants';
import { FormValues } from '../../types/formTypes';

const useFormWithValidation = (defaultValues: FormValues) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    defaultValues,
  });

  const name = register('name', {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name should have at least 3 characters',
    },
  });
  const surname = register('surname', {
    required: 'Surname is required',
    minLength: {
      value: 3,
      message: 'Surname should have at least 3 characters',
    },
  });

  const file = register('file', {
    required: 'You need to provide a file',
    validate: {
      fileType: (files) =>
        (files && SUPPORTED_FORMATS.includes(files[0].type)) || 'Unsupported File Format',
      fileSize: (files) => (files && files[0].size <= 1000000) || 'File size too large',
    },
  });

  const date = register('date', {
    valueAsDate: true,
    required: 'Date is required',
    validate: {
      maxDate: (date) => date < new Date() || 'Pick correct birth date',
    },
  });

  const country = register('country', {
    validate: {
      notDefault: (country) => country !== 'default' || 'Field required',
    },
  });

  const dataProcessing = register('dataProcessing', {
    required: 'Data processing is required',
  });

  const gender = register('gender');

  return {
    registerValidation: {
      name,
      surname,
      file,
      date,
      country,
      dataProcessing,
      gender,
    },
    handleSubmit,
    reset,
    errors,
    clearErrors,
  };
};

export default useFormWithValidation;
