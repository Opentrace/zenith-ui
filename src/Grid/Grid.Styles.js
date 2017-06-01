import spacing from '../styles/spacing';

let spans = {};
for (let i = 1; i <= 12; i++) {
  console.log(i)
  spans[i] = {
    flexBasis: `${(i / 12) * 100}%`,
    maxWidth: `${(i / 12) * 100}%`,
  };
}

const Styles = {
  grid: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginRight: spacing.tiny,
    marginLeft: spacing.tiny,
    paddingTop: spacing.tiny,
    paddingBottom: spacing.tiny,
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
    span: spans
  }
};

export default Styles;
