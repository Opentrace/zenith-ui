import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from 'react-portal';
import { fontFamily, palette } from '../globals';

import DialogInner from './DialogInner';

const Dialog = ({ className, openByClickOn, children }) => (
  <Portal
    closeOnEsc
    closeOnOutsideClick
    openByClickOn={ openByClickOn }
  >
    <div className={ className }>
      <DialogInner>
        { children }
      </DialogInner>
    </div>
  </Portal>
);

Dialog.propTypes = {
  className: PropTypes.string,
  openByClickOn: PropTypes.node.isRequired,
  children: PropTypes.node,
};

Dialog.defaultProps = {
  className: null,
  children: null,
};

const StyledDialog = styled(Dialog)`
  ${ fontFamily }
  box-sizing: border-box;
  color: ${ palette.black };
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;  
  right: 0;  
  bottom: 0;  
  left: 0;
  overflowY: auto;
  overflowX: hidden;
  z-index: 1000;
  visibility: visible;
  background-color: ${ palette.black };
`;

export default StyledDialog;
