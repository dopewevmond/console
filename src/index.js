import ReactDOM from 'react-dom';
import './index.css';

import { Console } from './core';

const payload = {
  welcome: 'hello, world!',
  add: (x, y) => x + y,
};

ReactDOM.render(
  <div>
    <Console payload={payload}/>
  </div>,
  document.getElementById('root')
);
