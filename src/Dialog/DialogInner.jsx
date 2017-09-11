import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { boxShadow, fontFamily, border, palette } from '../globals';

const DialogInner = ({ children, className }) => (
  <div className={ className }>
    { children }
  </div>
);

DialogInner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};

DialogInner.defaultProps = {
  children: null,
};

const StyledDialogInner = styled(DialogInner)`
  ${ border }
  ${ boxShadow }
  ${ fontFamily }
  box-sizing: border-box;
  color: ${ palette.black };
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  background-color: #fff;
  padding: 6px;
`;

export default StyledDialogInner;
