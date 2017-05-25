import React from 'react';
import DocumentTitle from 'react-document-title';
import Grid, { Row, Column } from 'zenith-ui/Grid';
import Button from 'zenith-ui/Button'
import Reset from 'zenith-ui/Reset'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Reset />
        <DocumentTitle title='Zenith UI Documentation' />
        <Grid>
          <Row>
            <h1>Zenith UI</h1>
          </Row>
          <Row>
            <Column>
              <Button>This is a Button</Button>
            </Column>
            <Column>
              <Button inverse>This is an 'inverse' Button</Button>
            </Column>
          </Row>
        </Grid>
      </div>
    );
  }
}
