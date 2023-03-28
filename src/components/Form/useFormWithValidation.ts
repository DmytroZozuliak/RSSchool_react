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

  return {
    register,
    registerValidation: {
      nameRegister,
      surnameRegister,
      fileRegister,
      dateRegister,
      countryRegister,
      dataProcessingRegister,
    },
    handleSubmit,
    reset,
    errors,
    clearErrors,
  };
};

export default useFormWithValidation;
