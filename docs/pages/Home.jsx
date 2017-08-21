import React from 'react';
import { createRoute } from 'react-roadway';

const Home = () => (
  <section>
    <header>
      <h2>Home</h2>
    </header>
    <main>
      This is Zenith UI.
    </main>
  </section>
);

export default createRoute(Home);
