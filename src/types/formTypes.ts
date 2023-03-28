import { COUNTRIES } from '../constants/constants';

export interface FormValues {
  name: string;
  surname: string;
  gender: Gender;
  date: Date | string;
  country: countriesType;
  dataProcessing: boolean;
  file: FileList | null;
}

export type Gender = 'male' | 'female';

export type countriesType = (typeof COUNTRIES)[number] | 'default';

export interface FormCard {
  name: string;
  surname: string;
  gender: Gender;
  date: string;
  country: countriesType;
  img: string | null;
  dataProcessing: boolean;
}
