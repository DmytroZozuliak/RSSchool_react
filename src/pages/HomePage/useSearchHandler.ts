import { useEffect, useRef, useState } from 'react';

export const useSearchHandler = () => {
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

  return { term, onChangeHandler };
};
