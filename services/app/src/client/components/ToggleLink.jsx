import React from 'react';

const ToggleLink = ({
  showForm,
  toggleForm,
  state,
  children,
}) =>
  <li className="menu__item">
    <a onClick={() => toggleForm(showForm === state ? 'none' : state)} className="pseudo" href="#">
      {children}
    </a>
  </li>;

export default ToggleLink;
