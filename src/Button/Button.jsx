import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Button.Styles';

console.log(Styles);

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, type } = this.props;
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
