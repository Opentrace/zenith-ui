import React from 'react';
import PropTypes from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  render() {
    const { children } = this.props;
    return (
      <button
        className={ this.state.class }
        onMouseEnter={ this._onMouseEnter }
        onMouseLeave={ this._onMouseLeave }>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};
