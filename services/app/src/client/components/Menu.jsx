import React from 'react';
import ToggleLink from './ToggleLink.jsx';

const LoginInfo = ({ username }) =>
  <li className="menu__item">You are {username}</li>;

const LoginLink = ({
  isLoggedIn,
  logout,
  showForm,
  toggleForm,
}) => {
  if (isLoggedIn) {
    return (<li className="menu__item">
      <a onClick={logout} className="pseudo" href="#">Log out</a>
    </li>);
  }
  return (
    <ToggleLink showForm={showForm} toggleForm={toggleForm} state='login'>
      Login
    </ToggleLink>
  );
};

const SignupLink = ({
  isLoggedIn,
  showForm,
  toggleForm,
}) => {
  if (isLoggedIn) {
    return null;
  }
  return (
    <ToggleLink showForm={showForm} toggleForm={toggleForm} state='signup'>
      Sign up
    </ToggleLink>
  );
};

const Menu = ({
  username,
  isLoggedIn,
  showForm,
  toggleForm,
  logout,
}) =>
  <nav className="header">
    <ul className="menu">
      <LoginInfo username={username} />
      <LoginLink
        isLoggedIn={isLoggedIn}
        logout={logout}
        showForm={showForm}
        toggleForm={toggleForm} />
      <SignupLink isLoggedIn={isLoggedIn} showForm={showForm} toggleForm={toggleForm} />
    </ul>
  </nav>;

export default Menu;
