import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Card.Styles';

const Card = ({ title, icon, description, type }) => (
  <div style={[ Styles.base ]}>
    {
      title &&
      <div style={[ Styles.header ]}>{ title }</div>
    }
    <div style={[ Styles.content ]}>
      <div style={[ Styles.description ]}>{ description }</div>
    </div>
  </div>
);


Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Radium(Card);
