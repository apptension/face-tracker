import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - Apptension React Boilerplate"
          defaultTitle="Apptension React Boilerplate"
          meta={[
            { name: 'description', content: 'Apptension React Boilerplate application' },
          ]}
        />

        {React.Children.only(this.props.children)}
      </div>
    );
  }
}
