import * as colors from '../styles/colors';
import spacing from '../styles/spacing';

const Styles = {
  base: {
    borderColor: 'transparent',
    borderRadius: '2px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: colors.white,
    cursor: 'pointer',
    paddingTop: spacing.desktopGutterMini,
    paddingRight: spacing.desktopGutterMini,
    paddingBottom: spacing.desktopGutterMini,
    paddingLeft: spacing.desktopGutterMini,
    marginLeft: spacing.desktopGutterMini,
    marginRight: spacing.desktopGutterMini,
    overflow: 'visible',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    WebkitAppearance: 'button',
    ':hover': {
      backgroundColor: colors.white
    },
    '::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0
    },
    ':-moz-focusring': {
      outline: '1px dotted ButtonText'
    }
  },
  primary: {
    backgroundColor: colors.grey,
    ':hover': {
      color: colors.grey,
      borderColor: colors.grey,
    }
  },
  warning: {
    backgroundColor: colors.yellow,
    ':hover': {
      color: colors.yellow,
      borderColor: colors.yellow,
    }
  },
  info: {
    backgroundColor: colors.blue,
    ':hover': {
      color: colors.blue,
      borderColor: colors.blue,
    }
  },
  danger: {
    backgroundColor: colors.red,
    ':hover': {
      color: colors.red,
      borderColor: colors.red,
    }
  }
};

export default Styles;
