import React from 'react';
import Radium, { Style } from 'radium';
import { palette } from '../styles/colors';
import typography from '../styles/typography';

const Reset = () => (
  <Style rules={{
    body: {
      margin: 0,
      ...typography,
      fontFamily: 'Open Sans, sans-serif'
    },
    html: {
      background: '#fff',
      fontSize: '100%'
    },
    'h1, h2, h3': {
      fontWeight: 300,
      margin: 0
    }
  }} />
);

export default Reset;
