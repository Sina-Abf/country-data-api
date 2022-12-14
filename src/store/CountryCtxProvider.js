import { useState } from 'react';
import CountryCtx from './country-ctx';

const CountryCtxProvider = (props) => {
  const [searchWord, setSearchWord] = useState('');
  const [selectWord, setSelectWord] = useState('');

  const onSearchChangeHander = (data) => {
    setSearchWord(data);
    setSelectWord('');
  };
  const onSelectChangeHandler = (data) => {
    setSelectWord(data);
    setSearchWord('');
  };

  const initialValue = {
    searchWordHandler: onSearchChangeHander,
    selectWordHandler: onSelectChangeHandler,
    searchWord,
    selectWord,
  };
  return (
    <CountryCtx.Provider value={initialValue}>
      {props.children}
    </CountryCtx.Provider>
  );
};

export default CountryCtxProvider;
