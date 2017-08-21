import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from '../globals';

const CardTitle = ({ title, subtitle, ...props }) => (
  <header { ...props }>
    <h3>{ title }</h3>
    <h4>{ subtitle }</h4>
  </header>
);

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

CardTitle.defaultProps = {
  title: null,
  subtitle: null,
};

export default styled(CardTitle)`
  padding: 12px;
  h3, h4 {
    font-weight: normal;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 6px;
  }

  h4 {
    font-size: 14px;
    color: ${ palette.gray[8] };
  }
`;
