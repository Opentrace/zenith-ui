import { palette } from '../styles/colors';
import { baseFontSize } from '../styles/font-sizes';
import spacing from '../styles/spacing';
import typography from '../styles/typography';

const Styles = {
  body: {
    margin: 0,
    ...typography,
    fontFamily: 'Open Sans, sans-serif',
    overflowX: 'hidden'
  },
  html: {
    background: '#fff',
    fontSize: '100%'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 300,
    margin: 0
  },
  h1: { fontSize: Math.round(baseFontSize * 2.25) },
  h2: { fontSize: Math.round(baseFontSize * 1.75) },
  h3: { fontSize: Math.round(baseFontSize * 1.5) },
  h4: { fontSize: Math.round(baseFontSize * 1.25) },
  h5: { fontSize: Math.round(baseFontSize * 1.15) },
  h6: { fontSize: baseFontSize },
  a: {
    color: palette.primaryColor,
    ':hover': {
      color: 'red'
    }
  }
};

export default Styles;
