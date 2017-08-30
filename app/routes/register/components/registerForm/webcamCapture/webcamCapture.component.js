import React from 'react';
import Webcam from 'react-webcam';

export class WebcamCapture extends React.Component {
  state = {
    isWebcamReady: false,
    imageSrc: null,
  };

  handleUserMedia = () => {
    this.setState({ isWebcamReady: true });
  };

  capture = () => this.setState({ imageSrc: this.webcam.getScreenshot() });

  render() {
    return (
      <div className="webcam__container">
        {!this.state.imageSrc ?
          <Webcam
            audio={false}
            ref={(node) => { this.webcam = node; }}
            onUserMedia={this.handleUserMedia}
            style={{
              width: '100%',
              maxWidth: 500,
              height: 'auto',
            }}
          /> :
          null
        }

        <div className="webcam__circle" />
      </div>
    );
  }
}
