import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'simple-assign';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import Styles from './Icon.Styles';

const Icon = ({ name }) => (
  <i style={[ Styles.base ]}>{ name }</i>
);

export default Radium(Icon);
