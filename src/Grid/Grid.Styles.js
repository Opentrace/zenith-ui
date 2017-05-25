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
    marginRight: spacing.desktopGutterMini,
    marginLeft: spacing.desktopGutterMini,
  },
  column: {
    base: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      paddingRight: spacing.desktopGutterMini,
      paddingLeft: spacing.desktopGutterMini,
    },
  }
};

export default Styles;
