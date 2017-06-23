import React from 'react';
import Styles from './Page.Styles.js';
import Tooltip from 'zenith-ui/Tooltip';
import { Grid, Cell } from 'zenith-ui/Grid';
import { palette } from 'zenith-ui/styles/colors';
import { spacing, Palette } from 'zenith-ui/styles';

class ColorsPage extends React.Component {
  constructor(props) {
    super(props);

    this.palette = new Palette
  }
  render() {
    const colors = this.palette.colorNames();
    return (
      <div style={ Styles.base }>
        <header style={ Styles.header }>
          <h1>Color Palette</h1>
        </header>
        <Grid
          smallCellWidth="1"
          mediumCellWidth="1/2"
          >
          {
            colors.map(x => {
              const color = this.palette.getColor(x);
              const style = {
                color: '#fff',
                marginBottom: spacing.tiny,
                backgroundColor: color.rgb
              }
              return (
                <Cell key={ color.name } style={ style }>
                  <Tooltip text={ color.name } position="right">
                    <div style={{ padding: spacing.tiny, width: '100%' }}>
                      { color.name }
                    </div>
                  </Tooltip>
                </Cell>
              )
            })
          }
        </Grid>
      </div>
    );
  }
}

export default ColorsPage;