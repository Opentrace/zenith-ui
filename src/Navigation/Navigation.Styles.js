import { palette, white } from '../styles/colors';
import spacing from '../styles/spacing';

const Styles = {
  base: {},
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    horizontal: {
      display: 'flex',
    }
  },
  listItem: {
    padding: `0 ${ spacing.tiny }px`,
    horizontal: {
      flex: 1
    }
  },
  item: {
    color: white,
  },
  titleBar: {

  }
};

export default Styles;
