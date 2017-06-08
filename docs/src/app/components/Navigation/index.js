import React from 'react';
import Radium from 'radium' ;
import { Link } from 'react-router-dom';
import Styles from './Navigation.Styles';

const Navigation = (props) => (
  <ul style={[ Styles.list ]}>
    <li style={[ Styles.listItem ]}>
      <Link style={[ Styles.link ]} to="/">
        Home
      </Link>
    </li>
    <li style={[ Styles.listItem ]}>
      <Link style={[ Styles.link ]} to="/components/button">Button</Link>
    </li>
  </ul>
);

export default Radium(Navigation);
