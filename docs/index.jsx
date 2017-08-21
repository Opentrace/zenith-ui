/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { AppBar, palette } from 'zenith-ui';
import { createRouter, createRoute, Route, Link } from 'react-roadway';

import './main.scss';

import Home from './pages/Home';
import Components from './pages/Components';
import Card from './pages/Card';

const App = () => (
  <div>
    <AppBar title="Zenith UI" withNav>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/components">Components</Link></li>
        </ul>
      </nav>
    </AppBar>
    <header>
      <h1>Zenith UI</h1>
    </header>

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
