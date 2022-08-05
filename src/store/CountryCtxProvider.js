import { useState } from 'react';
import CountryCtx from './country-ctx';

const CountryCtxProvider = (props) => {
  const [searchWord, setSearchWord] = useState('');

  const onChangeHander = (data) => {
    setSearchWord(data);
  };

  const initialValue = {
    onChangeHander(data) {},
    searchWord,
  };
  return (
    <CountryCtx.Provider value={initialValue}>
      {props.children}
    </CountryCtx.Provider>
  );
};

export default CountryCtxProvider;
