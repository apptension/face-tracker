import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ContactContainer extends Component {
  render() {
    return (
      <div>Contact</div>
    );
  }
}

export default connect(null, null)(ContactContainer);
