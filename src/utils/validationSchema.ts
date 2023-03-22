import * as Yup from 'yup';
import { SUPPORTED_FORMATS } from '../constants/constants';

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name should have at least 3 characters'),
  surname: Yup.string()
    .required('Surname is required')
    .min(3, 'Surname should have at least 3 characters'),
  date: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('Date is required')
    .max(new Date(), 'Pick correct birth date'),
  dataProcessing: Yup.boolean().oneOf([true], 'Data processing is required'),
  file: Yup.mixed<FileList>()
    .nullable()
    .required('You need to provide a file')
    .test('fileType', 'Unsupported File Format', (files) =>
      SUPPORTED_FORMATS.includes(files[0].type)
    )
    .test('fileSize', 'File size too large', (files) => {
      return files[0].size <= 1000000;
    }),
});
