import { palette, white } from '../styles/colors';
import fontSizes from '../styles/font-sizes';

const arrow = {
  position: 'absolute',
  width: 0,
  height: 0,
  borderColor: 'transparent',
  borderStyle: 'solid',
}

const Styles = {
  base: {
    position: 'absolute',
    zIndex: 1070,
    display: 'block',
    fontSize: fontSizes.small,

    '.tooltip-inner': {
      maxWidth: 200,
      padding: '3px 8px',
      color: white,
      textAlign: 'center',
      backgroundColor: palette.primaryColor,
      borderRadius: 4,
    },
  },

  top: {
    marginTop: -3,
    padding: '5px 0',
    '.tooltip-arrow': {
      ...arrow,
      bottom: 0,
      left: '50%',
      marginLeft: -5,
      borderWidth: '5px 5px 0',
      borderTopColor: palette.primaryColor,
    }
  },

  right: {
    marginLeft: 3,
    padding: '0 5px',
    '.tooltip-arrow': {
      ...arrow,
      top: '50%',
      left: 0,
      marginTop: -5,
      borderWidth: '5px 5px 5px 0',
      borderRightColor: palette.primaryColor,
    }
  },

  bottom: {
    marginTop: 3,
    padding: '5px 0',
    '.tooltip-arrow': {
      ...arrow,
      top: 0,
      left: '50%',
      marginLeft: -5,
      borderWidth: '0 5px 5px',
      borderBottomColor: palette.primaryColor,
    }
  },

  left: {
    marginTop: -3,
    padding: '0 5px',
    '.tooltip-arrow': {
      ...arrow,
      top: '50%',
      right: 0,
      marginTop: -5,
      borderWidth: '5px 0 5px 5px',
      borderLeftColor: palette.primaryColor,
    }
  }
  

};

export default Styles;
