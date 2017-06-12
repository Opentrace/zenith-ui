import Radium from 'radium';
import Styles from './Dialog.Styles';

const DialogHeader = ({ title, closePortal }) => (
  <div style={[ Styles.header ]}>
    {
      title && 
      <div style={[ Styles.title ]}>
        <h3>{ title }</h3>
      </div>
    }
    <span>
      <button style={[ Styles.closeButton ]} onClick={ closePortal }>&times;</button>
    </span>
  </div>
);

export default Radium(DialogHeader);
