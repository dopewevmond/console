import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
import StoreContext from '../stores/StoreContext';
import store from '../stores/store';

class Console2 extends Component {
  render() {
    return (
      <Provider context={StoreContext} store={store}>
        <App />
      </Provider>
    );
  }
}

export default Console2;
