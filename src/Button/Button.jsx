import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Button.Styles';

class Button extends React.Component {
  render() {
    const { children, inverse, raised, onClick, size } = this.props;
    const styles = [
      Styles.base,
      Styles.sizing[size],
      ...this.props.style,
    ];
    if (inverse) {
      styles.push(Styles.inverse);
    }

    if (raised) {
      styles.push(Styles.raised);
    }

    return (
      <button
        onClick={ onClick }
        style={ styles }>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  inverse: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  inverse: false,
  size: 'medium',
  raised: false,
  onClick: () => {},
};

export default Radium(Button);
