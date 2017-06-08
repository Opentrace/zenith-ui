import { palette, white } from '../styles/colors';
import spacing from '../styles/spacing';
import fontSizes from '../styles/font-sizes';

const Styles = {
  base: {
    display: 'flex',
    flexFlow: 'row wrap',
    backgroundColor: palette.primaryColor,
    color: white,
    padding: spacing.tiny,

  },
  title: {
    flex: 1,
    fontSize: fontSizes.small

  },
  subtitle: {
    flex: 1
  }
};

export default Styles;
