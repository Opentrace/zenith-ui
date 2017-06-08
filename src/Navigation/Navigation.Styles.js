import { palette, white } from '../styles/colors';
import spacing from '../styles/spacing';
import breakpoints from '../styles/breakpoints';
const Styles = {
  base: {
    width: '100%',
    [`@media screen and (max-width: ${ breakpoints.extraSmall }em)`]: {
      width: 'inherit'
    }
  },
  inner: {
    width: '100%',
    [`@media screen and (max-width: ${ breakpoints.extraSmall }em)`]: {
      display: 'none'
    }
  },
  item: {
    base: {},
    titleBar: {
      color: white
    }
  },
  button: {
    [`@media screen and (min-width: ${ breakpoints.extraSmall }em)`]: {
      display: 'none'
    }
  }
};

export default Styles;
