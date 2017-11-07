import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/App';
import HomePage from './components/home/HomePage';
import TextsPage from './components/texts/TextsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="texts" component={TextsPage} />
  </Route>
);
