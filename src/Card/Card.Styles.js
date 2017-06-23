import { palette, white, baseBlue } from '../styles/colors';
import { darken, fade } from '../utils/colorManipulator';
import globals from '../styles/globals';
import shadows from '../styles/shadows';
import typography from '../styles/typography';
import spacing, { spacingKeys } from '../styles/spacing';
import fontSizes, { fontSizeKeys } from '../styles/font-sizes';

const Styles = {
  base: {
    border: `1px solid`,
    borderRadius: globals.borderRadius,
    overflow: 'hidden',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    // textAlign: 'center',
    fontSize: fontSizes.small,
    // fontWeight: 600,
    borderBottom: `1px solid`,
    padding: `${ spacing.micro }px ${ spacing.tiny }px`
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: spacing.tiny
  },
  icon: {},
  description: {
    fontSize: fontSizes.small
  },

  /* Types */
  default: {
    base: {
      borderColor: palette.primaryColor
    },
    header: {
      // color: palette.primaryColor,
      backgroundColor: fade(palette.primaryColor, 0.1),
      borderColor: palette.primaryColor
    },
    description: {
      color: palette.primaryTextColor
    }
  },
  warning: {
    base: {
      borderColor: palette.accentColor2
    },
    header: {
      color: darken(palette.accentColor2, 0.25),
      backgroundColor: fade(palette.accentColor2, 0.3),
      borderColor: palette.accentColor2
    },
    description: {
      color: palette.accentColor2
    }
  },
  info: {
    base: {
      borderColor: baseBlue
    },
    header: {
      color: darken(baseBlue, 0.25),
      backgroundColor: fade(baseBlue, 0.3),
      borderColor: baseBlue
    },
    description: {
      color: baseBlue
    }
  }
};

export default Styles;
