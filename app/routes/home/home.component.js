import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';

import { WebcamCapture } from './webcamCapture/webcamCapture.component';

export class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
    errors: PropTypes.array,
    recognize: PropTypes.func.isRequired,
    resetUser: PropTypes.func.isRequired,
  };

  state = {
    isStarted: false,
  };

  handleStart = () => {
    this.setState({ isStarted: true });
  };

  handleNextTry = () => {
    this.setState({ isStarted: false });
    this.props.resetUser();
  };

  get activeStep() {
    if (this.props.user || this.props.errors) {
      return 2;
    }

    if (this.state.isStarted) {
      return 1;
    }

    return 0;
  }

  formatDate = (date) => moment.unix(date).format('LLLL');

  renderResultHeader() {
    return this.props.errors ? 'Error!' : 'Success!';
  }

  renderContent() {
    const { errors, user } = this.props;

    if (!(errors || user)) {
      return null;
    }

    if (errors) {
      return (
        <ul>
          {errors.map(({ Message }, index) => (
            <li key={index}>{Message}</li>
          ))}
        </ul>
      );
    }

    return (
      <div>
        <h3>{`Hi, ${user.firstName} ${user.lastName}!`}</h3>

        <p>{`Time start: ${this.formatDate(user.startTime)}`}</p>

        {user.endTime ? <p>{`Time end: ${this.formatDate(user.endTime)}`}</p> : null}
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <Stepper
          activeStep={this.activeStep}
          orientation="vertical"
        >
          <Step>
            <StepLabel>Start time logging.</StepLabel>

            <StepContent>
              <RaisedButton
                primary
                label="I'm ready!"
                onClick={this.handleStart}
              />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>Look at the camera</StepLabel>

            <StepContent>
              <WebcamCapture onCapture={this.props.recognize} />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>{this.renderResultHeader()}</StepLabel>

            <StepContent>
              {this.renderContent()}

              <RaisedButton
                primary
                label="Next try"
                onClick={this.handleNextTry}
              />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}
