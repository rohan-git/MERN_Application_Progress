import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers/index.js';

const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
