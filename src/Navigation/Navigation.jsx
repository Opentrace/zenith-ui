import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from '../Grid';
import Button from '../Button';
import Styles from './Navigation.Styles';
import screenSizes from '../styles/breakpoints';

const breakpoints = {
  small: `@media only screen and (max-width: ${ screenSizes.extraSmall }em)`,
  medium: `@media only screen and (min-width: ${ screenSizes.extraSmall }em) and (max-width: ${ screenSizes.small }em)`,
  large: `@media only screen and (min-width: ${ screenSizes.small + 1 }em) and (${ screenSizes.medium }em)`,
  xlarge: `@media only screen and (min-width: ${ screenSizes.large }em)`
}

const Navigation = ({ children, direction, parent }) => (
  <nav style={[ Styles.base ]}>
    <div style={[ Styles.inner ]}>
        <Grid
        breakpoints={ breakpoints }
        smallCellWidth={ direction === 'horizontal' ? `1/${ children.length }` : 1 }
        cellAlign="center">
        { children.map((child, index) => {
          return (
            <Cell key={ index }>
              {
                React.cloneElement(child, {
                  style: [ Styles.item.base, Styles.item[parent] ]
                })
              }
            </Cell>
          );
        })}
      </Grid>
    </div>
    <Button style={[ Styles.button ]}>&times;</Button>
  </nav>
);

Navigation.defaultProps = {
  direction: 'vertical',
  parent: 'none'
};

export default Radium(Navigation);
