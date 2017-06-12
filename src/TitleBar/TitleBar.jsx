import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Styles from './TitleBar.Styles';
import { Grid, Cell } from '../Grid';

const TitleBar = (props) => {
  const { title, subtitle, titleHeadingLevel, subtitleHeadingLevel, titleLink, children } = props;
  const styles = [
    Styles.base,
    ...props.style
  ];
  const TitleHeading = `h${ titleHeadingLevel }`;
  return (
    <div style={ styles }>
      <Grid cellVerticalAlign="center">
        {
        title &&
          <Cell>
            <TitleHeading style={[ Styles.title ]}>
              {
                props.titleLink ?
                <a style={[ Styles.title.link ] } href={ props.titleLink }>{ props.title }</a> :
                props.title
              }
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

// class TitleBar extends React.Component {
//   render() {
    
//     const TitleHeading = `h${ titleHeadingLevel }`;
//     const SubtitleHeading = `h${ subtitleHeadingLevel }`;
//     return (
      
//     );
//   }
// }

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
  style: {}
}

export default Radium(TitleBar);
