import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Button.Styles';

class Button extends React.Component {
  render() {
    const { children, inverse, onClick } = this.props;
    let styles = [Styles.base];
    if (inverse) {
      styles.push(Styles.inverse);
    }

    return (
      <button
        onClick={ this.props.onClick }
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
  onClick: () => {},
};

export default Radium(Button);
