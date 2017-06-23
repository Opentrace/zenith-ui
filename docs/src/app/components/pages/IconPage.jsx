import React from 'react';
import { Grid, Cell } from 'zenith-ui/Grid';
import Icon from 'zenith-ui/Icon';

export default class IconPage extends React.Component {

  render() {
    return (
      <div>
        <header>
          <h1>Icons</h1>
        </header>

        <Grid>
          <Cell>
            <Icon name="home" />
          </Cell>
        </Grid>

      </div>
    );
  }
}