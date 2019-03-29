import React from 'react';
import renderer from 'react-test-renderer';
import Messages from '../src/client/components/Messages.jsx';

it('renders messages correctly', () => {
  const messages = [
    { username: 'anon', text: 'hi', _id: 1 },
    { username: 'vovan', text: 'zdarova', _id: 2 },
  ];
  const tree = renderer
    .create(<Messages messages={messages} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
