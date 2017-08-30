import React, { Component } from 'react';
import { RaisedButton, FlatButton, TextField } from 'material-ui';

export class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="register__form" onSubmit={this.handleSubmit} noValidate>
        <TextField
          className="register__form-item-wrapper"
          name="firstName"
          type="text"
          placeholder="First name"
        />

        <TextField
          className="register__form-item-wrapper"
          name="lastName"
          type="text"
          placeholder="Last name"
        />

        <TextField
          className="register__form-item-wrapper"
          name="email"
          type="email"
          placeholder="E-mail"
        />

        <div className="register__form-upload">
          <RaisedButton
            containerElement="label"
            label="Choose file"
            className="register__upload-button"
          >
            <input className="register__upload-input" type="file" />
          </RaisedButton>
        </div>

        <RaisedButton className="register__button register__button--submit" label="Register" type="submit" primary />
        <FlatButton className="register__button" label="Clear" type="reset" />
      </form>
    );
  }
}
