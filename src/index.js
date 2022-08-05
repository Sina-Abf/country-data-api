import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import CountryCtxProvider from './store/CountryCtxProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryCtxProvider>
        <App />
      </CountryCtxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
