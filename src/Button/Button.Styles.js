import { palette, white } from '../styles/colors';
import globals from '../styles/globals';
import shadows from '../styles/shadows';
import typography from '../styles/typography';
import spacing, { spacingKeys } from '../styles/spacing';
import fontSizes, { fontSizeKeys } from '../styles/font-sizes';

const sizing = {};
fontSizeKeys.forEach((key) => {
  const spacingIndex = spacingKeys.indexOf(key);
  let paddingTopBottom;
  let paddingRightLeft;
  if (key === 'tiny') {
    paddingTopBottom = spacing.micro / 2;
    paddingRightLeft = spacing.micro;
  } else {
    paddingTopBottom = spacing[spacingKeys[spacingIndex - 2]];
    paddingRightLeft = spacing[spacingKeys[spacingIndex - 1]];
  }
  sizing[key] = {
    fontSize: fontSizes[key],
    lineHeight: 1,
    paddingTop: paddingTopBottom,
    paddingRight: paddingRightLeft,
    paddingBottom: paddingTopBottom,
    paddingLeft: paddingRightLeft,
  };
});

const Styles = {
  base: {
    ...typography,
    backgroundColor: palette.primaryColor,
    borderColor: 'transparent',
    borderRadius: globals.borderRadius,
    borderStyle: 'solid',
    borderWidth: '1px',
    color: white,
    cursor: 'pointer',
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
      padding: 0,
    },
  },
  inverse: {
    backgroundColor: white,
    color: palette.primaryColor,
    borderColor: palette.primaryColor,
    ':hover': {
      backgroundColor: palette.primaryColor,
      color: white,
      borderColor: 'transparent',
    },
  },
  raised: {
    boxShadow: shadows.raised,
  },
  sizing,
};

export default Styles;
