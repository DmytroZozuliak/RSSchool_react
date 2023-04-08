import MyInput from '../UI/MyInput';

interface InputSearchProps {
  term: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputSearch = ({ onChange, onSubmit, term }: InputSearchProps) => {
  return (
    <form onSubmit={onSubmit}>
      <MyInput type="search" placeholder="search..." value={term} onChange={onChange} />
    </form>
  );
};

export default InputSearch;
