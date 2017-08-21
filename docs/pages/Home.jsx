/* eslint-disable */
import React from 'react';
import { createRoute } from 'react-roadway';
import { Flex, Box } from 're-flex';
import { Card, CardContent, CardTitle } from 'zenith-ui';

const Home = () => (
  <section>
    <header>
      <h2>Home</h2>
    </header>
    <main>
      This is Zenith UI.

      Card:

      <Flex>
        <Box width={ [1, [420, 1/3]] }>
          <Card>
            <CardTitle title="Title" subtitle="Subtitle" />
            <CardContent>This is a card.</CardContent>
          </Card>
        </Box>
      </Flex>
      
    </main>
  </section>
);

export default createRoute(Home);
