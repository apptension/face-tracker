import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { WebcamCapture } from './webcamCapture/webcamCapture.component';

export class Home extends Component {
  static propTypes = {
    recognize: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="home">
        <WebcamCapture onCapture={this.props.recognize} />
      </div>
    );
  }
}
