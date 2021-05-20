import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Shell from '../containers/Shell';
import StoreContext from '../stores/StoreContext';
import store from '../stores/store';

class Console2 extends Component {
  render() {
    return (
      <Provider context={StoreContext} store={store}>
        <Shell />
      </Provider>
    );
  }
}

export default Console2;
