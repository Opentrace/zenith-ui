import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';
import { createRoute, Link } from 'react-roadway';

registerLanguage('javascript', js);

const Components = () => (
  <section>
    <header>
      <h2>Components</h2>
    </header>
    <main>
      All components should be imported using destructuring. For example:
      <SyntaxHighlighter language="javascript" style={ atomOneDark }>
        { `import { Card } from 'zenith-ui';
        ` }
      </SyntaxHighlighter>

      <ul>
        <li>
          <Link href="/components/card">
            Card
          </Link>
        </li>
      </ul>
    </main>
  </section>
);

export default createRoute(Components);
