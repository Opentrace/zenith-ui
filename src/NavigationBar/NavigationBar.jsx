import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Styles from './NavigationBar.Styles';
import { Grid, Cell } from '../Grid';
import screenSizes from '../styles/breakpoints';
import Menu from './Menu';

const breakpoints = {
  small: `@media only screen and (max-width: ${ screenSizes.extraSmall }em)`,
  medium: `@media only screen and (min-width: ${ screenSizes.extraSmall }em) and (max-width: ${ screenSizes.small }em)`,
  large: `@media only screen and (min-width: ${ screenSizes.small + 1 }em) and (${ screenSizes.medium }em)`,
  xlarge: `@media only screen and (min-width: ${ screenSizes.large }em)`
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpanded: false
    }

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded() {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  render() {
    const { title, subtitle, titleHeadingLevel, subtitleHeadingLevel, titleLink, children } = this.props;
    const styles = [
      Styles.base,
      ...this.props.style
    ];

    const menuBaseStyles = [
      Styles.menu.base,
    ];

    const menuButtonStyles = [
      Styles.menu.button,
    ];

    const menuButtonPartStyles = [
      Styles.menu.iconPart,
    ];

    if (this.state.menuExpanded) {
      menuBaseStyles.push(Styles.menu.base.expanded);
      menuButtonStyles.push(Styles.menu.button.expanded);
      menuButtonPartStyles.push(Styles.menu.iconPart.expanded);
    }

    const TitleHeading = `h${ titleHeadingLevel }`;
    return (
      <div style={ styles }>
        <Grid mediumVerticalAlign="center" breakpoints={ breakpoints }>
          {
          title &&
            <Cell smallWidth="1">
              <TitleHeading style={[ Styles.title ]}>
                {
                  titleLink ?
                  <a style={[ Styles.title.link ] } href={ titleLink }>{ title }</a> :
                  title
                }
              </TitleHeading>
            </Cell>
          }
          { children && 
            <Cell
              align="right"
              smallWidth="1"
              smallVertialAlign="top"
              width="1/3">
              <Menu items={ children } />
            </Cell>
          }
        </Grid>
        <div onClick={ this.toggleExpanded } style={ menuButtonStyles }>
          <div style={ menuButtonPartStyles } />
          <div style={ menuButtonPartStyles } />
          <div style={ menuButtonPartStyles } />
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleHeadingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subtitleHeadingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

NavigationBar.defaultProps = {
  title: 'Title',
  subtitle: null,
  titleHeadingLevel: 1,
  subtitleHeadingLevel: 2,
  style: {}
}

export default Radium(NavigationBar);
