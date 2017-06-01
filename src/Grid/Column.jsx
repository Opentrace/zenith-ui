import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Grid.Styles';

class Column extends React.Component {
  render() {
    const { className, tagName, children, span } = this.props;
    const ColumnTag = tagName;
    return (
      <ColumnTag className={ className } style={[ Styles.column.base, Styles.column.span[span] ]}>
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
  span: 'auto'
};

export default Radium(Column);
