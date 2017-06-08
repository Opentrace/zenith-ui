import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Styles from './TitleBar.Styles';

class TitleBar extends React.Component {
  render() {
    const { title, subtitle, titleHeadingLevel, subtitleHeadingLevel } = this.props;
    const TitleHeading = `h${ titleHeadingLevel }`;
    const SubtitleHeading = `h${ subtitleHeadingLevel }`;
    return (
      <div style={[ Styles.base ]}>
        {
          title &&
          <TitleHeading style={[ Styles.title ]}>
            { title }
          </TitleHeading>
        }
        {
          subtitle &&
          <SubtitleHeading style={[ Styles.subtitle ]}>
            { subtitle }
          </SubtitleHeading>
        }
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
