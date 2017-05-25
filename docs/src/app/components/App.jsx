import React from 'react';
import DocumentTitle from 'react-document-title';
import Grid, { Row, Column } from 'zenith-ui/Grid';
import Button from 'zenith-ui/Button'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DocumentTitle title='Zenith UI Documentation' />
        <Grid>
          <Row>
            <Column>
              <Button>Primary</Button>
              <Button type="warning">Warning</Button>
            </Column>
            
            <Button type="info">Info</Button>
            <Button type="danger">Danger</Button>
          </Row>
        </Grid>
      </div>
    );
  }
}
