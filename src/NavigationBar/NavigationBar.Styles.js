import { palette, white } from '../styles/colors';
import { fade } from '../utils/colorManipulator';
import spacing from '../styles/spacing';
import fontSizes from '../styles/font-sizes';
import breakpoints from '../styles/breakpoints';
console.log(spacing);
const Styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    backgroundColor: palette.primaryColor,
    color: white,
    padding: spacing.tiny,
    position: 'fixed',
    top: 0,
    height: spacing.huge,
    width: '100%',
  },
  title: {
    marginRight: spacing.tiny,
    fontSize: fontSizes.large,
    link: {
      color: white,
      textDecoration: 'none'
    }
  },
  subtitle: {
    fontSize: fontSizes.medium,
    color: fade(white, 0.8)
  },
  menu: {
    base: {
      width: '100%',
      transition: 'right 0.3s',
      [`@media screen and (max-width: ${ breakpoints.extraSmall }em)`]: {
        position: 'absolute',
        top: 0,
        right: '-100%',
        height: '100%',
        width: 'auto',
        backgroundColor: white,
        borderLeft: '1px solid #ddd',
        fontSize: fontSizes.large,
        padding: spacing.small,
      },
      expanded: {
        [`@media screen and (max-width: ${ breakpoints.extraSmall }em)`]: {
          right: 0,
        }
      }
    },
    item: {
      color: white,
      textDecoration: 'none',
      [`@media screen and (max-width: ${ breakpoints.extraSmall }em)`]: {
        color: palette.primaryColor,
      }
    },

    button: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 0,
      cursor: 'pointer',
      zIndex: 3,
      padding: 10,
      transition: 'transform 0.3s',
      [`@media screen and (min-width: ${ breakpoints.extraSmall }em)`]: {
        display: 'none'
      },
      expanded: {
        transform: 'translateY(-50%) rotate(90deg)'
      },
    }, // button

    iconPart: {
      position: 'relative',
      marginTop: spacing.micro / 2,
      marginBottom: spacing.micro / 2,
      userSelect: 'none',
      display: 'block',
      width: spacing.medium,
      height: 3,
      backgroundColor: white,
      transition: 'all 0.4s ease-in-out',
      expanded: {
        backgroundColor: palette.primaryColor
      },
    }, // icon
  },
};

const iconParts = {
  display: 'block',
  width: 25,
  height: 3,
  backgroundColor: white,
  transition: 'all 0.4s ease-in-out',
}

export default Styles;
