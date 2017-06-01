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
              <Column>
                <h1>Zenith UI</h1>
              </Column>
            </Row>
            <Row>
              <Column>
                <h3>Buttons</h3>
              </Column>
            </Row>
            
            <Row>
              <Column>
                <Button>Normal</Button>
              </Column>
              <Column>
                <Button inverse>Inverse</Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <h4>Button Sizing</h4>
              </Column>
            </Row>

            <Row>
              <Column>
                <Button size="tiny">Tiny</Button>
              </Column>
              <Column>
                <Button size="small">Small</Button>
              </Column>
              <Column>
                <Button size="medium">Medium (default)</Button>
              </Column>
              <Column>
                <Button size="large">Large</Button>
              </Column>
              <Column>
                <Button size="huge">Huge</Button>
              </Column>
              <Column>
                <Button size="jumbo">Jumbo</Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <h4>Raised Buttons</h4>
              </Column>
            </Row>
            
            <Row>
              <Column>
                <Button raised>Normal</Button>
              </Column>
              <Column>
                <Button inverse raised>Inverse</Button>
              </Column>
            </Row>

            <Row>
              <Column>
                <Dialog title="Dialog" openByClickOn={ modalButton }>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam accusantium facere suscipit, alias accusamus corrupti consequatur at porro, voluptates commodi sed omnis voluptatem, ex officiis illum, architecto fugiat id?
                </Dialog>
              </Column>
            </Row>
          </Grid>
        </div>
      </StyleRoot>
    );
  }
}
