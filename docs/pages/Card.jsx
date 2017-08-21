/* eslint-disable */
import React from 'react';
import { createRoute } from 'react-roadway';

import { Card } from 'zenith-ui';

const CardPage = () => (
  <section>
    <header>
      <h2>Card</h2>
    </header>
    <main>
      <Card>
        This is a card.
      </Card>
    </main>
  </section>
);

export default createRoute(CardPage);
