import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Button.Styles';

class Button extends React.Component {
  render() {
    const { children, type, onClick } = this.props;
    return (
      <button
        onClick={ this.props.onClick }
        style={[ Styles.base, Styles[type] ]}>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'warning', 'danger', 'info']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  onClick: () => {},
};

export default Radium(Button);
