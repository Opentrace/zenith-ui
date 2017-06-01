import React from 'react';
import Radium from 'radium';
import DialogHeader from './DialogHeader';
import Styles from './Dialog.Styles';
console.log(Styles)

class DialogInner extends React.Component {
  render() {
    const { children, closePortal, active, title } = this.props;
    return (
      <div style={[ Styles.base ]}>
        <div style={[ Styles.inner ]}>
          <DialogHeader title={ title } closePortal={ closePortal } />
          { children }
        </div>
      </div>
    );
  }
}


export default Radium(DialogInner);
