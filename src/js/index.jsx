import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../sass/styles.scss';
import 'bootstrap';

render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);