import React from 'react';
import { StyleRoot } from 'radium';
import Reset from 'zenith-ui/Reset';
import '../styles/material-icons.css';

const ZenithRoot = ({ children }) => (
  <StyleRoot>
    <Reset />
    { children }
  </StyleRoot>
);

export default ZenithRoot;
