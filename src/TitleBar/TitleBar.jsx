import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Styles from './TitleBar.Styles';
import { Grid, Cell } from '../Grid';

class TitleBar extends React.Component {
  render() {
    const { title, subtitle, titleHeadingLevel, subtitleHeadingLevel, titleLink, children } = this.props;
    const TitleHeading = `h${ titleHeadingLevel }`;
    const SubtitleHeading = `h${ subtitleHeadingLevel }`;
    return (
      <div style={[ Styles.base ]}>
        <Grid cellVerticalAlign="center">
          {
          title &&
            <Cell>
              <TitleHeading style={[ Styles.title ]}>
                { titleLink ? <a style={[ Styles.title.link ] } href={ titleLink }>{ title }</a> : { title }}
              </TitleHeading>
            </Cell>
          }
          <Cell align="right">
            { React.Children.map(children, (child) => React.cloneElement(child, { parent: 'titleBar' }))}
          </Cell>
        </Grid>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleHeadingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subtitleHeadingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

TitleBar.defaultProps = {
  title: 'Title',
  subtitle: null,
  titleHeadingLevel: 1,
  subtitleHeadingLevel: 2,
}

export default Radium(TitleBar);
