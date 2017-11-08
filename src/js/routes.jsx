import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import TextsPage from './components/texts/TextsPage';
import ManageTextPage from './components/texts/ManageTextPage'; 

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="texts" component={TextsPage} />
    <Route path="text" component={ManageTextPage} />
    <Route path="text/:id" component={ManageTextPage} />
  </Route>
);
