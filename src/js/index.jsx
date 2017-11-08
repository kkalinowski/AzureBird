import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import {loadTexts} from './actions/textActions'
import routes from './routes';
import '../sass/styles.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadTexts())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, 
  document.getElementById('app')
);