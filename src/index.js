import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';
import store from './store';
// import * as actions from './actions';

// store.dispatch(actions.restartGame());
// console.log(store.getState());

// store.dispatch(actions.makeGuess(25));
// console.log(store.getState());

// store.dispatch(actions.makeGuess(30));
// console.log(store.getState());

// store.dispatch(actions.generateAuralUpdate());
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
      <Game />
  </Provider>,
  document.getElementById('root')
);
