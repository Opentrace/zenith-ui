import React from 'react';
import Radium from 'radium';
import Portal from 'react-portal';
import Styles from './Dialog.Styles';
import DialogInner from './DialogInner';

class Dialog extends React.Component {
  render() {
    const { title, openByClickOn, children } = this.props;
    return (
      <Portal
        closeOnEsc
        closeOnOutsideClick
        openByClickOn={ openByClickOn }>
        <DialogInner title={ title }>
          { children }
        </DialogInner>
      </Portal>
    );
  }
}

Dialog.defaultProps = {
  openByClickOn: <button>open modal</button>
}

export default Radium(Dialog);
