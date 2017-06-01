import spacing from '../styles/spacing';
import breakpoints from '../styles/breakpoints';

let spans = {};
for (let i = 1; i <= 12; i++) {
  spans[i] = {
    flexBasis: `${(i / 12) * 100}%`,
    maxWidth: `${(i / 12) * 100}%`,
  };
}

const Styles = {
  grid: {
    base: {
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingRight: spacing.large,
      paddingLeft: spacing.large,
    }
  },
  row: {
    base: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginRight: -spacing.tiny,
      marginLeft: -spacing.tiny,
      paddingTop: spacing.tiny,
      paddingBottom: spacing.tiny,
      [`@media only screen and (min-width: ${ breakpoints.extraSmall }em)`]: {
        color: 'red'
      }
    },
    reverse: {
      flexDirection: 'row-reverse',
    }
  },
  column: {
    base: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: '100%',
      paddingRight: spacing.tiny,
      paddingLeft: spacing.tiny,
    },
    reverse: {
      flexDirection: 'column-reverse',
    },
    span: spans
  }
};

export default Styles;
