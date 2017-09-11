/* eslint-disable */
import React from 'react';
import { createRoute } from 'react-roadway';

import { Dialog } from 'zenith-ui';

const OpenButton = <button>Open Dialog</button>;

const DialogPage = () => (
  <section>
    <header>
      <h2>Dialog</h2>
    </header>
    <main>
      <Dialog openByClickOn={ OpenButton }>
        This is a Dialog.
      </Dialog>
    </main>
  </section>
);

export default createRoute(DialogPage);
