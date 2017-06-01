import React from 'react';
import { StyleRoot } from 'radium';
import DocumentTitle from 'react-document-title';
import Grid, { Row, Column } from 'zenith-ui/Grid';
import Button from 'zenith-ui/Button'
import Dialog from 'zenith-ui/Dialog'
import Reset from 'zenith-ui/Reset'

export default class App extends React.Component {
  render() {
    const modalButton = <Button>Open Modal</Button>
    return (
      <StyleRoot>
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
            <Row>
              <Dialog title="Dialog" openByClickOn={ modalButton }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam accusantium facere suscipit, alias accusamus corrupti consequatur at porro, voluptates commodi sed omnis voluptatem, ex officiis illum, architecto fugiat id?
              </Dialog>
            </Row>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}
