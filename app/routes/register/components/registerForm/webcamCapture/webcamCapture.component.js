import React from 'react';
import Webcam from 'react-webcam';
import Measure from 'react-measure';

export class WebcamCapture extends React.Component {
  state = {
    isWebcamReady: false,
    imageSrc: null,
    width: 0,
    height: 0,
  };

  handleUserMedia = () => {
    this.setState({ isWebcamReady: true });
  };

  capture = () => this.setState({ imageSrc: this.webcam.getScreenshot() });

  handleResize = ({ bounds: { width } }) => this.setState({
    width,
    height: width * 0.75,
  });

  render() {
    return (
      <Measure bounds onResize={this.handleResize}>
        {({ measureRef }) => (
          <div ref={measureRef} className="register-webcam__container">
            <Webcam
              audio={false}
              ref={(node) => { this.webcam = node; }}
              onUserMedia={this.handleUserMedia}
              width={this.state.width}
              height={this.state.height}
            />

            <div className="register-webcam__circle" />
          </div>
        )}
      </Measure>
    );
  }
}
