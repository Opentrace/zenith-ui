import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownTrigger = ({ children, ...props }) => (
  <a { ...props }>{ children }{ console.log(props) }</a>
);

DropdownTrigger.propTypes = {
  children: PropTypes.node,
};

DropdownTrigger.defaultProps = {
  children: null,
};

const StyledDropdownTrigger = styled(DropdownTrigger)`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

StyledDropdownTrigger.displayName = 'DropdownTrigger';

export default StyledDropdownTrigger;
