import React from 'react';
import { Route, Link } from 'react-router-dom';

import App from './components/App';
import Home from './components/pages/Home';

import ButtonPage from './components/pages/ButtonPage';
import GridPage from './components/pages/GridPage';

const Routes = (
  <App>
    <Route exact path="/" component={ Home }/>
    <Route path="/components/button" component={ ButtonPage } />
    <Route path="/components/grid" component={ GridPage } />
  </App>
);

export default Routes;
