import React from 'react';
import Radium, { Style } from 'radium';

const Reset = () => (
  <Style rules={{
    body: {
      margin: 0,
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
