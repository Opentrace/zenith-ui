import { palette, baseGray, white } from '../styles/colors';
import globals from '../styles/globals';
import shadows from '../styles/shadows';
import typography from '../styles/typography';
import spacing from '../styles/spacing';
import { fade, darken } from '../utils/colorManipulator';
import { fadeIn } from '../styles/animations';

const Styles = {
  base: {
    ...typography,
    willChange: 'visibility, opacity',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: 1000,
    visibility: 'visible',
    opacity: 0,
    backgroundColor: fade(darken(baseGray, 0.5), 0.8),
    animation: 'x 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
    animationName: fadeIn,
  },
  inner: {
    borderRadius: globals.borderRadius,
    backgroundColor: white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    padding: spacing.tiny,
    boxShadow: shadows.default,
  },
  header: {
    fontSize: 18,
  },
  title: {
    alignItems: 'center',
    display: 'block',
    display: 'flex',
    justifyContent: 'stretch',
    lineHeight: 'normal',
    paddingBottom: 16,
    perspectiveOrigin: '165px 56px',
    transformOrigin: '165px 56px',
    boxSizing: 'border-box',
  },
  closeButton: {
    color: palette.primaryTextColor,
    position: 'fixed',
    top: spacing.small,
    right: spacing.small,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: white,
    fontSize: 24,
    lineHeight: 1,
  },
};

export default Styles;
