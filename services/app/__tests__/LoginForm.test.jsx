import '@babel/polyfill';

import React from 'react';
import { Simulate, cleanup, renderIntoDocument } from 'react-testing-library';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import LoginForm from '../src/client/components/LoginForm.jsx';
import reducer from '../src/client/reducers';

const handleLogin = jest.fn();

const mapStateToProps = (state) => {
  const props = {
    showForm: state.showForm,
    loginError: state.loginError,
  };
  return props;
};

const mapDispatchToProps = () => ({
  login: (username, password) => {
    handleLogin({ username, password });
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

const store = createStore(reducer);

test('Renders signup and signin forms', () => {
  const expectedUsername = 'admin';
  const expectedPassword = '12345';

  const { getByLabelText, getByText } =
    renderIntoDocument(<Provider store={store}>
      <LoginFormContainer />
    </Provider>);

  const usernameInput = getByLabelText('Username:');
  usernameInput.value = expectedUsername;
  Simulate.change(usernameInput);

  const passwordInput = getByLabelText('Password:');
  passwordInput.value = expectedPassword;
  Simulate.change(passwordInput);

  const submitButton = getByText('Login');
  submitButton.click();

  expect(handleLogin).toHaveBeenCalledTimes(1);
  expect(handleLogin).toHaveBeenCalledWith(expect.objectContaining({
    username: expectedUsername,
    password: expectedPassword,
  }));

  cleanup();
});
