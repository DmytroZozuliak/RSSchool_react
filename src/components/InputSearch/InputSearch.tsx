import { useEffect, useRef, useState } from 'react';
import MyInput from '../UI/MyInput';

const InputSearch = () => {
  const [term, setTerm] = useState(() => localStorage.getItem('goodsSearchBar') || '');
  const inputRefValue = useRef(term);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    inputRefValue.current = e.target.value;
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('goodsSearchBar', inputRefValue.current);
    };
  }, []);

  return <MyInput type="search" placeholder="search..." value={term} onChange={onChangeHandler} />;
};

export default InputSearch;
