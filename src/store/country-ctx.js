import React from 'react';

const CountryCtx = React.createContext({
  searchWord: '',
  onChangeHandler(data) {},
});
export default CountryCtx;
