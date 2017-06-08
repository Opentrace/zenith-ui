import React from 'react';
import Radium, { StyleRoot } from 'radium';
import Navigation from './Navigation';
import { Grid, Cell } from 'zenith-ui/Grid';
import Reset from 'zenith-ui/Reset';
import TitleBar from 'zenith-ui/TitleBar';
import Styles from './App.Styles';

const App = () => (
  <StyleRoot>
    <Reset />
    <TitleBar title="Zenith-UI" subtitle="subtitle" />
    <Grid>
      <Cell width="1/8" style={[ Styles.sidebar ]}>Sidebar</Cell>
      <Cell width="7/8">Main Content</Cell>
    </Grid>
  </StyleRoot>
);

const Wrapper = Radium(App);

export default Wrapper;
