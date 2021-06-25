import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Shell from '../containers/Shell';
import StoreContext from '../stores/StoreContext';
import store from '../stores/store';

class Console extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Provider context={StoreContext} store={store}>
        <Shell {...this.props}/>
      </Provider>
    );
  }
}

export default Console;
