import React from 'react';
import { StyleRoot } from 'radium';
import Reset from 'zenith-ui/Reset';

const ZenithRoot = ({ children }) => (
  <StyleRoot>
    <Reset />
    { children }
  </StyleRoot>
);

export default ZenithRoot;
