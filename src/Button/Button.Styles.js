import { palette, white } from '../styles/colors';
import typography from '../styles/typography';
import spacing from '../styles/spacing';

const Styles = {
  base: {
    ...typography,
    backgroundColor: palette.primaryColor,
    borderColor: 'transparent',
    borderRadius: typography.borderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    color: white,
    cursor: 'pointer',
    paddingTop: spacing.desktopGutterMini,
    paddingRight: spacing.desktopGutterMini,
    paddingBottom: spacing.desktopGutterMini,
    overflow: 'visible',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    WebkitAppearance: 'button',
    ':hover': {
      backgroundColor: white,
      color: palette.primaryColor,
      borderColor: palette.primaryColor,
    },
    '::-moz-focus-inner': {
      borderStyle: 'none',
      padding: 0
    }
  },
  inverse: {
    backgroundColor: white,
    color: palette.primaryColor,
    borderColor: palette.primaryColor,
    ':hover': {
      backgroundColor: palette.primaryColor,
      color: white,
      borderColor: white,
    }
  },
};

export default Styles;
