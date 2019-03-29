import React from 'react';

import MessagesContainer from '../containers/Messages';
import FormContainer from '../containers/Form';
import UserCounterContainer from '../containers/UserCounter';
import LoginFormContainer from '../containers/LoginForm';
import SignupFormContainer from '../containers/SignupForm';
import MenuContainer from '../containers/Menu';
import AuthForm from '../containers/AuthForm';

const Main = () => (
  <div>
    <UserCounterContainer />

    <MenuContainer />

    <AuthForm formType="login">
      <LoginFormContainer />
    </AuthForm>

    <AuthForm formType="signup">
      <SignupFormContainer />
    </AuthForm>

    <FormContainer />

    <MessagesContainer />
  </div>
);

export default Main;
