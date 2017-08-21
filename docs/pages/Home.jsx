/* eslint-disable */
import React from 'react';
import { createRoute } from 'react-roadway';

import { Card, CardContent, CardTitle } from 'zenith-ui';

const Home = () => (
  <section>
    <header>
      <h2>Home</h2>
    </header>
    <main>
      This is Zenith UI.

      Card:

      <Card>
        <CardTitle title="Title" subtitle="Subtitle" />
        <CardContent>This is a card.</CardContent>
      </Card>
    </main>
  </section>
);

export default createRoute(Home);
