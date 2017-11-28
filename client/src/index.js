import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers/index.js';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));


console.log('STRIPE KEY', process.env.REACT_APP_STRIPE_KEY);
console.log('ENV is ', process.env.NODE_ENV);

registerServiceWorker();
