import React, { Component } from 'react';
import Radium from 'radium';
import { Grid, Cell } from '../Grid';
import Styles from './Menu.Styles';

console.log(Styles);

const Menu = ({ items }) => {
  return (
      <Grid>
        {
          items.map((item, index) => (
            <Cell key={ index }>
              { React.cloneElement(item, { style: [ Styles.item ] }) }
            </Cell>
          ))
        }
      </Grid>
  )
}

export default Radium(Menu);