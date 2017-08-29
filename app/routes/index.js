import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';

import App from './app.container';
import Contact from './contact';
import Home from './home';
import NotFound from './notFound';
import Register from './register';

export class RootContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <App location={this.props.location}>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/contact" component={Contact} />

          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}

export default withRouter(RootContainer);
