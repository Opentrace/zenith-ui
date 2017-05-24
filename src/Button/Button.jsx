import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import * as colors from '../styles/colors';
import spacing from '../styles/spacing';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  getStyles() {
    return {
      base: {
        borderColor: 'transparent',
        borderRadius: '2px',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: colors.white,
        cursor: 'pointer',
        fontSize: '16px',
        padding: spacing.desktopGutterMini,
        margin: '0 6px',
        transition: 'all 0.3s ease',
        ':hover': {
          backgroundColor: colors.white
        }
      },
      primary: {
        backgroundColor: colors.grey,
        ':hover': {
          color: colors.grey,
          borderColor: colors.grey,
        }
      },
      warning: {
        backgroundColor: colors.yellow,
        ':hover': {
          color: colors.yellow,
          borderColor: colors.yellow,
        }
      },
      info: {
        backgroundColor: colors.blue,
        ':hover': {
          color: colors.blue,
          borderColor: colors.blue,
        }
      },
      danger: {
        backgroundColor: colors.red,
        ':hover': {
          color: colors.red,
          borderColor: colors.red,
        }
      }
    }
  }
  render() {
    const { children, type } = this.props;
    const styles = this.getStyles();
    return (
      <button
        onClick={ this.props.onClick }
        style={[ styles.base, styles[type] ]}>
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
