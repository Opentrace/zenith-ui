/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import styles from './main.scss';

const Demo = () => (
  <div className={ styles.demo }>
    <header className={ styles.demo__header }>
      <h1>Zenith UI</h1>
    </header>

    <section className={ styles['demo__section'] }>
      <header className={ styles['demo__section-header'] }>
        <h2>Installation</h2>
      </header>
      <code className="prism-code">
        npm install zenith-ui
      </code>
    </section>

    <footer>
      &copy; { (new Date).getFullYear() } <a href="http://opentrace.ca" target="_blank">Opentrace</a>.
    </footer>
  </div>
);

render(<Demo />, document.getElementById('content'));
