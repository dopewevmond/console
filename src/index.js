import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './core/store';
import './index.css';
import './core/jsconsole.css';
const App = require('./core/containers/App').default;


ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);
