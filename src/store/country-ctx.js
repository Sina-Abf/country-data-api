import React from 'react';

const CountryCtx = React.createContext({
  searchWord: '',
  selectWord: '',
  searchhWordHandler(data) {},
  selectWordHandler(data) {},
});
export default CountryCtx;
