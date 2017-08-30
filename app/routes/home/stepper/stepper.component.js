import React, { Component } from 'react';
import {
  Step,
  Stepper as UIStepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';

export class Stepper extends Component {
  render() {
    return (
      <UIStepper
        activeStep={1}
        orientation="vertical"
      >
        <Step>
          <StepLabel>Please tell your name and surname.</StepLabel>

          <StepContent>
            <RaisedButton
              label="Start"
            />
          </StepContent>
        </Step>

        <Step>
          <StepLabel>
            Please look at the phone.
          </StepLabel>

          <StepContent>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          </StepContent>
        </Step>
      </UIStepper>
    );
  }
}
