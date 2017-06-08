import React from 'react';
import Radium, { StyleRoot } from 'radium';
import Navigation from 'zenith-ui/Navigation';
import ZenithRoot from 'zenith-ui/ZenithRoot';
import { Grid, Cell } from 'zenith-ui/Grid';
import Reset from 'zenith-ui/Reset';
import TitleBar from 'zenith-ui/TitleBar';
import Styles from './App.Styles';

const App = ({ children }) => (
  <ZenithRoot>
    <TitleBar
      title="Zenith-UI"
      titleLink="#/">
      <Navigation direction="horizontal">
        <a href="#/components/button">Buttons</a>
        <a href="#/components/grid">Grid</a>
      </Navigation>
    </TitleBar>
    <Grid>
      <Cell width="1">{ children }</Cell>
    </Grid>
  </ZenithRoot>
);

const Wrapper = Radium(App);

export default Wrapper;
