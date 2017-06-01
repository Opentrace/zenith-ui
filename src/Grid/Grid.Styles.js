import spacing from '../styles/spacing';

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
      paddingRight: spacing.tiny,
      paddingLeft: spacing.tiny,
    },
  }
};

export default Styles;
