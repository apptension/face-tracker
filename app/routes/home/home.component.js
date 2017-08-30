import React, { Component } from 'react';

import { WebcamCapture } from './webcamCapture/webcamCapture.component';

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home">
        <WebcamCapture />
      </div>
    );
  }
}
