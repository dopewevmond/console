import React, { Component } from 'react';
import './styles/Autocomplete.css';

class Autocomplete extends Component {
  render() {
    return (
      <div className="Autocomplete">
        <span className="matching">doc</span>
        <span className="preview">ument</span>
      </div>
    );
  }
}

export default Autocomplete;
