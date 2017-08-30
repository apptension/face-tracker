import React, { Component } from 'react';
import { RaisedButton, FlatButton, TextField, Stepper, Step, StepLabel, StepContent, GridList, GridTile } from 'material-ui';
import { WebcamCapture } from './webcamCapture/webcamCapture.component';

const styles = {
  root: {
    maxWidth: 500,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
  },
  {
    img: 'https://www.w3schools.com/css/img_fjords.jpg',
  },
];

export class RegisterForm extends Component {
  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;

    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div>
        <RaisedButton
          className="register__steps-next-button"
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    return (
      <Stepper activeStep={this.state.stepIndex} orientation="vertical">
        <Step>
          <StepLabel>Enter your details</StepLabel>
          <StepContent>
            <div className="register__details">
              <TextField
                className="register__details-item-wrapper"
                name="firstName"
                type="text"
                placeholder="First name"
                required
              />

              <TextField
                className="register__details-item-wrapper"
                name="lastName"
                type="text"
                placeholder="Last name"
                required
              />

              <TextField
                className="register__details-item-wrapper"
                name="email"
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
            {this.renderStepActions(0)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Add photos</StepLabel>
          <StepContent>
            <WebcamCapture />
            <div style={styles.root}>
              <GridList style={styles.gridList} cols={2.2}>
                {tilesData.map((tile, index) => (
                  <GridTile key={index}>
                    <img src={tile.img} />
                  </GridTile>
                ))}
              </GridList>
            </div>

            {this.renderStepActions(1)}
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Summary</StepLabel>
          <StepContent>
            {this.renderStepActions(2)}
          </StepContent>
        </Step>
      </Stepper>
    );
  }
}
