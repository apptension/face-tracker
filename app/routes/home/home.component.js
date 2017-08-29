import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home">
        <h1 className="home__title">
          <i className="home__title-logo" /> Face Tracker
        </h1>

        <div>
          <Link to="/contact">Contact</Link>
        </div>

        <RaisedButton
          label="Click me"
          primary
        />
      </div>
    );
  }
}
