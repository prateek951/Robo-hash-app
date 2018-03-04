import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {robots} from './robots';
ReactDOM.render(
<div>
      <CardList robots={robots}></CardList>
</div>, 
document.getElementById('root'));
registerServiceWorker();
