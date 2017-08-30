import React from 'react';
import Webcam from 'react-webcam';
import CircularProgress from 'material-ui/CircularProgress';

import { CountDown } from './countDown/countDown.component';

export class WebcamCapture extends React.Component {
  state = {
    isWebcamReady: false,
    imageSrc: null,
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  handleUserMedia = () => {
    this.setState({ isWebcamReady: true });
  };

  capture = () => this.setState({ imageSrc: this.webcam.getScreenshot() });

  width = window.innerWidth - 20;
  height = this.width * 0.75;


  get isCountDownVisible() {
    return this.state.isWebcamReady && !this.state.imageSrc;
  }

  render() {
    return (
      <div className="webcam-container">
        {!this.state.imageSrc ?
          <Webcam
            audio={false}
            ref={(node) => { this.webcam = node; }}
            onUserMedia={this.handleUserMedia}
            width={this.width}
            height={this.height}
          /> :
          null
        }

        {this.isCountDownVisible ? <CountDown onFinished={this.capture} /> : null}

        {this.state.imageSrc ?
          <div className="progress">
            <CircularProgress size={100} thickness={5} />
          </div> :
          null
        }

        {this.state.imageSrc ? <img src={this.state.imageSrc} /> : null}
      </div>
    );
  }
}
