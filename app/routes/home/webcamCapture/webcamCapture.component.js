import React from 'react';
import Webcam from 'react-webcam';

import { CountDown } from './countDown/countDown.component';

export class WebcamCapture extends React.Component {
  state = {
    isWebcamReady: false,
    isCountDownFinished: false,
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  handleUserMedia = () => {
    this.setState({ isWebcamReady: true });
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ isCountDownFinished: true });
    console.log(imageSrc);
  };

  width = window.innerWidth - 20;
  height = this.width * 0.75;

  render() {
    return (
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={(node) => { this.webcam = node; }}
          onUserMedia={this.handleUserMedia}
          width={this.width}
          height={this.height}
        />

        {this.state.isWebcamReady && !this.state.isCountDownFinished ?
          <CountDown onFinished={this.capture} /> :
          null}
      </div>
    );
  }
}
