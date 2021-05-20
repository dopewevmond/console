import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import StoreContext from './core/StoreContext';
import './index.css';

import { App, store } from './core';

ReactDOM.render(
  <div>
    <Provider context={StoreContext} store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
