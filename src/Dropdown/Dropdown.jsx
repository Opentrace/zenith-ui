import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { boxShadow, fontFamily, palette } from '../globals';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <div { ...props }>
        {

          React.Children.map(children, (child) => {
            const childProps = {
              ...child.props,
            };
            if (child.type.displayName === 'DropdownTrigger') {
              childProps.onClick = this.toggleDropdown;
            } else {
              childProps.open = this.state.open;
            }

            return React.cloneElement(child, childProps);
          })
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

Dropdown.defaultProps = {
  children: null,
  open: false,
};

export default Dropdown;
