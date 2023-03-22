export type Gender = 'male' | 'female';

export interface FormCard {
  name: string;
  surname: string;
  gender: Gender;
  date: string;
  country: string;
  img: string | null;
  dataProcessing: boolean;
}
