import React from 'react';
import { Provider as BumbagProvider } from 'bumbag';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core';
import {
  Web3Provider,
  ExternalProvider,
  JsonRpcFetchFunc,
} from '@ethersproject/providers';
import App from './app';
import reportWebVitals from './reportWebVitals';

const getLibrary = (
  provider: ExternalProvider | JsonRpcFetchFunc
): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

ReactDOM.render(
  <React.StrictMode>
    <BumbagProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </BumbagProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
