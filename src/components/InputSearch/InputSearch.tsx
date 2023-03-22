import { useEffect, useState } from 'react';
import MyInput from '../UI/MyInput';

const InputSearch = () => {
  const [term, setTerm] = useState(() => localStorage.getItem('goodsSearchBar') || '');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('goodsSearchBar', term);
    };
  }, [term]);

  return <MyInput type="search" placeholder="search..." value={term} onChange={onChangeHandler} />;
};

export default InputSearch;
