import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '~/components/root/App';
import { FetchDataProvider } from './components/store/FetchData';

ReactDOM.render(
  <React.StrictMode>
    <FetchDataProvider>
      <App />
    </FetchDataProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
