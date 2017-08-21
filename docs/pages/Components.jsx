import React from 'react';
import { createRoute } from 'react-roadway';

const Home = () => (
  <section>
    <header>
      <h2>Components</h2>
    </header>
    <main>
      Look at them!
    </main>
  </section>
);

export default createRoute(Home);
