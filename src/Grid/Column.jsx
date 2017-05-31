import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Grid.Styles';

class Column extends React.Component {
  render() {
    const { className, tagName, children } = this.props;
    const ColumnTag = tagName;
    return (
      <ColumnTag className={ className } style={[ Styles.column.base,  ]}>
        { children }
      </ColumnTag>
    );
  }
}

Column.propTypes = {
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

Column.defaultProps = {
  tagName: 'div',
};

export default Radium(Column);
