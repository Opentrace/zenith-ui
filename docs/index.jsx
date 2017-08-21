/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import './main.scss';
import { createRouter, createRoute, Route, Link } from 'react-roadway';

import Home from './pages/Home';
import Components from './pages/Components';
import Card from './pages/Card';

const App = () => (
  <div>
    <header>
      <h1>Zenith UI</h1>
    </header>

    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/components">Components</Link></li>
    </ul>

    <Home match="/" />
    <Components match="/components" />
    <Card match="/components/card" />

    <footer>
      &copy; { (new Date).getFullYear() } <a href="http://opentrace.ca" target="_blank">Opentrace</a>.
    </footer>
  </div>
);

const Router = createRouter(App);

render(<Router />, document.getElementById('content'));
