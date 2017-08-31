import React from 'react';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import CircularProgress from 'material-ui/CircularProgress';

import { CountDown } from './countDown/countDown.component';

export class WebcamCapture extends React.Component {
  static propTypes = {
    onCapture: PropTypes.func.isRequired,
  };

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

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageSrc });
    this.props.onCapture(imageSrc);
  };

  width = (window.innerWidth < 640 ? window.innerWidth : 640) - 20;
  height = this.width * 0.75;


  get isCountDownVisible() {
    return this.state.isWebcamReady && !this.state.imageSrc;
  }

  render() {
    return (
      <div className="webcam-container" style={{ width: this.width, height: this.height }}>
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
