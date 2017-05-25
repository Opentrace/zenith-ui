import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Grid.Styles';

class Row extends React.Component {
  render() {
    const { className, tagName, children } = this.props;
    const RowTag = tagName;
    return (
      <RowTag className={ className } style={[ Styles.row ]}>
        { children }
      </RowTag>
    );
  }
}

Row.propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

Row.defaultProps = {
  tagName: 'div',
};

export default Radium(Row);
