import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button></button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};
