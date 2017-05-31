import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Styles from './Grid.Styles';

class Grid extends React.Component {
  render() {
    const { className, children, tagName } = this.props;
    const GridTag = tagName;
    return (
      <GridTag className={ className } style={[Styles.grid]}>
        { children }
      </GridTag>
    );
  }
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
};

Grid.defaultProps = {
  tagName: 'div'
};

export default Radium(Grid);
