import React, { Component } from 'react';

import { Stepper } from './stepper/stepper.component';

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home">
        <Stepper />
      </div>
    );
  }
}
