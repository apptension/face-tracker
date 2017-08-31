import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import config from 'env-config';

import App from './app.container';
import Home from './home';
import NotFound from './notFound';

export class RootContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <App location={this.props.location}>
        <Switch>
          <Route exact path={`${config.basePath}/`} component={Home} />

          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}

export default withRouter(RootContainer);
