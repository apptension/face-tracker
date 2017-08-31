import React, { Component } from 'react';
import Helmet from 'react-helmet';


export class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <Helmet
          title="Not Found"
        />

        <h1>404</h1>
      </div>
    );
  }
}
