import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { boxShadow, fontFamily, palette } from '../globals';

const AppBar = ({ title, subtitle, children, ...props }) => (
  <header foo="bar" { ...props }>
    { title && <h1>{ title }</h1> }
    { subtitle && <h2>{ subtitle }</h2> }
    { children }
  </header>
);

AppBar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  location: PropTypes.string,
};

AppBar.defaultProps = {
  children: null,
  title: null,
  subtitle: null,
  location: 'top',
};

export default styled(AppBar)`
  ${ boxShadow }
  ${ fontFamily }
  display: flex;
  align-items: center;
  position: absolute;
  height: ${ props => (props.height ? props.height : '60px') };
  top: ${ props => (props.location && props.location === 'bottom' ? 'inherit' : 0) };
  right: ${ props => (props.location && props.location === 'left' ? 'inherit' : 0) };
  bottom: ${ props => (!props.location || (props.location && props.location === 'top') ? 'inherit' : 0) };
  left: ${ props => (props.location && props.location === 'right' ? 'inherit' : 0) };
  background-color: ${ props => (props.backgroundColor ? props.backgroundColor : palette.base) };
  color: ${ props => (props.textColor ? props.textColor : '#fff') };

  h1, h2 {
    flex: 1;
    font-weight: normal;
  }

  h1 {
    padding: 14px;
  }

  h2 {
    padding-bottom: 14px;
  }
  
  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        display: block;
        flex: 1;
        padding: 0 12px;

        a {
          text-decoration: none;
          color: #fff;

          &:hover {
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
  }

  ${ props => `
    ${ console.log(props) }
  ` }
  
`;
