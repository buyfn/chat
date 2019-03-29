import React from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends React.Component {
  login = ({ loginUsername, loginPassword }) => {
    this.props.login(loginUsername, loginPassword);
  }

  render() {
    return (
      <div className="loginForm" id="loginForm">
        <form onSubmit={this.props.handleSubmit(this.login)}>
          <label className="loginForm__label">
            Username:&nbsp;
            <Field name="loginUsername" required component="input" type="text" id="loginUsername" />
          </label>
          <label className="loginForm__label">
            Password:&nbsp;
            <Field name="loginPassword" required component="input" type="password" id="loginPassword" />
          </label>
          <button className="btn btn--secondary" type="submit">Login</button>
        </form>
        <span className="error">{this.props.errorMsg}</span>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login',
})(LoginForm);
