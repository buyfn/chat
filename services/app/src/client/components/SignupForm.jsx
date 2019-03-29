import React from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUpForm extends React.Component {
  signup = ({ signupUsername, signupPassword }) => {
    this.props.signup(signupUsername, signupPassword);
    this.props.reset();
  }

  render() {
    return (
      <div className="signUpForm" id="signUpForm">
        <form onSubmit={this.props.handleSubmit(this.signup)}>
          <label className="signUpForm__label">
            Username:&nbsp;
            <Field name="signupUsername" required component="input" type="text" id="signupUsername" />
          </label>
          <label className="signUpForm__label">
            Password:&nbsp;
            <Field name="signupPassword" required component="input" type="password" id="signupPassword" />
          </label>
          <button className="btn btn--secondary" type="submit">Sign up</button>
        </form>
        <span className="error">{this.props.errorMsg}</span>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup',
})(SignUpForm);
