import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from './components/registerForm/registerForm.component';

export class RegisterContainer extends PureComponent {
  render() {
    return (
      <div className="register">
        <RegisterForm />
      </div>
    );
  }
}

export default connect(null, null)(RegisterContainer);
