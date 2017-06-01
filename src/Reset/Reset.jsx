import React from 'react';
import Radium, { Style } from 'radium';
import { palette } from '../styles/colors';
import { baseFontSize } from '../styles/font-sizes';
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
    'h1, h2, h3, h4, h5, h6': {
      fontWeight: 300,
      margin: 0
    },
    h1: { fontSize: Math.round(baseFontSize * 2.25) },
    h2: { fontSize: Math.round(baseFontSize * 1.75) },
    h3: { fontSize: Math.round(baseFontSize * 1.5) },
    h4: { fontSize: Math.round(baseFontSize * 1.25) },
    h5: { fontSize: Math.round(baseFontSize * 1.15) },
    h6: { fontSize: baseFontSize },
  }} />
);

export default Reset;
