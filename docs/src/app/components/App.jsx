import React from 'react';
import Radium, { StyleRoot } from 'radium';
import NavigationBar from 'zenith-ui/NavigationBar';
import ZenithRoot from 'zenith-ui/ZenithRoot';
import { Grid, Cell } from 'zenith-ui/Grid';
import Reset from 'zenith-ui/Reset';
import Styles from './App.Styles';

const App = ({ children }) => (
  <ZenithRoot>
    <NavigationBar title="Zenith-UI" titleLink="#/">
      <a href="#/components/button">Buttons</a>
      <a href="#/components/grid">Grid</a>
      <a href="#/components/icon">Icon</a>
    </NavigationBar>
    <Grid style={{ marginTop: 72 }}>
      <Cell width="1">{ children }</Cell>
    </Grid>
  </ZenithRoot>
);

const Wrapper = Radium(App);

export default Wrapper;
