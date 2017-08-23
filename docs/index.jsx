/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { AppBar, Dropdown, DropdownContent, DropdownTrigger, palette } from 'zenith-ui';
import { createRouter, createRoute, Route, Link } from 'react-roadway';

import './main.scss';

import Home from './pages/Home';
import Components from './pages/Components';
import Card from './pages/Card';

const App = () => (
  <div>
    <AppBar title="Zenith UI">
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li>
            <Dropdown>
              <DropdownTrigger>Components</DropdownTrigger>
              <DropdownContent>
                <ul>
                  <li><Link href="/components/card">Card</Link></li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </AppBar>

    

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
