import { palette, white } from '../styles/colors';
import { fade } from '../utils/colorManipulator';
import spacing from '../styles/spacing';
import fontSizes from '../styles/font-sizes';

const Styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap',
    backgroundColor: palette.primaryColor,
    color: white,
    padding: spacing.tiny,

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
  }
};

export default Styles;
