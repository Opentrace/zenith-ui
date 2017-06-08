import React from 'react';
import Radium from 'radium';
import Styles from './Navigation.Styles';

const Navigation = ({ children, direction, parent }) => (
  <nav style={[ Styles.base ]}>
    <ul style={[ Styles.list, Styles.list[direction], Styles[parent] ]}>
      {
        children.map((child, i) => {
          return (
            <li key={ i } style={[ Styles.listItem, Styles.listItem[direction] ]}>
              {
                React.cloneElement(child, {
                  style: [ Styles.item, Styles.item[direction] ]
                })
              }
            </li>
          );
        })
      }
    </ul>
  </nav>
);

Navigation.defaultProps = {
  direction: 'vertical',
  parent: 'none'
};

export default Radium(Navigation);
