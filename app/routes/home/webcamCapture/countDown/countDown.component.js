import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCountDown from 'react-cntdwn';


export class CountDown extends Component {
  static propTypes = {
    onFinished: PropTypes.func.isRequired,
  };

  get targetDate() {
    const now = new Date();
    return new Date(now.setSeconds(now.getSeconds() + 6));
  }

  render() {
    return (
      <div className="count-down">
        <div className="count-down__text">
          <ReactCountDown
            targetDate={this.targetDate}
            interval={1000}
            onFinished={this.props.onFinished}
            format={{ second: 'ss' }}
          />
        </div>
      </div>
    );
  }
}
