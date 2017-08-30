import React, { Component } from 'react';
import { RaisedButton, FlatButton, TextField, Stepper, Step, StepLabel, StepContent, GridList, GridTile } from 'material-ui';
import { WebcamCapture } from './webcamCapture/webcamCapture.component';

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
          <StepContent style={{ minWidth: 250 }}>
            <WebcamCapture />

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
