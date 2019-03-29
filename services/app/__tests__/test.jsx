import '@babel/polyfill';

import React from 'react';
import { Simulate, render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../src/client/reducers';
import Main from '../src/client/components/Main.jsx';

const store = createStore(reducer);

test('Renders signup and signin forms', () => {
  const { getByText, container } =
    render(<Provider store={store}><Main /></Provider>);

  expect(container.firstChild).toMatchSnapshot();

  Simulate.click(getByText('Login'));
  expect(container.firstChild).toMatchSnapshot();

  Simulate.click(getByText('Sign up'));
  expect(container.firstChild).toMatchSnapshot();

  Simulate.click(getByText('Sign up'));
  expect(container.firstChild).toMatchSnapshot();
});
