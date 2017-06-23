import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Card.Styles';

const Card = ({ title, icon, description, type, width }) => (
  <div style={[ Styles.base, Styles[type].base, { width: width }] }>
    {
      title &&
      <div style={[ Styles.header, Styles[type].header ]}>{ title }</div>
    }
    <div style={[ Styles.content, Styles[type].content ]}>
      <div style={[ Styles.description, Styles[type].description ]}>{ description }</div>
    </div>
  </div>
);


Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  icon: null,
  description: '',
  width: 'auto',
  type: 'default'
}

export default Radium(Card);
