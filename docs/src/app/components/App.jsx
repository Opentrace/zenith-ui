import React from 'react';
import DocumentTitle from 'react-document-title';
import Button from 'zenith-ui/Button'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <DocumentTitle title='Zenith UI Documentation' />
        Documentation for Zenith UI
        <Button>Primary</Button>
        <Button type="warning">Warning</Button>
        <Button type="info">Info</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}
